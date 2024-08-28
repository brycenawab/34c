const { Pool } = require("pg");
const db = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:bryce2004@localhost:5432/classroom?schema=public",
});

async function query(sql, params, callback) {
  return db.query(sql, params, callback);
}

module.exports = { query };
