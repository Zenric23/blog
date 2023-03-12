const Topic = require('../Model/Topic')

const router = require('express').Router()



router.get('/', async (req, res) => {
    try {
        const topics = await Topic.find()
        res.status(200).json(topics)
    } catch (error) {
        console.log(error)
    }
})



module.exports = router