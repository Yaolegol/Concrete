const customRequire = require('app-root-path').require;
const UsersModel = customRequire('server/models/user');
const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/registration', (req, res, next) => {
    UsersModel.findOne({ email: req.body.email })
        .then((doc) => {
            if (!doc) {
                const user = new UsersModel(req.body)
                user.save()
                    .then((user) => {
                        const token = jwt.sign({
                            exp: Date.now() + 60 * 60 * 1000,
                            id: user._id,
                        }, 'superSecretSecretSecret');

                        res.json({
                            data: {
                                token,
                            },
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.json({
                            errors: [{
                                key: 'common',
                                message: 'Server error'
                            }]
                        })
                    })
            } else {
                res.json({
                    errors: [
                        {
                            key: 'email',
                            message: 'User already exists',
                        },
                    ]
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.json({
                errors: [{
                    key: 'common',
                    message: 'Server error'
                }]
            })
        })
})

module.exports = router
