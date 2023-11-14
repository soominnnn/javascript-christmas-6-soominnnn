import { Console } from '@woowacourse/mission-utils';
import MESSAGE from "../constant/Message.js";

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.startMessage);
  },
  printEventDay(day) {
    Console.print(`12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`)
  },
  printMenuMessage() {
    Console.print("\n<주문 메뉴>");
  },
  printMenu(menu, count) {
    Console.print(`${menu} ${count}개`);
  },
  printAllPurchaseAmount(allPurchaseAmount) {
    Console.print("\n<할인 전 총주문 금액>");
    Console.print(`${allPurchaseAmount}`)
  },
  printOneFreeGift() {
    Console.print(`\n<증정 메뉴>\n샴페인 1개`);
  },
  PrintNonFreeGift() {
    Console.print(`\n<증정 메뉴>\n없음`);
  },
  PrintEventBadgeMessage() {
    Console.print("\n<12월 이벤트 배지>");
  },
  PrintSantaBadge() {
    Console.print("산타");
  },
  PrintTreeBadge() {
    Console.print("트리");
  },
  PrintStarBadge() {
    Console.print("별");
  },
  PrintNone() {
    Console.print("없음");
  }
}

export default OutputView;