var knex = require('./knex.js')

function Messages () {
  return knex('messages')
}

// queries

function getAll () {
  return Messages().select()
}

module.exports = {
  getAll: getAll,
  getMessage: getMessage,
  addMessage: addMessage
}

function getMessage (messageID) {
  return Messages().where('id', parseInt(messageID)).first()
}

function addMessage (message) {
  return Messages().insert(message, 'id')
}
