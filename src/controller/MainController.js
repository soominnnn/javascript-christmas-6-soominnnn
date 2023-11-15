import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import VisitDay from '../model/VisitDay';
import Order from '../model/Order';
import PurchaseController from './PurchaseController';

class MainController {
  static async getUserVisitDay() {
    OutputView.printStartMessage();
    this.userVisitDay = await InputView.readDate();
    while (true) {
      try {
        const visitDay = new VisitDay(this.userVisitDay);
        this.DISCOUNT_EXIST_ARRAY = visitDay.setDiscount();
        break;
      } catch (error) {
        OutputView.printError(error);
        this.userVisitDay = await InputView.readDate();
      }
    }
  }

  static async getUserOrderMenu() {
    let userOrderMenu = await InputView.readMenu();
    while (true) {
      try {
        this.order = new Order(userOrderMenu);
        this.setOrderData();
        break;
      } catch (error) {
        OutputView.printError(error);
        userOrderMenu = await InputView.readMenu();
      }
    }
  }

  static setOrderData() {
    this.MENU = this.order.getMenuObject();
    this.CATEGORY_COUNT_ARRAY = this.order.setMenuCount();
    this.purchaseController = new PurchaseController(
      this.DISCOUNT_EXIST_ARRAY,
      this.userVisitDay,
      this.CATEGORY_COUNT_ARRAY,
    );
    this.TOTAL_PRICE = this.purchaseController.calculateTotalPrice(this.MENU);
    this.DISCOUNT_AMOUNT_ARRAY = this.purchaseController.setDiscount();
  }

  static printMenu() {
    OutputView.printMenuMessage();
    for (let i = 0; i < this.MENU.length; i += 2) {
      OutputView.printMenu(this.MENU[i], this.MENU[i + 1]);
    }
  }

  static printFreeGift() {
    if (this.purchaseController.calculateFreeGift(this.MENU) === 1) {
      return OutputView.printOneFreeGift();
    }
    return OutputView.PrintNonFreeGift();
  }

  static printAllDiscount() {
    OutputView.printDiscountListMessage();
    if (this.DISCOUNT_AMOUNT_ARRAY.every(el => el === 0)) {
      return OutputView.PrintNone();
    }
    if (this.DISCOUNT_EXIST_ARRAY[2] === true) {
      OutputView.PrintDdayDiscount(
        this.numberFormat(this.DISCOUNT_AMOUNT_ARRAY[0]),
      );
    }
    if (
      this.DISCOUNT_EXIST_ARRAY[0] === true && this.CATEGORY_COUNT_ARRAY[1] !== 0 && this.DISCOUNT_AMOUNT_ARRAY[1] !== 0
    ) {
      OutputView.PrintWeekDayDiscount(
        this.numberFormat(this.DISCOUNT_AMOUNT_ARRAY[1]),
      );
    }
    if (this.DISCOUNT_EXIST_ARRAY[1] === true && this.CATEGORY_COUNT_ARRAY[2] !== 0 && this.DISCOUNT_AMOUNT_ARRAY[2] !== 0) {
      OutputView.PrintWeekendDiscount(
        this.numberFormat(this.DISCOUNT_AMOUNT_ARRAY[2]),
      );
    }
    if (this.DISCOUNT_EXIST_ARRAY[3] === true) {
      OutputView.PrintSpecialDiscount(
        this.numberFormat(this.DISCOUNT_AMOUNT_ARRAY[3]),
      );
    }
    if (this.purchaseController.calculateFreeGift(this.MENU) === 1) {
      OutputView.PrintFreeGiftDiscount();
    }
  }

  static printallDisCount() {
    const DISCOUNT = this.purchaseController.calculateTotalDiscount();
    const FREE_GIFT = this.purchaseController.calculateFreeGift(this.MENU);
    this.DISCOUNT_WITH_SHAMPAIGN = DISCOUNT + 25000;
    OutputView.PrintAllDiscountMessage();
    if (DISCOUNT !== 0 && FREE_GIFT === 1) {
      return OutputView.PrintAllDiscountAndFreeGift(
        this.numberFormat(this.DISCOUNT_WITH_SHAMPAIGN),
      );
    }
    if (DISCOUNT !== 0) {
      return OutputView.PrintAllDiscount(this.numberFormat(DISCOUNT));
    }
    return OutputView.PrintZeroDiscount(this.numberFormat(DISCOUNT));
  }

  static numberFormat(number) {
    const FORMATTED_NUMBER = new Intl.NumberFormat().format(number);
    return FORMATTED_NUMBER;
  }

  static printPurchaseAmount() {
    const TOTAL_DISCOUNT = this.purchaseController.calculateTotalDiscount();
    const PURCHASE = this.TOTAL_PRICE - TOTAL_DISCOUNT;
    OutputView.PrintDiscountPurchaseMessage();
    return OutputView.PrintDiscountPurchase(this.numberFormat(PURCHASE));
  }

  static printBadge() {
    OutputView.PrintEventBadgeMessage();
    if (this.discountWithShampaign >= 20000) {
      return OutputView.PrintSantaBadge();
    }
    if (this.discountWithShampaign >= 10000) {
      return OutputView.PrintTreeBadge();
    }
    if (this.discountWithShampaign >= 5000) {
      return OutputView.PrintStarBadge();
    }
    return OutputView.PrintNone();
  }

  static printResult() {
    OutputView.printEventDay(this.userVisitDay);
    this.printMenu();
    OutputView.printAllPurchaseAmount(this.numberFormat(this.TOTAL_PRICE));
    this.printFreeGift();
    this.printAllDiscount();
    this.printallDisCount();
    this.printPurchaseAmount();
    this.printBadge();
  }
}

export default MainController;
