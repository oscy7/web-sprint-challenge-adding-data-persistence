const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', (req,res,next) =>{
    Resource.get()
        .then(resources =>{
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => { 
   try{
     const postRes = await Resource.postRes(req.body)
      res.status(201).json(postRes)
   } catch(err){
     next(err)
   }
  });

module.exports = router;