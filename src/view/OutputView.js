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
    Console.print(`${allPurchaseAmount}원`)
  },
  printOneFreeGift() {
    Console.print(`\n<증정 메뉴>\n샴페인 1개`);
  },
  PrintNonFreeGift() {
    Console.print(`\n<증정 메뉴>\n없음`);
  },
  printDiscountListMessage() {
    Console.print("\n<혜택 내역>");
  },
  PrintDdayDiscount(discountAmount) {
    Console.print(`크리스마스 디데이 할인: -${discountAmount}`);
  },
  PrintWeekDayDiscount(discountAmount) {
    Console.print(`평일 할인: -${discountAmount}원`);
  },
  PrintWeekendDiscount(discountAmount) {
    Console.print(`주말 할인: -${discountAmount}원`);
  },
  PrintSpecialDiscount(discountAmount) {
    Console.print(`특별 할인: -${discountAmount}원`);
  },
  PrintFreeGiftDiscount() {
    Console.print("증정 이벤트: -25,000원");
  },
  PrintAllDiscountMessage() {
    Console.print("\n<총혜택 금액>");
  },
  PrintAllDiscountAndFreeGift(discount) {
    Console.print(`-${discount}원`);
  },
  PrintAllDiscount(discount) {
    Console.print(`-${discount}원`);
  },
  PrintZeroDiscount(discount) {
    Console.print(`${discount}원`);
  },
  PrintDiscountPurchaseMessage(){
    Console.print("\n<할인 후 예상 결제 금액>");
  },
  PrintDiscountPurchase(discountMoney) {
    Console.print(`${discountMoney}원`);
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
  },
  printError(error) {
    Console.print(error.message);
  }
}

export default OutputView;