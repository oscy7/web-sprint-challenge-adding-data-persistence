// build your `/api/resources` router here
const express = require('express')
const helpers = require('./model')
const router = express.Router()
router.use('*', (req, res, next)=>{
    res.json({
        message: 'hello'
    })
})

// router.get('/resource', (req,res,next) =>{
    
// })

// router.post('/resource', (req,res,next) =>{

// })

module.exports = router;