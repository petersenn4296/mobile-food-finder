exports.seed = function (knex, Promise) {
  return knex('owners').del()
    .then(() => {
        return knex('owners').insert([
        { id: 1, username: 'Flynt Rudolph', password: "password here", email: 'flynt@gmail.com'},
        { id: 2, username: 'Peter Senn', password: "password here", email: 'peter@gmail.com'}

      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('owners_id_seq', (SELECT MAX(id) FROM owners));`
      );
    })
}
