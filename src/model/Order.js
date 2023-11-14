import MENU from '../constant/Menu.js';
import ERROR from '../constant/Error.js';
import FindIndex from '../controller/FindIndex.js';

class Order {
  #orderMenu;

  constructor(userInput) {
    this.#orderMenu = this.#stringToObject(userInput);
    this.#validate(userInput);
    this.#validateOfMenuExists();
  }

  #stringToObject(userInput) {
    return userInput.split(',').map(item => item.split('-'));
  }

  getMenuObject() {
    return this.#orderMenu.flat();
  }

  #validate(userInput) {
    if(!Array.isArray(this.#orderMenu)) {
      throw new Error(ERROR.nonOrderError);
    }
    if(/[^0-9ㄱ-ㅎㅏ-ㅣ가-힣\s,/-]/.test(userInput)) {
      throw new Error(ERROR.nonOrderError);
    }
    if(/[a-zA-Z]/.test(userInput)) {
      throw new Error(ERROR.nonOrderError);    
    }
    const MENU_NAME_ARRAY = this.getMenuObject().filter((_,index) => index % 2 === 0);
    if(MENU_NAME_ARRAY.length !== [...new Set(MENU_NAME_ARRAY)].length) {
      throw new Error(ERROR.nonOrderError);
    }
  }

  #validateOfMenuExists() {
    const MENU_NAME_VALUE = this.getMenuObject().filter((_,index) => index % 2 === 0 );
    const isMenuExists = MENU_NAME_VALUE
    .some(menuName => Object.values(MENU).flat()
    .some(menuItem => menuItem.name === menuName));
    if(!isMenuExists) {
      throw new Error(ERROR.nonOrderError);
    }
  }

  #getCategory() {
    const MENU_NAME_VALUE = this.getMenuObject().filter((_,index) => index % 2 === 0 );
    const categories = MENU_NAME_VALUE
    .map(menuName =>Object.keys(MENU)
    .find(cat =>MENU[cat]
    .some(menuItem => menuItem.name === menuName)));
    return categories;
  }

  calculateCount(menuCategory) {
    const MENU_CATEGORY = this.#getCategory();
    const MENU_COUNT = this.getMenuObject().filter((_,index) => index % 2 !== 0 );
    const MAIN_MENU_INDEX = FindIndex.findArrayIndex(MENU_CATEGORY,menuCategory);
    let sum = 0;
    for(let i = 0; i < MAIN_MENU_INDEX.length; i++) {
      sum += Number(MENU_COUNT[MAIN_MENU_INDEX[i]]);
    }
    return sum;
  }
}

export default Order;