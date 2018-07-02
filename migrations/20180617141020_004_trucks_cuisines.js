exports.up = function(knex, Promise) {
  return knex.schema.createTable('trucks_cuisines', table => {
  table.increments().notNullable()
  table.integer('truck_id').unsigned().index().references('id').inTable('trucks').onDelete('CASCADE')
  table.integer('cuisine_id').unsigned().index().references('id').inTable('cuisines').onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trucks_cuisines').references('trucks.id').references('trucks.id').onDelete('CASCADE')
}
