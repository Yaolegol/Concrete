const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderedProducts = require('./OrderedProducts');

const User = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    orders: {
        type: [[OrderedProducts.OrderedProducts]],        
    },
    // orders: {
    //     type: Array
    // },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', User);