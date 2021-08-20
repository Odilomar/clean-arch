const { config } = require("dotenv");

config();
const { DB_TYPE, DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

module.exports = {
  dialect: "postgres",
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
};
