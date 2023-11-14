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
}