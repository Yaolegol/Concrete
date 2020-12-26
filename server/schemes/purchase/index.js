const customRequire = require('app-root-path').require;
const orderSchema = customRequire('server/schemes/order');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    purchase: {
        required: true,
        type: [orderSchema],
    },
    user: {
        ref: 'user',
        type: Schema.Types.ObjectId
    },
});

module.exports = purchaseSchema
