const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../Model/User')
const bcrypt = require('bcryptjs')


router.post('/register', async (req, res)=> {
    try {
        const user = req.body
        const hashedPass = await bcrypt.hash(user.pass, 10)
        const usernameExist = await User.findOne({username: user.username})

        if(usernameExist) return res.status(403).json('username is already exist!')

        const newUser = new User({
            username: user.username,
            pass: hashedPass
        })
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) { 
        console.log(error)
        res.status(500).json(error)
    }
})

router.post('/login', async (req, res)=> {
    try {
        const user  = req.body

        const foundUser = await User.findOne({username: user.username})
        if(!foundUser) return res.status(404).json('username or passsword is not valid!') 

        const isPassValid = await bcrypt.compare(user.pass, foundUser.pass)
        if(!isPassValid) return res.status(401).json('password is not valid!')

        const { pass, ...others } = foundUser._doc
        const token = jwt.sign(others, process.env.JWT_KEY, { expiresIn: '20s' })
        
        res
        .cookie("token", token, {
            httpOnly: true
        })
        .status(200).json({user: others, token})

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})
  

module.exports = router