const { text } = require('express');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    phonenumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    img: {
        type: String,
        default: 'none',
        required: false,
        unique: false,
        trim: true
    },

    bio: {
        type: String,
        default: '',
        required: false,
        unique: false,
    }

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = { User };