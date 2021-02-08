const customRequire = require('app-root-path').require;
const userSchema = customRequire('schemes/user');
const mongoose = require('mongoose');

const UsersModel = mongoose.model('user', userSchema);

module.exports = UsersModel;
