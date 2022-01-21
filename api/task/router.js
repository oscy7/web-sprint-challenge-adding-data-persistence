// build your `/api/tasks` router here
const express = require('express')
const helpers = require('./model')
const router = express.Router()
router.use('*', (req, res, next)=>{
    res.json({
        message: 'hello'
    })
})

// router.get('/tasks', (req,res,next) =>{
    
// })

// router.post('/tasks', (req,res,next) =>{

// })

module.exports = router;