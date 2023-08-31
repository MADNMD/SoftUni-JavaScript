const mongoose = require('mongoose');

const { DB_CONECTION_STRING } = require('./env');

exports.initDB = () => {

    mongoose.connection.on('open', () => console.log('Database is conected!'));

    return mongoose.connect(DB_CONECTION_STRING);
}