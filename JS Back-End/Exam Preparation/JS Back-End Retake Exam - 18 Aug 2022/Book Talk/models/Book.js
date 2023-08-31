const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Title is required!'],
        minlength: 2
    },

    author: {
        type: String,
        required: [true, 'Author is required!'],
        minlength: 5,
    },

    image: {
        type: String,
        required: [true, 'Image is required'],
        validate: /^https?:\/\//i
    },

    review: {
        type: String,
        required: [true, 'Review is required'],
        minlength: 10,
    },

    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minlength: 3
    },

    stars: {
        type: Number,
        required: [true, 'Stars must be between 1 and 5'],
        minValue: 1,
        maxValue: 5,
    },

    wishingList: [{
        type: mongoose.Types.ObjectId,
        reg: 'User'
    }],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;