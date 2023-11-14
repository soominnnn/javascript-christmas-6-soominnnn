import MENU from '../constant/Menu.js';
import ERROR from '../constant/Error.js';
import FindIndex from '../controller/FindIndex.js';

class Order {
  #orderMenu;

  constructor(userInput) {
    this.#orderMenu = this.#stringToObject(userInput);
  }

  #stringToObject(userInput) {
    return userInput.split(',').map(item => item.split('-'));
  }
}