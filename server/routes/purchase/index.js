const customRequire = require('app-root-path').require;
const PurchasesModel = customRequire('server/models/purchase');
const UsersModel = customRequire('server/models/user');
const express = require('express');

const router = express.Router()

router.post('/purchase', (req, res, next) => {
    const {email, purchase} = req.body;

    const newPurchase = new PurchasesModel({
        email,
        purchase,
    })

    newPurchase.save()
        .then(_purchase => {
            UsersModel.findOne({email})
                .then(user => {
                    if (user) {
                        user.purchases.push({
                            id: _purchase._id,
                            purchase,
                        })
                        user.save()
                            .then(_user => {
                                res.json({
                                    data: {
                                        success: true,
                                    }
                                })
                            })
                            .catch(error => {
                                res.json({
                                    errors: [error]
                                })
                            })
                    } else {
                        res.json({
                            data: {
                                success: true,
                            }
                        })
                    }
                })
                .catch(error => {
                    res.json({
                        errors: [error]
                    })
                })
        })
        .catch(error => {
            res.json({
                errors: [error]
            })
        })
});

module.exports = router
