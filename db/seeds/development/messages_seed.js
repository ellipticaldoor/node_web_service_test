exports.seed = function (knex, Promise) {
  return knex('messages').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return knex('messages').insert({
        message: 'this is a message'
      })
    }).then(function () {
      return knex('messages').insert({
        message: 'something to say'
      })
    }).then(function () {
      return knex('messages').insert({
        message: 'this has meaning'
      })
    }).then(function () {
      return knex('messages').insert({
        message: 'what?'
      })
    })
}
