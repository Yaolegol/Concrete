const customRequire = require('app-root-path').require;
const createErrors = customRequire('helpers/errors');
const createResponse = customRequire('helpers/response');
const PurchasesModel = customRequire('models/purchase');
const UsersModel = customRequire('models/user');
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
                                res.json(
                                    createResponse({success: true})
                                )
                            })
                            .catch(error => {
                                console.log(error)
                                res.json(
                                    createErrors(['Server error'])
                                )
                            })
                    } else {
                        res.json(
                            createResponse({success: true})
                        )
                    }
                })
                .catch(error => {
                    console.log(error)
                    res.json(
                        createErrors(['Server error'])
                    )
                })
        })
        .catch(error => {
            console.log(error)
            res.json(
                createErrors(['Server error'])
            )
        })
});

module.exports = router
