const buildUserRepository = require("./gateway/user.repository");

const userRepository = buildUserRepository();

module.exports = userRepository;
