exports.seed = function (knex, Promise) {
  return knex('trucks_cuisines').del()
    .then(() => {
      return knex('trucks_cuisines').insert([
        { id: 1, truck_id: 1, cuisine_id: 2},
        { id: 2, truck_id: 2, cuisine_id: 3},
        { id: 3, truck_id: 3, cuisine_id: 4}

      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('trucks_cuisines_id_seq', (SELECT MAX(id) FROM trucks_cuisines));`
    )
  })
}
