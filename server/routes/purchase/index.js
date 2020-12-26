const customRequire = require('app-root-path').require;
const PurchasesModel = customRequire('server/models/purchase');
const UsersModel = customRequire('server/models/user');
const express = require('express');

const router = express.Router()

router.post('/purchase', (req, res, next) => {
    UsersModel.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                const purchase = new PurchasesModel({
                    email: req.body.email,
                    purchase: req.body.purchase,
                })

                purchase.save()
                    .then(or => {
                        res.json(or)
                    })
                    .catch(err => {
                        res.json(err)
                    })
            } else {
                const purchase = new PurchasesModel({
                    email: req.body.email,
                    purchase: req.body.purchase,
                })

                purchase.save()
                    .then(or => {
                        user.purchases.push(req.body.purchase)
                        user.save()
                            .then(d => {
                                res.json({
                                    data: {
                                        success: true,
                                    }
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
});

module.exports = router
