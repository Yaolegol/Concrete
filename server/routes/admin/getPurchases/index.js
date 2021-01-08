const customRequire = require('app-root-path').require;
const PurchaseModel = customRequire('server/models/purchase');
const express = require('express');

const router = express.Router()

router.get('/admin/get-purchases', (req, res, next) => {
    PurchaseModel
        .find()
        .populate('purchase.productID')
        .then(doc => {
            if (doc) {
                res.json({
                    data: {
                        purchases: doc,
                    }
                })
            } else {
                res.json({errors: ['Purchases not found']})
            }
        })
        .catch(err => {
            console.log(err)
            res.json({errors: ['Server error']})
        })
})

module.exports = router
