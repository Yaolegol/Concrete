const customRequire = require('app-root-path').require;
const express = require('express')
const jwt = require('jsonwebtoken')
const User = customRequire('server/models/User')

const router = express.Router()

router.get('/user', (req, res, next) => {
    const reqToken = req.get('Authorization').split(' ')[1]

    jwt.verify(reqToken, 'superSecretSecretSecret', (err, decoded) => {
        console.log('decoded')
        console.log(decoded)
        if (decoded) {
            User.findOne({ _id: decoded.id })
                .then(doc => {
                    if (doc) {
                        res.json({
                            data: {
                                user: doc,
                            }
                        })
                    } else {
                        res.json({ errors: 'User not found' })
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
