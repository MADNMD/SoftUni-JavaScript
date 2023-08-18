const Hotel = require('../models/Hotel');

exports.create = (hotelData) => Hotel.create(hotelData);

exports.getAll = () => Hotel.find();

exports.getOne = (hotelId) => Hotel.findById(hotelId);

exports.getOneDetailed = (hotelId) => Hotel.findById(hotelId).populate('owner');

exports.update = (hotelId, hotelData) => Hotel.updateOne({ _id: hotelId }, { $set: hotelData }, { runValidators: true });

exports.delete = (hotelId) => Hotel.findByIdAndDelete(hotelId);
