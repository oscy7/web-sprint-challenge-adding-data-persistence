// build your `/api/projects` router here
const express = require('express')
const helpers = require('./model')
const router = express.Router()

router.use('*', (req, res, next)=>{
    res.json({
        message: 'hello'
    })
})

// router.get('/projects', (req,res,next) =>{
    
// })

// router.post('/projects', (req,res,next) =>{

// })

module.exports = router;