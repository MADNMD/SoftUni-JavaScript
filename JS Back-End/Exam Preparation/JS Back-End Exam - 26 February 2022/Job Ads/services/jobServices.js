const Job = require('../models/Job');

exports.create = (jobData) => Job.create(jobData);

exports.getAll = () => Job.find();

exports.getOneDetailed = (jobId) => Job.findById(jobId).populate('author');

exports.getUsersApplied = (jobId) => Job.findById(jobId).populate('usersApplied');

exports.getOne = (jobId) => Job.findById(jobId);

exports.editJob = (jobId, jobData) => Job.updateOne({ _id: jobId }, { $set: jobData }, { runValidators: true });

exports.delete = (jobId) => Job.findByIdAndDelete(jobId);

exports.getAllJobs = () => Job.find().populate('author');

exports.getFirtsThree = () => Job.find().limit(3);

exports.search = (email) => {

    if (email) {
        return (Job.find({ email: { $regex: email, $options: 'i' } }).lean());
    }
};