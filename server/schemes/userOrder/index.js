const customRequire = require('app-root-path').require;
const orderSchema = customRequire('server/schemes/order');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userOrderSchema = new Schema({
    id: {
        ref: 'purchase',
        required: true,
        type: Schema.Types.ObjectId
    },
    purchase: {
        required: true,
        type: [orderSchema],
    },
});

module.exports = userOrderSchema;
