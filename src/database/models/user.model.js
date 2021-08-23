const config = require("../config");

module.exports = function User(sequelize, DataTypes) {
  return sequelize.define(
    config.tableName.user,
    {
      name: DataTypes.STRING,
      birth: DataTypes.DATE,
      email: DataTypes.STRING,
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
};
