const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Order = require('./Order');

const User = new Schema({
    admin: {
        default: false,
        type: Boolean,
    },
    email: {
        required: true,
        type: String
    },
    orders: {
        type: [Order],
    },
    password: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('user', User);
