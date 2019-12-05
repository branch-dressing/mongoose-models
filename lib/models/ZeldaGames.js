const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    yearReleased: {
        type: Number,
        required: true,
        minlength: 4,
        maxlength: 4
    }
});

module.exports = mongoose.model('ZeldaGames', schema);