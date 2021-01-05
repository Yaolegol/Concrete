const customRequire = require('app-root-path').require;
const ProductsModel = customRequire('server/models/product');
const express = require('express')

const router = express.Router();
const perPage = 8;

router.post('/products', (req, res, next) => {
    const currentPage = req.body.page || 0
    const skip = currentPage * perPage

    const filters = {
        minPrice: req.body.filters ? req.body.filters[0] : 0,
        maxPrice: req.body.filters ? req.body.filters[1] : 999999,
    }

    let sort = {};

    if (req.body.sort) {
        sort = req.body.sort.reduce((acc, {id, value}) => {
            return {
                ...acc,
                [id]: value
            }
        }, {})
    }

    ProductsModel
        .find({
            availability: true,
            price: {
                $gte: filters.minPrice,
                $lte: filters.maxPrice
            }
        }, null, {
            limit: perPage,
            skip: skip,
            sort,
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
