const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    availability: {
        default: true,
        required: true,
        type: Boolean
    },
    description: {
        type: String,
    },
    images: {
        type: [String]
    },
    price: {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
});

module.exports = productSchema;
