const mongoose = require('mongoose');
const conetctionString = 'mongodb://localhost:27017/softuni-cubicle';

exports.initializeDatabase = () => mongoose.connect(conetctionString);