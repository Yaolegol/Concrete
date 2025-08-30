const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const projectRootPath = path.resolve(__dirname, '../');
const serverRootPath = __dirname;

let multerStorage;

if (process.env.NODE_ENV === 'production') {
    multerStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(projectRootPath, 'dist'));
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        }
    })
} else {
    multerStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(projectRootPath, 'uploads'));
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        }
    })
}

const uploads = multer({ storage: multerStorage });
const router = require(path.resolve(serverRootPath, 'routes', 'router'));
const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}
app.use(express.static(path.resolve(projectRootPath, 'dist')));
app.use(bodyParser.json());
app.use(uploads.any());
app.use(router);

mongoose
    .connect(
        'mongodb://localhost:27017/concrete',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(result => {
        console.log('db connect')
        app.listen(process.env.PORT || 8001, () => console.log('Server start on 8001'))
    })
    .catch(err => {
        console.log(err)
    });
