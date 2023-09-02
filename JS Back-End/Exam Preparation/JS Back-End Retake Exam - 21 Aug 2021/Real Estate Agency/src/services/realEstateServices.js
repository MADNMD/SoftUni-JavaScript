const Estate = require('../models/Estate');

exports.create = (estateData) => Estate.create(estateData);

exports.getAll = () => Estate.find();

exports.getOneDetailed = (estateId) => Estate.findById(estateId).populate('owner');

exports.getOne = (estateId) => Estate.findById(estateId);

exports.edit = (estateId, estateData) => Estate.updateOne({ _id: estateId }, { $set: estateData }, { runValidators: true });

exports.delete = (estateId) => Estate.findByIdAndDelete(estateId);

exports.search = (searchText) => {

    if (searchText) {
        return (Estate.find({ type: { $regex: searchText, $options: 'i' } }).lean());
    }
};

// exports.lastThreeOffers = () => Estate.find().limit(3);