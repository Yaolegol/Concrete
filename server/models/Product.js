const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    avalibility: {
        type: Boolean,
        required: true,
        default: true
    },    
    images: Array,
    description: String
});

module.exports = mongoose.model('product', Product);