const customRequire = require('app-root-path').require;
const express = require('express')
const jwt = require('jsonwebtoken')
const User = customRequire('server/models/User')

const router = express.Router()

router.post('/registration', (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((doc) => {
            if (!doc) {
                const user = new User(req.body)
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
                        res.json({
                            errors: [err.message]
                        })
                    })
            } else {
                res.json({
                    errors: ['User already exists']
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.json({
                errors: ['Server error']
            })
        })
})

module.exports = router
