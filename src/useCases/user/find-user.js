export default function buildFindUser({ userRepository }) {
  return async function findUser({ findUserDto = {} }) {
    return userRepository.findOne("Odie");
  };
}
