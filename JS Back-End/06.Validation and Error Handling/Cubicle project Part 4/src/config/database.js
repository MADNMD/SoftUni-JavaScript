const mongoose = require('mongoose');
// const contectionString = 'mongodb://localhost:27017/cubicle-tren';
const contectionString = 'mongodb://localhost:27017/softuni-cubicle';

exports.initializeDatabase = () => mongoose.connect(contectionString);