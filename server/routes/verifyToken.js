
const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader) return res.status(401).json("you don't have token")

    const token = authHeader.split(" ")[1]  

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if(err) return res.status(403).json("Invalid token")
        req.user = user
        next()
    })
}


const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, ()=> {
        if(req.user._id === req.params.id) {
            next()
        } else {
            res.status(403).json('You are not allowed to do that')
        }
    })
}


const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, ()=> {
        if(req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('You are not admin')
        }
    })
}


module.exports = { verifyToken, verifyTokenAndAuthorization }