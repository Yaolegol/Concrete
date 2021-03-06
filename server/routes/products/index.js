const customRequire = require('app-root-path').require;
const createErrors = customRequire('helpers/errors');
const isObjectEmpty = customRequire('helpers/object');
const createResponse = customRequire('helpers/response');
const ProductsModel = customRequire('models/product');
const express = require('express');

const router = express.Router();
const perPage = 9;

router.post('/products', (req, res, next) => {
    const currentPage = req.body.page;
    const skip = currentPage > 1 ? (currentPage - 1) * perPage : 0;

    let filters = {};

    if (!isObjectEmpty(req.body.filters)) {
        filters = Object.entries(req.body.filters).reduce((acc, [key, value]) => {
            if (key === 'price') {
                return {
                    ...acc,
                    [key]: {
                        $gte: value[0],
                        $lte: value[1]
                    }
                }
            }
            return {
                ...acc,
                [key]: value
            }
        }, {});
    }

    const sort = !isObjectEmpty(req.body.sort) ? req.body.sort : {};

    ProductsModel
        .find({
            availability: true,
            ...filters
        }, null, {
            limit: perPage,
            skip: skip,
            sort,
        })
        .then(products => {
            ProductsModel
                .count({
                    availability: true,
                    ...filters,
                })
                .then(count => {
                    res.json(
                        createResponse({
                            list: products,
                            count
                        })
                    )
                })
                .catch(err => {
                    console.log(err)
                    res.json(createErrors(['Server error']))
                })
        })
        .catch(err => {
            console.log(err)
            res.json(createErrors(['Server error']))
        })
})

module.exports = router
