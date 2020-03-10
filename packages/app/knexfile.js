require("dotenv").config();
const databaseName = "planetexpress_dev";

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
