const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User_liked = new Schema({
    userId: {
        type: String,
        required: true
    },
    blogId: {
        type: String,
        required: true
    },
    addedAt: {
        type: Date,
        default: new Date()
    }
})

module.exports  = mongoose.model("User_liked", User_liked)