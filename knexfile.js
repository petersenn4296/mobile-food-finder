module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/mff_api'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
