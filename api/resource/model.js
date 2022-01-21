// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
  return db('resources')
}

// const create = (resource) => {
//     return db('resources').insert(resource)
//         .then(([resource_id]) => {
//             return 
//         })
// }

module.exports = {
    getAll,
    
}