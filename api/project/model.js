// build your `Project` model here
const db = require('../../data/dbConfig')


const get = () => {
    return db('projects')
  }

  function add(project) {
    return db('projects').insert(project)
      .then(([project_id])=>{
        return db('projects').where('project_id', project_id).first()
      })
  }

  module.exports = {
    get,
    add
}