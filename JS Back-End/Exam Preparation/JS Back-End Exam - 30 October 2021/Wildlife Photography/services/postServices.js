const Post = require('../models/Post');

exports.createPost = (postData) => Post.create(postData);

exports.getAllPosts = () => Post.find();

exports.getOneDetailed = (postId) => Post.findById(postId).populate('author');

exports.getOne = (postId) => Post.findById(postId);

exports.update = (postId, postData) => Post.updateOne({ _id: postId }, { $set: postData }, { runValidators: true });

exports.delete = (postId) => Post.findByIdAndDelete(postId);

exports.myPosts = (userId) => Post.find({ author: userId });