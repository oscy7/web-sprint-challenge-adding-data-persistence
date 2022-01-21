// build your server here and require it from index.js
const express = require('express')
const projectRouter = require('./project/router')
const tasksRouter = require('./task/router')
const resourceRouter = require('./resource/router')
const server = express()

server.use(express.json())
server.use('/api/projects',projectRouter)
server.use('/api/tasks',tasksRouter)
server.use('/api/resource',resourceRouter)

// server.use('*', (req,res, next) => {
//     next({status:404, message:'not found'})
// })

// server.use((err,req,res,next) => {
//     res.status(err.status || 400).json({
//         message: err.message
//     })
// })


module.exports = server 