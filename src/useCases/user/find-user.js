module.exports = function buildFindUser({ userRepository }) {
  return async function findUser({ id }) {
    if (!id) throw new Error("You need a id to find user!");

    return userRepository.findOneById(id);
  };
};
