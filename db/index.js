const { Pool } = require('pg');

const pool = new Pool({
  user: 'docker',
  host: '0.0.0.0',
  password: 'docker',
  database: 'bootstrap',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
