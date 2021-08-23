const buildCreateUser = require("./user/create-user");
const buildFindUser = require("./user/find-user");
const userRepository = require("../adapter");

const createUser = buildCreateUser({ userRepository });
const findUser = buildFindUser({ userRepository });

module.exports = { createUser, findUser };
