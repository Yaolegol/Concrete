const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const formidable = require('express-formidable')
const multer = require('multer')
const path = require('path')

if (process.env.NODE_ENV === 'production') {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, 'dist'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
        }
    })
} else {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, 'uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
        }
    })
}

const uploads = multer({ storage: storage })

const router = require('./server/routes/router')

const app = express()

app.use(bodyParser.json())
// app.use(formidable());
app.use(uploads.any())
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')))
} else {
    app.use(express.static('./dist'))
}
app.use(router)

mongoose.connect('mongodb+srv://any:anypsw@veltry-2jqsc.mongodb.net/veltry?retryWrites=true&w=majority',
    { useNewUrlParser: true })
    .then(result => {
        console.log('db connect')
        app.listen(process.env.PORT || 8000, () => console.log('Server start on 8000'))
    })
    .catch(err => {
        console.log(err)
    })
