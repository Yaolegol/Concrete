const customRequire = require('app-root-path').require;
const createErrors = customRequire('helpers/errors');
const isObjectEmpty = customRequire('helpers/object');
const createResponse = customRequire('helpers/response');
const ProductsModel = customRequire('models/product');
const express = require('express');

const router = express.Router();
const perPage = 9;

router.post('/products', (req, res, next) => {
    const currentPage = req.body.page || 1;
    const skip = (currentPage - 1) * perPage;

    let filters = {};

    if (!isObjectEmpty(req.body.filters)) {
        filters = Object.entries(req.body.filters).reduce((acc, [key, value]) => {
            if (key === 'price') {
                return {
                    ...acc,
                    [key]: {
                        $gte: Number(value[0]),
                        $lte: Number(value[1])
                    }
                }
            }
            return {
                ...acc,
                [key]: value
            }
        }, {});
    }

    let sort = {};

    if(!isObjectEmpty(req.body.sort)) {
        const {name, value} = req.body.sort;

        sort = {
            [name]: value,
        };
    }

    const _filters = {
        availability: true,
        ...filters,
    }

    ProductsModel
        .find(_filters)
        .sort({
            ...sort,
            _id: -1,
        })
        .skip(skip)
        .limit(perPage)
        .then(products => {
            ProductsModel
                .count(_filters)
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
