import buildCreateUser from "./user/create-user";
import buildFindUser from "./user/find-user";

const createUser = buildCreateUser({ userRepository });
const findUser = buildFindUser({ userRepository });

const userService = Object.freeze({
  createUser,
  findUser,
});

export default userService;
export { createUser, findUser };
