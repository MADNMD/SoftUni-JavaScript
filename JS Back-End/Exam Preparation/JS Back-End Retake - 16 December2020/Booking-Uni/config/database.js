const mongoose = require('mongoose');

const {DATABASE_URL} = require('./evn');

exports.initDB = () => {

    mongoose.connection.on('open', () => console.log('Database is conected!'));

    return mongoose.connect(DATABASE_URL);
}