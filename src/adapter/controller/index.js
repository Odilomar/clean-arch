const buildGetUser = require("./user/get-user");
const buildPostUser = require("./user/post-user");

const { createUser, findUser } = require("../../useCases");

const getUser = buildGetUser({ findUser });
const postUser = buildPostUser({ createUser });

const userController = Object.freeze({
  getUser,
  postUser,
});

// export default userController;
module.exports = { getUser, postUser };
