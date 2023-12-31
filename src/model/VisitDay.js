import DAY_OF_WEEK from '../constant/DayOfWeek';
import CONSTANT from '../constant/constant';
import ERROR from '../constant/Error';

class VisitDay {
  #visitDay;

  #visitDayOfWeek;

  constructor(userInput) {
    this.#visitDay = userInput;
    this.#validate(userInput);
    this.setDayOfWeek();
  }

  #validate(userInput) {
    if (!(userInput >= CONSTANT.minDay && userInput <= CONSTANT.maxDay)) {
      throw new Error(ERROR.nonDayError);
    }
    if (!Number(userInput)) {
      throw new Error(ERROR.nonDayError);
    }
  }

  setDayOfWeek() {
    const visitDay = new Date();
    visitDay.setMonth(11);
    visitDay.setDate(this.#visitDay);
    this.#visitDayOfWeek = DAY_OF_WEEK[visitDay.getDay()];
  }

  isWeekDay() {
    let weekDay = true;

    if (this.#visitDayOfWeek === '금') {
      weekDay = false;
      return weekDay;
    }
    if (this.#visitDayOfWeek === '토') {
      weekDay = false;
      return weekDay;
    }
    return weekDay;
  }

  isWeekend() {
    let weekend = true;
    if (this.#visitDayOfWeek === '금') {
      return weekend;
    }
    if (this.#visitDayOfWeek === '토') {
      return weekend;
    }
    weekend = false;
    return weekend;
  }

  isNonChristmas() {
    let Dday = true;

    if (this.#visitDay <= 25) {
      return Dday;
    }
    Dday = false;
    return Dday;
  }

  isSpecialDay() {
    let specialDay = true;

    if (this.#visitDayOfWeek === '일') {
      return specialDay;
    }
    if (this.#visitDay === '25') {
      return specialDay;
    }
    specialDay = false;
    return specialDay;
  }

  setDiscount() {
    const hasWeekDay = this.isWeekDay();
    const hasWeekend = this.isWeekend();
    const hasDdayDiscount = this.isNonChristmas();
    const hasSpecialDiscount = this.isSpecialDay();
    return [hasWeekDay, hasWeekend, hasDdayDiscount, hasSpecialDiscount];
  }
}

export default VisitDay;
