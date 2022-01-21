// build your `Task` model here
const db = require('../../data/dbConfig')

const get = () => {
  return db('tasks')
}

function add(task) {
  return db('tasks').insert(task)
    .then(([task_id])=>{
      return db('task').where('task_id', task_id).first()
    })
}

module.exports = {
    get,
    add 
}