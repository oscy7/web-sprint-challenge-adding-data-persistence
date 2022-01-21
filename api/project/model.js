// build your `Project` model here
const db = require('../../data/dbConfig')


const getAll = () => {
    return db('projects')
  }

  async function add(project) {
    return await db('projects').insert(project)
  }

  module.exports = {
    getAll,
    add
}