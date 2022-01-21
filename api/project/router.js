const express = require('express')
const Proj = require('./model')
const router = express.Router()

router.get('/', (req,res,next) =>{
    Proj.get()
        .then(projects =>{
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => { 
   try{
     const postProj = await Proj.postProj(req.body)
      res.status(201).json(postProj)
   } catch(err){
     next(err)
   }
  });

module.exports = router;