const buildCreateUser = require("./user/create-user");
const buildFindUser = require("./user/find-user");
const userRepository = require("../adapter");

const createUser = buildCreateUser({ userRepository });
const findUser = buildFindUser({ userRepository });

const userService = Object.freeze({
  createUser,
  findUser,
});

export default userService;
export { createUser, findUser };
