"use strict";

const fs = require("fs");
const path = require("path");
const { config } = require("dotenv");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const dbConfig = require("../config/database");

config();
const { NODE_ENV } = process.env;

const db = {};
const sequelize = new Sequelize(dbConfig[NODE_ENV]);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
