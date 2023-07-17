const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    headline: {
        type: String,
        required: [true, 'Headline is required'],
        minLength: [4, 'The Headline should be a minimum of 4 characters'],
    },

    location: {
        type: String,
        required: [true, 'Location is required'],
        minLength: [8, 'The Location should be a minimum of 8 characters'],
    },

    companyName: {
        type: String,
        required: [true, 'Company name is required'],
        minLength: [3, 'The Company name should be at least 3 characters'],
    },

    companyDescription: {
        type: String,
        required: [true, 'Company description is required'],
        maxLength: [40, 'The Company description should be a maximum of 40 characters'],
    },

    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

    usersApplied: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],

});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;