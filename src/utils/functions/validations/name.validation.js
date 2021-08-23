module.exports = function validate(name) {
  return !name || name.trim().length < 2 || name.trim().length > 255;
};
