const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: true // ако искаме да имаме само уникални имена в базата данни
    },
    description: {
        type: String,
        required: true,
        maxlength: 120,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessory: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory',
    }]
});
cubeSchema.path('imageUrl').validate(function () {
    return this.imageUrl.startsWith('http');
}, 'Image url shuold be a link');

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;