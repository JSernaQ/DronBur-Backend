const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        trim: true
    },
    images: [{
        type: String
    }],
    videos: [{
        type: String
    }],
    likes: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }],
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            comment: String,
            createdAt: { type: Date, default: Date.now }
        }
    ],
    // visibility: {
    //     type: String,
    //     enum: ["public", "private", "friends"],
    //     default: "public"
    // }
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);

module.exports = { Post };
