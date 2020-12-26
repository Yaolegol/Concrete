const customRequire = require('app-root-path').require;
const userOrderSchema = customRequire('server/schemes/userOrder');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    admin: {
        default: false,
        type: Boolean,
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    purchases: {
        type: [userOrderSchema]
    },
});

module.exports = userSchema;
