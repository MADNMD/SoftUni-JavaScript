const mongoose = require('mongoose');

const { DB_QEURYSTRING } = require('./env');

exports.initDB = () => {

    mongoose.connection.on('open', () => console.log('Database is connected!'));

    return mongoose.connect(DB_QEURYSTRING);
}