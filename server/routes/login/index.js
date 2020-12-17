const customRequire = require('app-root-path').require;
const express = require('express')
const jwt = require('jsonwebtoken')
const User = customRequire('server/models/User')

const router = express.Router()

router.get('/login', (req, res, next) => {
    const reqToken = req.get('Authorization').split(' ')[1]

    jwt.verify(reqToken, 'superSecretSecretSecret', (err, decoded) => {
        if (decoded) {
            User.findOne({ email: decoded.data.email })
                .then(doc => {
                    if (doc) {
                        const token = jwt.sign({
                            exp: Date.now() + 60 * 60 * 1000,
                        }, 'superSecretSecretSecret')
                        res.json({ token })
                    } else {
                        res.json({ errors: ['Email or password incorrect'] })
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.json({
                        errors: ['Server error']
                    })
                })
        } else {
            console.log(err)
            res.json({
                errors: ['Server error']
            })
        }
    })
})

module.exports = router
