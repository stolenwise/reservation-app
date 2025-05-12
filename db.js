/** Database for lunchly */

/** Database connection setup for Lunchly */

require("dotenv").config();
const pg = require("pg");

const db = new pg.Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

db.connect();

module.exports = db;
