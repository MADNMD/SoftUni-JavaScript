const Animal = require('../models/Animal');

exports.create = (animalData) => Animal.create(animalData);

exports.getAll = () => Animal.find();

exports.getOneDetailed = (animalId) => Animal.findById(animalId).populate('owner');

exports.getOne = (animalId) => Animal.findById(animalId);

exports.edit = (animalId, animalData) => Animal.updateOne({ _id: animalId }, { $set: animalData }, { runValidators: true });

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId);

exports.lastThreeAnimals = () => Animal.find().sort({ _id: -1 }).limit(3);

exports.search = (searchLocation) => {

    if (searchLocation) {
        return (Animal.find({ location: { $regex: searchLocation, $options: 'i' } }).lean());
    }

};