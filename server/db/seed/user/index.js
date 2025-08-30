const customRequire = require('app-root-path').require;
const User = customRequire('models/user');
const mongoose = require('mongoose');

const users = [
    {
        admin: true,
        email: 'admin@admin.com',
        password: '123123',
        purchases: [],
    }
];

mongoose.connect('mongodb://localhost:27017/concrete', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(users);

    console.log('Users seeded!');

    mongoose.connection.close();
};

seedDB().catch(console.error);
