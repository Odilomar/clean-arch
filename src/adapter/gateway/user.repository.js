const { User } = require("../../database/models");

function buildUserRepository() {
  return async function userRepository() {
    return Object.freeze({
      create: ({ name, birth, email }) => User.create({ name, birth, email }),
      findOne: (name) => User.findOne({ where: { name } }),
    });
  };
}

module.exports = buildUserRepository;
