const customRequire = require('app-root-path').require;
const ProductsModel = customRequire('server/models/product');
const express = require('express')

const router = express.Router();
const perPage = 8;

router.post('/products', (req, res, next) => {
    const currentPage = req.body.page || 0
    const skip = currentPage * perPage

    const minPrice = req.body.filters ? req.body.filters[0] : 0
    const maxPrice = req.body.filters ? req.body.filters[1] : 999999

    ProductsModel
        .find({
            availability: true,
            price: {
                $gte: minPrice,
                $lte: maxPrice
            }
        }, null, {
            skip: skip,
            limit: perPage
        })
        .then(products => {
            ProductsModel
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
