const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find(); // взимам всички аксесуари от базата данни;

exports.getAllWihtout = (ids) => Accessory.find({ _id: { $nin: ids } });

exports.create = (accessoryData) => Accessory.create(accessoryData); // създавам аксесуар в базата данни;