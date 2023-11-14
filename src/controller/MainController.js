import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import VisitDay from "../model/VisitDay.js";
import Order from "../model/Order.js"; 
import PurchaseController from "./PurchaseController.js";

class MainController {
  constructor() {
    this.MENU = this.order.getMenuObject();
    this.CATEGORY_COUNT_ARRAY = this.order.setMenuCount();
    this.purchaseController = new PurchaseController(this.DISCOUNT_ARRAY,this.userVisitDay,this.CATEGORY_COUNT_ARRAY);
    this.TOTAL_PRICE = this.purchaseController.calculateTotalPrice(this.MENU);
  }

  static async getUserVisitDay() {
    OutputView.printStartMessage();
    this.userVisitDay = await InputView.readDate();
    while(true) {
      try {
        const visitDay = new VisitDay(this.userVisitDay);
        this.DISCOUNT_ARRAY = (visitDay.setDiscount());
        break;
      }
      catch(error) {
        Console.print(error.message);
        this.userVisitDay = await InputView.readDate();
      }
    }
  }

  static async getUserOrderMenu() {
    let userOrderMenu = await InputView.readMenu();
    while(true) {
      try {
        this.order = new Order(userOrderMenu);
        break;
      }
      catch(error) {
        Console.print(error.message);
        userOrderMenu = await InputView.readMenu();
      }
    }
  }
  
  static printMenu() {
    OutputView.printMenuMessage();
    for(let i = 0; i < this.MENU.length; i+=2) {
      OutputView.printMenu(this.MENU[i],this.MENU[i+1]);
    }
  }

  static printFreeGift() {
    if(this.purchaseController.calculateFreeGift(this.MENU) === 1) {
      return OutputView.printOneFreeGift();
    }
    return OutputView.PrintNonFreeGift();
  }

  static printAllDsicount() {
    const discountArray = this.purchaseController.setDiscount();
    Console.print("\n<혜택 내역>");
    if(this.DISCOUNT_ARRAY[2] == true) {
      Console.print(`크리스마스 디데이 할인: -${discountArray[0]}`);
    } 
    if(this.DISCOUNT_ARRAY[0] == true && this.CATEGORY_COUNT_ARRAY[1] !== 0 && discountArray[1] !== 0 ) {
      Console.print(`평일 할인: -${discountArray[1]}`);
    }
    if(this.DISCOUNT_ARRAY[1] == true && this.CATEGORY_COUNT_ARRAY[2] !== 0 && discountArray[2] !== 0) {
      Console.print(`주말 할인: -${discountArray[2]}`);
    }
    if(this.DISCOUNT_ARRAY[3] == true) {
      Console.print(`특별 할인: -${discountArray[3]}`)
    }
    if(this.purchaseController.calculateFreeGift(this.MENU) === 1) {
      Console.print("증정 이벤트: -25,000원");
    }
    if(!(this.DISCOUNT_ARRAY[0] == true && this.CATEGORY_COUNT_ARRAY[1] !== 0) && !(this.DISCOUNT_ARRAY[1] == true && this.CATEGORY_COUNT_ARRAY[2] !== 0) && this.DISCOUNT_ARRAY[2] == false && this.DISCOUNT_ARRAY[3] == false){
      Console.print("없음");
    }
  }

  static printallDisCount() {
    const discount = this.purchaseController.calculateTotalDiscount();
    Console.print("\n<총혜택 금액>");
    if(discount === 0 && this.purchaseController.calculateFreeGift() === 1){
      return Console.print(`${Number(discount) + 25000}원`);
    }
    if(discount === 0) {
      return Console.print(`${discount}원`);
    }
    return Console.print(`-${discount}원`);
  }

  static printPurchaseAmount() {
    const purchase = this.TOTAL_PRICE - this.purchaseController.calculateTotalDiscount();
    const formattedNumber = new Intl.NumberFormat().format(purchase);
    Console.print("\n<할인 후 예상 결제 금액>");
    Console.print(`${formattedNumber}원`);
  }

  static printBadge() {
    OutputView.PrintEventBadgeMessage();
    if(this.purchaseController.calculateTotalDiscount() >= 20000) {
      return OutputView.PrintSantaBadge();
    }
    if(this.purchaseController.calculateTotalDiscount() >= 10000) {
      return OutputView.PrintTreeBadge();
    }
    if(this.purchaseController.calculateTotalDiscount() >= 5000) {
      return OutputView.PrintStarBadge();
    }
    return OutputView.PrintNone();
  }
}

export default MainController;