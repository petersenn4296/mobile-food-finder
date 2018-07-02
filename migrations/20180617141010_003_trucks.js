exports.up = function(knex, Promise) {
  return knex.schema.createTable('trucks', table => {
  table.increments().notNullable()
  table.string('name').notNullable().defaultTo('')
  table.integer('owner_id').unsigned().index().references('id').inTable('owners').onDelete('CASCADE')
  table.integer('cuisine_id').unsigned().index().references('id').inTable('cuisines').onDelete('CASCADE')
  table.boolean('veggiefriendly')
  table.string('url').notNullable().defaultTo('')
  table.float('latitude')
  table.float('longitude')// does this need to  ! .integer??
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trucks').references('owners.id').references('cuisines.id').onDelete('CASCADE')
}
