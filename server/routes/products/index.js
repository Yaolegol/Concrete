const customRequire = require('app-root-path').require;
const express = require('express')
const Product = customRequire('server/models/Product')

const router = express.Router();
const perPage = 8;

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

module.exports = router
