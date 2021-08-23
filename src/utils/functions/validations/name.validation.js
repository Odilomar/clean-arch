class Name {
  static validate(name) {
    return !name || name.trim().length < 2 || name.trim().length > 255;
  }
}

module.exports = Name;
