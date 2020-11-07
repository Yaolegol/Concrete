const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('category', Category);