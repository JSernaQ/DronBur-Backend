const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        require: false,
        unique: false,
        trim: true
    },

    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },

    phonenumber: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },

    img: {
        type: String,
        default: 'none',
        require: false,
        unique: false,
        trim: true
    }

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = { User };