require("dotenv").config();
const pg = require('pg');


const databaseName = "planetexpress_dev";

console.log(process.env.DATABASE_URL)
pg.defaults.ssl = true;

const connectionUrl =
  process.env.DATABASE_URL ||
  `postgres://postgres:test@localhost:5434/${databaseName}`;

module.exports = {
  client: "pg",
  connection: connectionUrl,
  migrations: {
    directory: `${__dirname  }/db/migrations`
  }
};
