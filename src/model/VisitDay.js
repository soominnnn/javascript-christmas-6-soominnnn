import DAY_OF_WEEK from '../constant/DayOfWeek.js';
import CONSTANT from '../constant/constant.js';

class VisitDay {
  #visitDay;
  #visitDayOfWeek;

  constructor(userInput) {
    this.#visitDay = userInput;
    this.#validate(userInput);
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
}