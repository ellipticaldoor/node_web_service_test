exports.up = function (knex, Promise) {
  return knex.schema.createTable('messages', function (table) {
    table.increments()
    table.string('message').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('messages')
}
