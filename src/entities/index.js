const buildMakeUser = require("./user.entity");
const {
  validateBirth,
  validateName,
  validateEmail,
} = require("../utils/functions/validations");

module.exports = buildMakeUser({ validateBirth, validateName, validateEmail });
