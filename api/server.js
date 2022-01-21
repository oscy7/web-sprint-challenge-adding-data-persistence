// build your server here and require it from index.js
const express = require('express')
const projectRouter = require('./project/router')
const tasksRouter = require('./task/router')
const resourceRouter = require('./resource/router')
const server = express()

server.use(express.json())
server.use('/api',projectRouter)
server.use('/api',tasksRouter)
server.use('/api',resourceRouter)

module.exports = server 