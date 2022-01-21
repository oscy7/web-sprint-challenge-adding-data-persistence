const express = require('express')
const Resource = require('./model')
const router = express.Router()


// router.get('/', (req,res,next) =>{
//     Resource.getAll()
//         .then(resource =>{
//             res.json(resource)
//         })
//         .catch(next)
// })

// router.post('/', (req,res,next) =>{
//     Resource.create(req.body)
//         .then(resource => {
//             res.status(200).json(resource)
//         })
//         .catch(next)
// })

router.get('/', (req,res,next) =>{
    Resource.getAll()
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