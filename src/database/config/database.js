const { config } = require("dotenv");

config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

module.exports = {
  dev: {
    dialect: "postgres",
    host: String(DB_HOST),
    port: Number(DB_PORT),
    database: String(DB_NAME),
    username: String(DB_USER),
    password: String(DB_PASS),
  },
  docker: {
    dialect: "postgres",
    host: String(DB_HOST),
    port: Number(DB_PORT),
    database: String(DB_NAME),
    username: String(DB_USER),
    password: String(DB_PASS),
  },
  prod: {
    dialect: "postgres",
    host: String(DB_HOST),
    port: Number(DB_PORT),
    database: String(DB_NAME),
    username: String(DB_USER),
    password: String(DB_PASS),
  },
};
