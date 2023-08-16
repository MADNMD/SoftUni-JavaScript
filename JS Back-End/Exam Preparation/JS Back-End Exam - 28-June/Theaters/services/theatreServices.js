const Theater = require('../models/Theater');

exports.getAll = () => Theater.find();

exports.create = (theaterData) => Theater.create(theaterData);

exports.getOne = (theaterId) => Theater.findById(theaterId);

exports.getOneDetailed = (theaterId) => Theater.findById(theaterId).populate('owner');

exports.update = (theaterId, theaterData) => Theater.updateOne({ _id: theaterId }, { $set: theaterData }, { runValidators: true });

exports.update2 = (theaterId, theaterData) => Theater.findByIdAndUpdate(theaterId, theaterData, { new: true, runValidators: true });

exports.delete = (theaterId) => Theater.findByIdAndDelete(theaterId);

exports.sortByDate = () => Theater.find({ isPublic: true }).sort({ createdAt: -1 });

exports.sortByLike = () => Theater.find({ isPublic: true }).sort({ usersLiked: -1 });