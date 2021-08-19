import { differenceInYears } from "date-fns";

export class Birth {
  static validation(birth) {
    const today = new Date();
    const years = differenceInYears(birth, today);

    return years < 0 || years > 150;
  }
}
