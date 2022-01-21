const express = require('express')
const projectRouter = require('./project/router')
const tasksRouter = require('./task/router')
const resourceRouter = require('./resource/router')
const server = express()

server.use(express.json())
server.use('/api/projects',projectRouter)
server.use('/api/tasks',tasksRouter)
server.use('/api/resource',resourceRouter)

module.exports = server 