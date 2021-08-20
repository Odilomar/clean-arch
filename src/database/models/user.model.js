const config = require("../config");

export default function User(sequelize, DataTypes) {
  return sequelize.define(config.tableName.user, {
    name: DataTypes.STRING,
    birth: DataTypes.DATE,
    email: DataTypes.STRING,
  });
}
