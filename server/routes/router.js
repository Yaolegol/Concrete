const customRequire = require('app-root-path').require;
const path = require('path');
const adminCreateProductRoute = customRequire('routes/admin/createProduct');
const adminGetPurchasesRoute = customRequire('routes/admin/getPurchases');
const loginRoute = customRequire('routes/login');
const purchaseRoute = customRequire('routes/purchase');
const productsRoute = customRequire('routes/products');
const registrationRoute = customRequire('routes/registration');
const userRoute = customRequire('routes/user');

const express = require('express');
const router = express.Router();
const projectRootPath = path.resolve(__dirname, '../', '../');

router
    .use(adminCreateProductRoute)
    .use(adminGetPurchasesRoute)
    .use(loginRoute)
    .use(purchaseRoute)
    .use(productsRoute)
    .use(registrationRoute)
    .use(userRoute);

router.get('/*', (req, res) => {
    res.sendFile(path.resolve(projectRootPath, 'dist', 'index.html'))
})

module.exports = router
