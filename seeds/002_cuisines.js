exports.seed = function (knex, Promise) {
  return knex('cuisines').del()
    .then(() => {
      return knex('cuisines').insert([
        { id: 1, type:'American'},
        { id: 2, type: 'Mexican'},
        { id: 3, type:'Chinese'},
        { id: 4, type: 'Vietamese'},
        { id: 5, type:'Korean'},
        { id: 6, type: 'German'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('cuisines_id_seq', (SELECT MAX(id) FROM cuisines));`
      );
    })
}
