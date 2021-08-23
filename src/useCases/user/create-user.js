const makeUser = require("../../entities");

module.exports = function buildCreateUser({ userRepository }) {
  return async function createUser(createUserDto) {
    const user = makeUser({ ...createUserDto });

    const existsUser = await userRepository.findOneByEmail(user.getEmail());
    if (existsUser) return existsUser.dataValues;

    return userRepository.create({
      name: user.getName(),
      birth: user.getBirth(),
      email: user.getEmail(),
      id: user.getId(),
      created_at: user.getCreatedAt(),
      updated_at: user.getUpdatedAt(),
      deleted_at: user.getDeletedAt(),
    });
  };
};
