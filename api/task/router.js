// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', async (req,res,next) =>{
    try{
        const task = await Tasks.get()
        res.json(task)
    } catch(err){
        next(err)
    }
})

// router.post('/tasks', (req,res,next) =>{

// })

module.exports = router;