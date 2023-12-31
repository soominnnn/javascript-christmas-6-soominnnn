import MENU from '../constant/Menu';
import ERROR from '../constant/Error';
import FindIndex from '../controller/FindIndex';

class Order {
  #orderMenu;

  constructor(userInput) {
    this.#orderMenu = this.#stringToObject(userInput);
    this.#validate(userInput);
    this.#validateOfMenuExists();
    this.#validateOfMenuCount();
    this.#validateOfNonMenuCount();
    this.#validateOfOnlyBevarage();
  }

  #stringToObject(userInput) {
    return userInput.split(',').map(item => item.split('-'));
  }

  getMenuObject() {
    return this.#orderMenu.flat();
  }

  getMenuNameValue() {
    const MENU_NAME_VALUE = this.getMenuObject().filter(
      (_, index) => index % 2 === 0,
    );
    return MENU_NAME_VALUE;
  }

  getMenuCountValue() {
    const MENU_COUNT_VALUE = this.getMenuObject().filter(
      (_, index) => index % 2 !== 0,
    );
    return MENU_COUNT_VALUE;
  }

  #validate(userInput) {
    const MenuName = this.getMenuNameValue();
    const MenuCount = this.getMenuCountValue();
    if (/[^0-9ㄱ-ㅎㅏ-ㅣ가-힣\s,/-]/.test(userInput)) {
      throw new Error(ERROR.nonOrderError);
    }
    if (/[a-zA-Z]/.test(userInput)) {
      throw new Error(ERROR.nonOrderError);
    }
    if (MenuName.length !== [...new Set(MenuName)].length) {
      throw new Error(ERROR.nonOrderError);
    }
    if (MenuCount.length !== MenuName.length) {
      throw new Error(ERROR.nonOrderError);
    }
  }

  #validateOfMenuExists() {
    this.getMenuNameValue().forEach(item => {
      const itemExists = Object.values(MENU)
        .flat()
        .some(menuItem => menuItem.name === item);
      if (!itemExists) {
        throw new Error(ERROR.nonOrderError);
      }
    });
  }

  #validateOfMenuCount() {
    let sum = 0;
    for (let i = 0; i < this.getMenuCountValue().length; i += 1) {
      sum += Number(this.getMenuCountValue()[i]);
    }
    if (sum >= 20) {
      throw new Error(ERROR.nonOrderError);
    }
  }

  #validateOfNonMenuCount() {
    for(const key in this.getMenuCountValue()) {
      if (this.getMenuCountValue()[key] === '0') {
        throw new Error(ERROR.nonOrderError);
      }
    }
  }

  #validateOfOnlyBevarage() {
    const orderedItems = this.getMenuNameValue().map(item => item.trim());
    const isBeverageOrder = orderedItems.every(item =>
      MENU.beverages.some(beverage => beverage.name === item),
    );
    if (isBeverageOrder) {
      throw new Error(ERROR.nonOrderError);
    }
  }

  #getCategory() {
    const categories = this.getMenuNameValue().map(menuName =>
      Object.keys(MENU).find(cat =>
        MENU[cat].some(menuItem => menuItem.name === menuName),
      ),
    );
    return categories;
  }

  calculateCount(menuCategory) {
    const MENU_CATEGORY = this.#getCategory();
    const MAIN_MENU_INDEX = FindIndex.findArrayIndex(
      MENU_CATEGORY,
      menuCategory,
    );
    let sum = 0;
    for (let i = 0; i < MAIN_MENU_INDEX.length; i += 2) {
      sum += Number(this.getMenuCountValue()[MAIN_MENU_INDEX[i]]);
    }
    return sum;
  }

  setMenuCount() {
    const APPETIZER_COUNT = this.calculateCount('appetizers');
    const MAIN_COUNT = this.calculateCount('mainCourses');
    const DESSERT_COUNT = this.calculateCount('desserts');
    const BEVERAGE_COUNT = this.calculateCount('beverages');
    return [APPETIZER_COUNT, MAIN_COUNT, DESSERT_COUNT, BEVERAGE_COUNT];
  }
}

export default Order;
