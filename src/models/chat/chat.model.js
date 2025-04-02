import mongoose from 'mongoose';

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

export const Chat = mongoose.model('Chat', ChatSchema);
