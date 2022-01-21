// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()
router.use('*', (req, res, next)=>{
    res.json({
        message: 'hello'
    })
})

router.get('/task', async (req,res,next) =>{
    try{
        const task = await Tasks.getAll()
        res.json(task)
    } catch(err){
        next(err)
    }
})

// router.post('/tasks', (req,res,next) =>{

// })

module.exports = router;