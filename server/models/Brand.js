const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Brand = new Schema({    
    brand: {
        type: String,
        required: true
    }    
});

module.exports = mongoose.model('brand', Brand);