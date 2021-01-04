const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userOrderSchema = new Schema({
    purchaseID: {
        ref: 'purchase',
        required: true,
        type: Schema.Types.ObjectId
    }
});

module.exports = userOrderSchema;
