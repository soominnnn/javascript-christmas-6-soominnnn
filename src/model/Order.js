import MENU from '../constant/Menu.js';
import ERROR from '../constant/Error.js';
import FindIndex from '../controller/FindIndex.js';

class Order {
  #orderMenu;

  constructor(userInput) {
    this.#orderMenu = this.#stringToObject(userInput);
    this.#validate(userInput);
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
}

export default Order;