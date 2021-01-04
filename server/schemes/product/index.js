const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    availability: {
        type: Boolean,
        required: true,
        default: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: String,
    images: Array,
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
});

module.exports = productSchema;
