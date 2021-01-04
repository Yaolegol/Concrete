const customRequire = require('app-root-path').require;
const UsersModel = customRequire('server/models/user');
const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/user', (req, res, next) => {
    const reqToken = req.get('Authorization').split(' ')[1]

    jwt.verify(reqToken, 'superSecretSecretSecret', (err, tokenData) => {
        if (tokenData) {
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
                        res.json({
                            data: {
                                user: doc,
                            }
                        })
                    } else {
                        res.json({errors: 'User not found'})
                    }
                })
                .catch(err => {
                    res.json(err)
                })
        } else {
            console.log(err)
            res.json({
                errors: ['Token not valid']
            })
        }
    })
})

module.exports = router
