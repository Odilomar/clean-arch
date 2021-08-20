export function buildFindUser({ userRepository }) {
  return async function findUser({ findUserDto = {} }) {
    return userRepository.find(findUserDto);
  };
}
