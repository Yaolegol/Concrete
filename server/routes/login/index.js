const customRequire = require('app-root-path').require;
const UsersModel = customRequire('server/models/user');
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router()

router.post('/login', (req, res, next) => {
    const {email, password} = req.body;
    UsersModel.findOne({email, password})
        .then(doc => {
            if (doc) {
                const token = jwt.sign({
                    exp: Date.now() + 60 * 60 * 1000,
                    id: doc._id,
                }, 'superSecretSecretSecret')

                res.json({
                    data: {
                        token,
                    },
                })
            } else {
                res.json({
                    errors: [{
                        key: 'common',
                        message: 'Email or password incorrect'
                    }]
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.json({
                errors: [{
                    key: 'common',
                    message: 'Server error'
                }]
            })
        })
})

module.exports = router
