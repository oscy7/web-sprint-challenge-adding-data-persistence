// build your `/api/projects` router here
const express = require('express')
const Proj = require('./model')
const router = express.Router()


router.get('/', (req,res,next) =>{
    Proj.getAll()
        .then(projects =>{
            res.json(projects)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => { 
   try{
     const postProj = await Proj.postProj(req.body)
      res.json(postProj)
   } catch(err){
     next(err)
   }
  });

module.exports = router;