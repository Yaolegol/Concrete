const customRequire = require('app-root-path').require;
const adminCreateProductRoute = customRequire('server/routes/admin/createProduct');
const adminGetPurchasesRoute = customRequire('server/routes/admin/getPurchases');
const loginRoute = customRequire('server/routes/login');
const purchaseRoute = customRequire('server/routes/purchase');
const productsRoute = customRequire('server/routes/products');
const registrationRoute = customRequire('server/routes/registration');
const userRoute = customRequire('server/routes/user');

const express = require('express');
const router = express.Router();

router
    .use(adminCreateProductRoute)
    .use(adminGetPurchasesRoute)
    .use(loginRoute)
    .use(purchaseRoute)
    .use(productsRoute)
    .use(registrationRoute)
    .use(userRoute);

if (process.env.NODE_ENV === 'production') {
    router.get('/*', (req, res) => {
        const path = require('path')
        res.sendFile(path.resolve('/app', 'dist', 'index.html'))
    })
}

module.exports = router
