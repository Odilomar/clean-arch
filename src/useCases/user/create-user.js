import makeUser from "../../entities";

export default function buildCreateUser({ userRepository }) {
  return async function createUser({ createUserDto }) {
    const user = makeUser(createUserDto);

    const existsUser = await userRepository.findOne({
      email: user.getEmail(),
    });
    if (existsUser) return existsUser;

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
}
