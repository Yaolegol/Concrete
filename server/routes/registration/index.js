const customRequire = require('app-root-path').require;
const createErrors = customRequire('helpers/errors');
const createResponse = customRequire('helpers/response');
const UsersModel = customRequire('models/user');
const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/registration', (req, res, next) => {
    UsersModel.findOne({email: req.body.email})
        .then((doc) => {
            if (!doc) {
                const user = new UsersModel(req.body)
                user.save()
                    .then((user) => {
                        const token = jwt.sign({
                            exp: Date.now() + 60 * 60 * 1000,
                            id: user._id,
                        }, 'superSecretSecretSecret');

                        res.json(
                            createResponse({token})
                        )
                    })
                    .catch(err => {
                        console.log(err);
                        res.json(
                            createErrors([{
                                key: 'common',
                                message: 'Server error'
                            }])
                        )
                    })
            } else {
                res.json(
                    createErrors([{
                        key: 'email',
                        message: 'User already exists',
                    }])
                )
            }
        })
        .catch((error) => {
            console.log(error)
            res.json(
                createErrors([{
                    key: 'common',
                    message: 'Server error'
                }])
            )
        })
})

module.exports = router
