exports.up = function(knex, Promise) {
  return knex.schema.createTable('cuisines', table => {
  table.increments().notNullable();
  table.string('type').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cuisines')
};
