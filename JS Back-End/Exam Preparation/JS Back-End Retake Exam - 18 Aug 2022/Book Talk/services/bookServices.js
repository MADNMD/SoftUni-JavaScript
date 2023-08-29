const Book = require('../models/Book');

exports.create = (bookData) => Book.create(bookData);

exports.getAll = () => Book.find();

exports.getOneDetailed = (bookId) => Book.findById(bookId).populate('owner');

exports.getOne = (bookId) => Book.findById(bookId);

exports.updateBook = (bookId, bookData) => Book.updateOne({ _id: bookId }, { $set: bookData }, { runValidators: true });

exports.deleteBook = (bookId) => Book.findByIdAndDelete(bookId);

exports.getMyWishBook = (userId) => Book.find({ wishingList: userId }).lean();