const mongoose = require('mongoose');


const exerciseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 250
    },

    description: {
        type: String,
        required: true,
        maxlength: 250
    },

    duration: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },
},{
        timestamps: true,
});

module.exports = mongoose.model('Exercise', exerciseSchema);