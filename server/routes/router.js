const express = require('express')
const User = require('../models/User')
const Product = require('../models/Product')
const Category = require('../models/Category')
const Brand = require('../models/Brand')
const Orders = require('../models/Orders')
const fs = require('fs')
const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name: 'yaolegol',
    api_key: '236679426674354',
    api_secret: '2rgvR0xMIJVgSsw9DseKuge_H7c'
})
const jwt = require('jsonwebtoken')

const router = express.Router()

const perPage = 8

router.get('/products', (req, res, next) => {
    const currentPage = req.body.page || 0
    const skip = currentPage * perPage

    Product
        .find(null, null, {
            skip: skip,
            limit: perPage
        })
        .then(products => {
            Product
                .count()
                .then(count => {
                    res.json({
                        data: {
                            list: products,
                            count
                        }
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/products', (req, res, next) => {
    const currentPage = req.body.page || 0
    const skip = currentPage * perPage
    // for files use req.file
    console.log(req.body)

    const minPrice = req.body.filters ? req.body.filters[0] : 0
    const maxPrice = req.body.filters ? req.body.filters[1] : 999999

    let sortBy = null
    if (req.body.sort) {
        if (req.body.sort === 'High_price') {
            sortBy = '-price'
        } else {
            sortBy = 'price'
        }
    }

    console.log(minPrice, maxPrice)
    Product
        .find({
            avalibility: true,
            price: {
                $gte: minPrice,
                $lte: maxPrice
            }
        }, null, {
            skip: skip,
            limit: perPage
        })
        .sort(sortBy)
        .then(products => {
            Product
                .count({
                    avalibility: true,
                    price: {
                        $gte: minPrice,
                        $lte: maxPrice
                    }
                })
                .then(count => {
                    res.json({
                        products,
                        count
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/user_history', (req, res, next) => {
    const reqToken = req.get('Authorization').split(' ')[1]

    jwt.verify(reqToken, 'superSecretSecretSecret', function (err, decoded) {
        if (decoded) {
            // Orders
            //     .find()
            //     .populate('order.productID')
            //     .then(doc => {
            //         if (doc) {
            //             res.json({ user: doc });
            //         } else {
            //             res.json({ error: 'history not found' });
            //         }
            //     })
            //     .catch(err => {
            //         res.json(err);
            //     });
            User.findOne({ email: decoded.data.email }, 'orders')
                .populate({ path: 'orders.productID', select: 'title' })
                .then(doc => {
                    if (doc) {
                        res.json({ user: doc })
                    } else {
                        res.json({ error: 'history not found' })
                    }
                })
                .catch(err => {
                    res.json(err)
                })
        } else {
            console.log(err)
        }
    })
})

router.get('/admin_history', (req, res, next) => {
    const reqToken = req.get('Authorization').split(' ')[1]

    jwt.verify(reqToken, 'superSecretSecretSecret', function (err, decoded) {
        if (decoded) {
            Orders
                .find()
                .populate({ path: 'order.productID', select: 'title' })
                .then(doc => {
                    if (doc) {
                        res.json({ orders: doc })
                    } else {
                        res.json({ error: 'history not found' })
                    }
                })
                .catch(err => {
                    res.json(err)
                })
        } else {
            console.log(err)
        }
    })
})

router.get('/admin/get-admin-data', (req, res, next) => {
    // for files use req.file

    async function getAdminData () {
        const adminData = {}

        adminData.category = await Category
            .find()
            .catch(err => {
                console.log(err)
            })

        adminData.brand = await Brand
            .find()
            .catch(err => {
                console.log(err)
            })

        console.log(adminData)
        if (adminData) res.json(adminData)
    }

    getAdminData()
})

router.post('/admin/create-product', (req, res, next) => {
    const product = new Product(req.body)
    product.save()
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/admin/create-product-images', (req, res, next) => {
    const urls = []

    async function sendImagesToCloudinary () {
        for (const file of req.files) {
            console.log('!!!!!!!!!!!!!!!!!file.path', file.path)

            await cloudinary.uploader.upload(
                file.path,
                {
                    public_id: `${Date.now()}`,
                    resource_type: 'auto'
                }
            ).then(result => {
                fs.unlink(file.path, function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                urls.push(result.url)
            })
                .catch(err => {
                    console.log(err)
                })
        }
        res.json(urls)
    }

    sendImagesToCloudinary()
})

router.post('/admin/create-category', (req, res, next) => {
    // for files use req.file
    console.log(req.body)

    const category = new Category(req.body)
    category.save()
        .then(category => {
            res.json(category)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/admin/create-brand', (req, res, next) => {
    // for files use req.file
    console.log(req.body)

    const brand = new Brand(req.body)
    brand.save()
        .then(brand => {
            res.json(brand)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/order', (req, res, next) => {
    User.findOne({ email: req.body.user })
        .then(doc => {
            if (!doc) {
                const order = new Orders({
                    order: req.body.order,
                    email: req.body.user
                })

                order.save()
                    .then(or => {
                        res.json(or)
                    })
                    .catch(err => {
                        res.json(err)
                    })
            } else {
                const order = new Orders({
                    order: req.body.order,
                    email: req.body.user
                })

                order.save()
                    .then(or => {
                        doc.orders.push(req.body.order)
                        doc.save()
                            .then(d => {
                                res.json({
                                    orders: or,
                                    user: d
                                })
                            })
                            .catch(err => {
                                res.json(err)
                            })
                    })
                    .catch(err => {
                        res.json(err)
                    })
            }
        })
        .catch(error => {
            console.log(error)
        })
})

router.post('/registration', (req, res, next) => {
        User.findOne({ email: req.body.email })
            .then((doc) => {
                if (!doc) {
                    const user = new User(req.body)
                    user.save()
                        .then((user) => {
                            const token = jwt.sign({
                                exp: Math.floor(Date.now() / 1000) + (60 * 60)
                            }, 'superSecretSecretSecret');

                            res.json({
                                data: {
                                    token,
                                    user,
                                },
                            })
                        })
                        .catch(err => {
                            res.json(err)
                        })
                } else {
                    res.json({ error: 'User already exists' })
                }
            })
            .catch((error) => {
                console.log(error)
            })
})

router.get('/auth', (req, res, next) => {
        User.findOne({ email: req.body.email, password: req.body.password }, 'email admin')
            .then(doc => {
                if (doc) {
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: {
                            id: doc._id,
                            email: doc.email,
                            admin: doc.admin
                        }
                    }, 'superSecretSecretSecret')
                    res.json({ token, user: doc })
                } else {
                    res.json({ error: 'email or password incorrect' })
                }
            })
            .catch(err => {
                res.json(err)
            })
})

router.get('/auth', (req, res, next) => {
    const reqToken = req.get('Authorization').split(' ')[1]

    jwt.verify(reqToken, 'superSecretSecretSecret', function (err, decoded) {
        if (decoded) {
            User.findOne({ email: decoded.data.email }, 'email admin')
                .then(doc => {
                    if (doc) {
                        const token = jwt.sign({
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                            data: {
                                id: doc._id,
                                email: doc.email,
                                admin: doc.admin
                            }
                        }, 'superSecretSecretSecret')
                        res.json({ token, user: doc })
                    } else {
                        res.json({ error: 'email or password incorrect' })
                    }
                })
                .catch(err => {
                    res.json(err)
                })
        } else {
            console.log(err)
        }
    })
})

if (process.env.NODE_ENV === 'production') {
    router.get('/*', (req, res) => {
        const path = require('path')
        res.sendFile(path.resolve('/app', 'build', 'index.html'))
    })
}

module.exports = router
