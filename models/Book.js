const mongoose = require('mongoose');
const { type } = require('os');

const booksSchema = new mongoose.Schema({

    Name:{
        type: String,
        required: true
    },
    Type:{
        type: String,
        required: true
    },
    Author:{
        type: String,
        default: "Unknown"
    },
    Price:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Book', booksSchema);