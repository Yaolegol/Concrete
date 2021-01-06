const customRequire = require('app-root-path').require;
const UsersModel = customRequire('server/models/user');
const cloudinary = require('cloudinary')
const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');

cloudinary.config({
    cloud_name: 'yaolegol',
    api_key: '236679426674354',
    api_secret: '2rgvR0xMIJVgSsw9DseKuge_H7c'
})

const router = express.Router()

router.post('/admin/create-product', (req, res, next) => {
    Promise.all(req.files.map((file) => {
        return cloudinary.uploader.upload(file.path, {
                public_id: `${Date.now()}`,
                resource_type: 'auto'
            }
        )
    })).then((results) => {
        req.files.forEach((file) => {
            fs.unlink(file.path, (err) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log('file removed')
                }
            })
        })
        console.log('results')
        console.log(results)

    }).catch((err) => {
        console.log(err)
    });


    // async function sendImagesToCloudinary () {
    //     for (const file of req.files) {
    //         console.log('!!!!!!!!!!!!!!!!!file.path', file.path)
    //
    //         await cloudinary.uploader.upload(
    //             file.path,
    //             {
    //                 public_id: `${Date.now()}`,
    //                 resource_type: 'auto'
    //             }
    //         ).then(result => {
    //             fs.unlink(file.path, function (err) {
    //                 if (err) {
    //                     console.log(err)
    //                 }
    //             })
    //             urls.push(result.url)
    //         })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     }
    //     res.json(urls)
    // }

    // sendImagesToCloudinary()
})

module.exports = router
