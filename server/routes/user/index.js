const customRequire = require('app-root-path').require;
const createErrors = customRequire('helpers/errors');
const createResponse = customRequire('helpers/response');
const UsersModel = customRequire('models/user');
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router()

router.get('/user', (req, res, next) => {
    const reqToken = req.get('Authorization').split(' ')[1]

    jwt.verify(reqToken, 'superSecretSecretSecret', (err, tokenData) => {
        if (tokenData && !err) {
            UsersModel.findOne({_id: tokenData.id})
                .populate({
                    path: 'purchases',
                    populate: {
                        path: 'purchaseID',
                        populate: {
                            path: 'purchase',
                            populate: {
                                path: 'productID'
                            }
                        }
                    }
                })
                .then(doc => {
                    if (doc) {
                        res.json(createResponse({user: doc}))
                    } else {
                        res.json(createErrors(['User not found']))
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.json(createErrors(['Server error']))
                })
        } else {
            res.json(createErrors(['Token not valid']))
        }
    })
})

module.exports = router
