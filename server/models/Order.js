const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    count: {
        required: true,
        type: Number
    },
    number: {
        type: Number
    },
    price: {
        required: true,
        type: Number
    },
    productID: {
        ref: 'product',
        required: true,
        type: Schema.Types.ObjectId
    },
    sum: {
        required: true,
        type: Number
    }
});

module.exports = Order;
