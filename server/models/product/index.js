const customRequire = require('app-root-path').require;
const productSchema = customRequire('server/schemes/product');
const mongoose = require('mongoose');

const ProductsModel = mongoose.model('product', productSchema);

module.exports = ProductsModel;
