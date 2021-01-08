const customRequire = require('app-root-path').require;
const ProductModel = customRequire('server/models/product');
const cloudinary = require('cloudinary')
const express = require('express');
const fs = require('fs');

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
    })).then((result) => {
        req.files.forEach((file) => {
            fs.unlink(file.path, (err) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log('file removed')
                }
            })
        })
        const imagesUrls = result.map(({secure_url: url}) => url);
        const product = {
            ...req.body,
            images: imagesUrls,
        }
        const productModel = new ProductModel(product);
        productModel.save()
            .then(product => {
                res.json({data: product})
            })
            .catch(err => {
                console.log(err)
                res.json({errors: ['Server error']})
            })
    }).catch((err) => {
        console.log(err)
        res.json({errors: ['Server error']})
    });
})

module.exports = router
