// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()
router.use('*', (req, res, next)=>{
    res.json({
        message: 'hello'
    })
})

router.get('/resources', async (req,res,next) =>{
    try{
        const resource = await Resource.getAll()
        res.json(resource)
    } catch(err){
        next(err)
    }
})

// router.post('/resource', (req,res,next) =>{

// })

module.exports = router;