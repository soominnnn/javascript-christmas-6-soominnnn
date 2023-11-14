import DAY_OF_WEEK from '../constant/DayOfWeek.js';
import CONSTANT from '../constant/constant.js';

class VisitDay {
  #visitDay;
  #visitDayOfWeek;

  constructor(userInput) {
    this.#visitDay = userInput;
    this.#validate(userInput);
    setDayOfWeek();
  }

  #validate(userInput) {
    if(!(userInput >= CONSTANT.minDay && userInput <= CONSTANT.maxDay)) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
    if(!Number(userInput)) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
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

    if(this.#visitDayOfWeek === '금') {
      weekDay = false;
      return weekDay;
    }
    if(this.#visitDayOfWeek  === '토'){
      weekDay = false;
      return weekDay;
    }
    return weekDay;
  }

  isWeekend() {
    let weekend = true;
    if(this.#visitDayOfWeek === '금') {
      return weekend;
    }
    if(this.#visitDayOfWeek === '토') {
      return weekend;
    }
    weekend = false;
    return weekend;
  }

  isNonChristmas() {
    let Dday = true;

    if(this.#visitDay <= 25) {
      return Dday;
    }
    Dday = false;
    return Dday;
  }

  isSpecialDay() {
    let specialDay = true;

    if(this.#visitDayOfWeek === '일') {
      return specialDay;
    }
    if(this.#visitDay === '25') {
      return specialDay;
    }
    specialDay = false;
    return specialDay;
  }
}