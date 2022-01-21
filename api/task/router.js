// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', (req,res,next) =>{
    Tasks.get()
        .then(task =>{
            res.status(200).json(task)
        })
        .catch(next)
  })
  
  router.post('/', async (req, res, next) => { 
   try{
     const postTask = await Tasks.postTask(req.body)
      res.status(201).json(postTask)
   } catch(err){
     next(err)
   }
  });

module.exports = router;