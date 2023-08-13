const Trip = require('../models/Trip');

exports.getAll = () => Trip.find();

exports.createTrip = (tripData) => Trip.create(tripData);

exports.getOneDetailed = (tripId) => Trip.findById(tripId).populate('creator');

exports.getOne = (tripId) => Trip.findById(tripId);

exports.edit = (tripId, tripData) => Trip.updateOne({ _id: tripId }, { $set: tripData }, { runValidators: true });

exports.delete = (tripId) => Trip.findByIdAndDelete(tripId);

exports.getAllPerson = (userId) => Trip.find({ creator: userId });