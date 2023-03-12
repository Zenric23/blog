const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Post = new Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    desc: {
        required: true,
        type: String
    },
    like: [
        {
            type: String
        }
    ],
    topic: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("Post", Post)