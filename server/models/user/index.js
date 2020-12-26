const customRequire = require('app-root-path').require;
const userSchema = customRequire('server/schemes/user');
const mongoose = require('mongoose');

const UsersModel = mongoose.model('user', userSchema);

module.exports = UsersModel;
