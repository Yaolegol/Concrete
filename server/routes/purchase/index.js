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
                            purchaseID: _purchase._id,
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
                                console.log(error)
                                res.json({
                                    errors: ['Server error']
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
                    console.log(error)
                    res.json({
                        errors: ['Server error']
                    })
                })
        })
        .catch(error => {
            console.log(error)
            res.json({
                errors: ['Server error']
            })
        })
});

module.exports = router
