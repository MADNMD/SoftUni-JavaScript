const Publication = require('../models/Publication');

exports.getAll = () => Publication.find();

exports.getOne = (publicationId) => Publication.findById(publicationId);

exports.getOneDetailed = (publicationId) => Publication.findById(publicationId).populate('author');// populate автоматично ще се усети да отиде да взема автора да види че ID сочи към userId да вземе данни на user-a  и да ги поулни като username;

exports.create = (publicationData) => Publication.create(publicationData);

exports.update = (publicationId, publicationData) => Publication.updateOne({ _id: publicationId }, { $set: publicationData }, { runValidators: true });

exports.delete = (publicationId) => Publication.deleteOne({ _id: publicationId });