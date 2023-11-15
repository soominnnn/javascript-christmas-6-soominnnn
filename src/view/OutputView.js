import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/Message';

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.startMessage);
    Console.print(MESSAGE.eventValidMessage);
  },
  printEventDay(day) {
    Console.print(`12월 ${day}${MESSAGE.eventDayMessage}`);
  },
  printMenuMessage() {
    Console.print(MESSAGE.OrderMenuMessage);
  },
  printMenu(menu, count) {
    Console.print(`${menu} ${count}개`);
  },
  printAllPurchaseAmount(allPurchaseAmount) {
    Console.print(MESSAGE.NonDiscountAmount);
    Console.print(`${allPurchaseAmount}원`);
  },
  printOneFreeGift() {
    Console.print(MESSAGE.eventMenuMessage);
  },
  PrintNonFreeGift() {
    Console.print(`\n<증정 메뉴>\n없음`);
  },
  printDiscountListMessage() {
    Console.print('\n<혜택 내역>');
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
    Console.print('증정 이벤트: -25,000원');
  },
  PrintAllDiscountMessage() {
    Console.print('\n<총혜택 금액>');
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
  PrintDiscountPurchaseMessage() {
    Console.print('\n<할인 후 예상 결제 금액>');
  },
  PrintDiscountPurchase(discountMoney) {
    Console.print(`${discountMoney}원`);
  },
  PrintEventBadgeMessage() {
    Console.print('\n<12월 이벤트 배지>');
  },
  PrintSantaBadge() {
    Console.print('산타');
  },
  PrintTreeBadge() {
    Console.print('트리');
  },
  PrintStarBadge() {
    Console.print('별');
  },
  PrintNone() {
    Console.print('없음');
  },
  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;
