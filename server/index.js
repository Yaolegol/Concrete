const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

const projectRootPath = path.resolve(__dirname, '../')
const serverRootPath = __dirname

if (process.env.NODE_ENV === 'production') {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(projectRootPath, 'dist'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
        }
    })
} else {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(projectRootPath, 'uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
        }
    })
}

const uploads = multer({ storage: storage })
const router = require(path.resolve(serverRootPath, 'routes', 'router'))
const app = express()

app.use(bodyParser.json())
app.use(uploads.any())
app.use(express.static(path.resolve(projectRootPath, 'dist')))
if (process.env.NODE_ENV !== 'production') {
    app.use(cors())
}
app.use(router)

mongoose
    .connect(
        'mongodb+srv://any:anypsw@veltry-2jqsc.mongodb.net/veltry?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    )
    .then(result => {
        console.log('db connect')
        app.listen(process.env.PORT || 8000, () => console.log('Server start on 8000'))
    })
    .catch(err => {
        console.log(err)
    })
