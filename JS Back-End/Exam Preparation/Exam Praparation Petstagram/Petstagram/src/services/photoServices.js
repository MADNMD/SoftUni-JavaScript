const Photo = require('../models/Photo');

exports.create = (photoData) => Photo.create(photoData);

exports.getAll = () => Photo.find().populate('owner');

exports.getOneDetailed = (photoId) => Photo.findById(photoId).populate('owner');

exports.getOne = (photoId) => Photo.findById(photoId);

exports.edit = (photoId, photoData) => Photo.updateOne({ _id: photoId }, { $set: photoData }, { runValidators: true });

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId); 

exports.addComment = async (photoId, commentData) => {

    const photo = await Photo.findById(photoId);

    photo.comments.push(commentData);

    return photo.save();
}