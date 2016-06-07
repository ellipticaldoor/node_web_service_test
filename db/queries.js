var knex = require('./knex.js')

function Shows () {
  return knex('messages')
}

// queries

function getAll () {
  return Shows().select()
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle
}

function getSingle (showID) {
  return Shows().where('id', parseInt(showID)).first()
}
