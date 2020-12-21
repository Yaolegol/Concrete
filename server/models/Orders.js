const mongoose = require('mongoose');
const Order = require('./Order');
const Schema = mongoose.Schema;

const Orders = new Schema({
    email: {
        type: String,
        required: true
    },
    order: {
        type: [Order],
    },
    user: {
        type: Array
    }
});

module.exports = mongoose.model('orders', Orders);
