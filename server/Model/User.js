const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema({
    username: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'https://st2.depositphotos.com/1502311/12020/v/950/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg'
    }
})


module.exports = mongoose.model('User', User)