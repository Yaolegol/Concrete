const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderedProducts = new Schema({
    number: {
        type: String        
    },
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },    
    count: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    sum: {
        type: Number
    }
});

module.exports = {
    OrderedProducts
};