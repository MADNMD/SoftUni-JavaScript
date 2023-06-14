const Course = require('../models/Course');

exports.create = (courseData) => Course.create(courseData);

exports.getAll = () => Course.find();

exports.getOneDetailed = (courseId) => Course.findById(courseId).populate('owner');

exports.getOne = (courseId) => Course.findById(courseId);

exports.update = (courseId, courseData) => Course.updateOne({ _id: courseId }, { $set: courseData }, { runValidators: true });

exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.search = (courseText) => {

    if (courseText) {
        return (Course.find({ title: { $regex: courseText, $options: 'i' } }).lean());
    }
}