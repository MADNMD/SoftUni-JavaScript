const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 120,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return this.imageUrl.startsWith('http')
            },
            message: 'Image url should start wiht htpp/s'
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessory: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;