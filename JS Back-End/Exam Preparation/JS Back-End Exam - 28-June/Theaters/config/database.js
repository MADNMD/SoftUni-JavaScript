const mongoose = require('mongoose');

const { DA_CONECTION_STRING } = require('./evn');

exports.initDB = () => {

    mongoose.connection.on('open', () => console.log('Database is conected'));

    return mongoose.connect(DA_CONECTION_STRING);

}