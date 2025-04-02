const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    
    chatId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Chat',
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    messageType: {
        type: String,
        enum: ['text', 'image', 'video', 'note-voice'],
        required: true
    },
    messageStatus: {
        type: String,
        enum: ['sent', 'received', 'read'],
        default: 'sent'
    },

}, { timestamps: true });

const Message = mongoose.model('Message', MessageSchema);

module.exports = { Message }
