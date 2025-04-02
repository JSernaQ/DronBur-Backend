const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({

    participants: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    isGroup: {
        type: Boolean,
        default: false
    },
    groupName: {
        type: String
    },

}, { timestamps: true });

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = { Chat }