const databaseName = "postgres";

const connectionUrl =
  process.env.DATABASE_URL ||
  `postgres://postgres:@localhost:5434/${databaseName}`;

module.exports = {
  client: "pg",
  connection: connectionUrl,
  migrations: {
    directory: `${__dirname  }/db/migrations`
  }
};
