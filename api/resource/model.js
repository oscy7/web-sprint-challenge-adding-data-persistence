const db = require('../../data/dbConfig')

const get = () => {
  return db('resources')
}

function add(resource){
    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return 
        })
}

module.exports = {
    get, 
    add
}