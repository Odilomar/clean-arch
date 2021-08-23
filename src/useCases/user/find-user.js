export default function buildFindUser({ userRepository }) {
  return async function findUser({ findUserDto = {} }) {
    console.log({ ...findUserDto });

    return userRepository.findOne("Odilomar");
  };
}
