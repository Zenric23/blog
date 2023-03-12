const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cookieParser = require('cookie-parser')
const dotenv = require( 'dotenv')
const cors = require('cors')
const path = require('path')

dotenv.config()

const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')
const User = require('./Model/User')
const Post = require('./Model/Post')
 
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(()=> console.log('CONNECTED TO DB!'))
    .catch((err)=> console.log(err))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: false} ))
app.use(cookieParser())
app.use('/Images', express.static(path.join(__dirname, '/Images')))

app.use('/post', postRoutes)
app.use('/auth', authRoutes)


app.listen(process.env.PORT || 5000, ()=> {
    console.log('connected to PORT 5000!')
})