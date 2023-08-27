const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({

    title: { // каквито са имената тук такива трябва да бъдат и във form - name на hbs файловете
        type: String,
        required: [true, 'Title is required'],
    },
    paintingTechnique: {
        type: String,
        required: [true, 'Painting technique is required'],
    },
    artPicture: {
        type: String,
        required: [true, 'Art picture is required'],
    },
    certificate: {
        type: String,
        enum: ['Yes', 'No'], // освен че е стринг трябва да бъде една от тези две стйности;
        required: [true, 'Certificate is required'],
    },
    author: { //  не е масив защото ще е само единичен автор. Много към един;
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersShared: [{ // тука е масив и правим връзката много към много;
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;