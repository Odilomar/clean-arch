const { differenceInYears, parseISO } = require("date-fns");

module.exports = function validation(birth) {
  const today = new Date();
  const years = differenceInYears(parseISO(birth), today);

  return years < 0 || years > 150;
};
