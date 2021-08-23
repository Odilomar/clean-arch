const { differenceInYears } = require("date-fns");
class Birth {
  static validation(birth) {
    const today = new Date();
    const years = differenceInYears(birth, today);

    return years < 0 || years > 150;
  }
}

module.exports = Birth;
