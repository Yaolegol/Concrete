const customRequire = require('app-root-path').require;
const Product = customRequire('models/product');
const mongoose = require('mongoose');

const products = [
    {
        description: 'Описание очень крутого товара',
        images: ['/public/images/1.jpg'],
        price: 10000,
        title: 'Очень крутой товар',
    },
    {
        description: 'Описание очень крутого товара 2',
        images: ['/public/images/2.jpg'],
        price: 5000,
        title: 'Очень крутой товар 2',
    },
    {
        description: 'Описание просто товара',
        images: ['/public/images/3.jpg'],
        price: 1000,
        title: 'Просто товар',
    }
];

mongoose.connect('mongodb://localhost:27017/concrete', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log('Database seeded!');

    mongoose.connection.close();
};

seedDB().catch(console.error);
