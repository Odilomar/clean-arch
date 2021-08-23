const buildMakeUser = require("./user.entity");
const { Birth, Name, Email } = require("../utils");

module.exports = buildMakeUser({ Birth, Name, Email });
