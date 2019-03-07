const config = requeire('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])
module.exports = knex