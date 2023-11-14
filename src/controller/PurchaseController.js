import MENU from "../constant/Menu.js";

class PurchaseController {
  #discountArray;
  #visitDay;
  #categoryCountArray;

  constructor(discountArray, visitDay, categoryCountArray) {
    this.#discountArray = discountArray;
    this.#visitDay = visitDay;
    this.#categoryCountArray = categoryCountArray;
  }

  calculateTotalPrice(items) {
    const ALL_MENU_ARRAY = MENU.appetizers.concat(MENU.mainCourses, MENU.desserts, MENU.beverages)
    return items.reduce((total, item, index, array) => {
      if(index%2 === 0){
        const FOOD = ALL_MENU_ARRAY.find(menuItem => menuItem.name === item);
        const quantity = array[index+1];
        total += FOOD ? FOOD.price * quantity : 0;
      } 
      return total;
    }, 0);
  }

  calculateDdayDiscount() {
    if( this.#discountArray[2] === true) {
      return 1000 + 100 * (this.#visitDay-1);
    }
    return 0;
  }

  calculateWeekDayDiscount() {
    if(this.#discountArray[0] === true) {
      return this.#categoryCountArray[2] * 2023;
    }
    return 0;
  }

  calculateWeekendDiscount() {
    if(this.#discountArray[1] === true) {
      return this.#categoryCountArray[1] * 2023;
    }
    return 0;
  }
  
  calculateSpecialDiscount() {
    if(this.#discountArray[3] === true) {
      return 1000;
    }
    return 0;
  }

  setDiscount() {
    const D_DAY_DISCOUNT = this.calculateDdayDiscount();
    const WEEK_DAY_DISCOUNT = this.calculateWeekDayDiscount();
    const WEEKEND_DISCOUNT = this.calculateWeekendDiscount();
    const SPECIAL_DISCOUNT = this.calculateSpecialDiscount();
    return [D_DAY_DISCOUNT,WEEK_DAY_DISCOUNT,WEEKEND_DISCOUNT,SPECIAL_DISCOUNT];
  }

  calculateTotalDiscount() {
    const ALL_DISCOUNT_ARRAY = this.setDiscount();
    let total = 0;
    for(let index in ALL_DISCOUNT_ARRAY) {
      total += ALL_DISCOUNT_ARRAY[index];
    }
    return total;
  }

  calculateFreeGift(items) {
    const TOTAL_PRICE = this.calculateTotalPrice(items);
    const ONLY_BAVERAGE = this.#categoryCountArray
    .slice(0, 3)
    .every(element => element === 0);
    if(TOTAL_PRICE >= 120000 && ONLY_BAVERAGE === false) {
      return 1;
    }
  }
}

export default PurchaseController;