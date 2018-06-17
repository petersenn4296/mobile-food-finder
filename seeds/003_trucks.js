exports.seed = function (knex, Promise) {
  return knex('trucks').del()
    .then(() => {
      return knex('trucks').insert([
        { id: 1, name: 'Tasty Mexican Food', owner_id: 1, cuisine_id: 2, veggiefriendly: true, url: 'mexican.com', latitude: '-40', longitude: '-112'},
        { id: 2, name: 'Tasty Chinese Food', owner_id: 1, cuisine_id: 3, veggiefriendly: true, url: 'chinese.com', latitude: '-45', longitude: '-120'},
        { id: 3, name: 'Tasty Vietamese Food', owner_id: 2, cuisine_id: 4, veggiefriendly: false, url: 'vietamese.com', latitude: '-43', longitude: '-124'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('trucks_id_seq', (SELECT MAX(id) FROM trucks));`
      );
    })
}
