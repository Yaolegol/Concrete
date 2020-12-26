const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    count: {
        required: true,
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
    },
});

module.exports = orderSchema;
