const mongoose = require('mongoose');

const { DB_CONECTED_URL } = require('./evn');

exports.initDB = () => {

    mongoose.connection.on('open', () => console.log('Database is conected!'));

    mongoose.connect(DB_CONECTED_URL);
}