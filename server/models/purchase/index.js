const customRequire = require('app-root-path').require;
const purchaseSchema = customRequire('schemes/purchase');
const mongoose = require('mongoose');

const PurchasesModel = mongoose.model('purchase', purchaseSchema);

module.exports = PurchasesModel;
