const customRequire = require('app-root-path').require;
const createErrors = customRequire('server/helpers/errors');
const createResponse = customRequire('server/helpers/response');
const PurchaseModel = customRequire('server/models/purchase');
const express = require('express');

const router = express.Router()

router.get('/admin/get-purchases', (req, res, next) => {
    PurchaseModel
        .find()
        .populate('purchase.productID')
        .then(doc => {
            if (doc) {
                res.json(
                    createResponse({
                        purchases: doc,
                    })
                )
            } else {
                res.json(createErrors(['Purchases not found']))
            }
        })
        .catch(err => {
            console.log(err)
            res.json(createErrors(['Server error']))
        })
})

module.exports = router
