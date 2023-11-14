import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import VisitDay from "../model/VisitDay.js";
import Order from "../model/Order.js"; 
import PurchaseController from "./PurchaseController.js";

class MainController {
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
}

export default MainController;