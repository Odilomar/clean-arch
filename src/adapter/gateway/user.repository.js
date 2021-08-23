const { users } = require("../../database/models");

module.exports = function buildUserRepository() {
  return function userRepository() {
    return Object.freeze({
      create: ({ name, birth, email }) => users.create({ name, birth, email }),
      findOneByEmail: (email) => users.findOne({ where: { email } }),
      findOneByBirth: (birth) => users.findOne({ where: { birth } }),
      findOneByName: (name) => users.findOne({ where: { name } }),
    });
  };
};
