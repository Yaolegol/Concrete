const mongoose = require('mongoose');
const OrderedProducts = require('./OrderedProducts');
const Schema = mongoose.Schema;

const Orders = new Schema({
    order: {
        type: [OrderedProducts.OrderedProducts],
    },
    email: {
        type: String,
        required: true
    },
    user: {
        type: Array
    }
});

module.exports = mongoose.model('orders', Orders);