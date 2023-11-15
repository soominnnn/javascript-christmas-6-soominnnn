import Order from '../src/model/Order.js';
import ERROR from '../src/constant/Error.js';

describe('메뉴 주문 클래스 테스트', () => {
  test.each([
    ['해산물파스타-1, 초코아이스크림-2'],
    ['레드와인-1,스파게티-1'],
  ])('메뉴판에 없는 메뉴를 입력한 경우 예외를 발생', input => {
    const RESULT = () => new Order(input);
    expect(RESULT).toThrow(ERROR.nonOrderError);
  });
  test.each([
    ['해산물파스타-0,레드와인-1'],
    ['해산물파스타-1,레드와인-0'],
  ])('메뉴 개수가 0개 이하인 경우 예외를 발생', input => {
    const RESULT = () => new Order(input);
    expect(RESULT).toThrow(ERROR.nonOrderError);
  });
  test.each([
    ['해산물파스타-1,해산물파스타-1'],
    ['레드와인-1,해산물파스타-1,레드와인-1']
  ])('중복 메뉴를 입력한 경우 예외를 발생', input => {
    const RESULT = () => new Order(input);
    expect(RESULT).toThrow(ERROR.nonOrderError);
  });
  test.each([
    ['해산물파스타-1.레드와인-1'],
    ['해산물파스타 1개,레드와인 1개'],
    ['해산물파스타-1,레드와인01']
  ])('메뉴의 입력 형식이 다를 경우 예외를 발생', input => {
    const RESULT = () => new Order(input);
    expect(RESULT).toThrow(ERROR.nonOrderError);
  });
  test.each([
    ['해산물파스타-!'],
    ['레드와인-1,해산물파스타-@'],
  ])(',와 - 외에 다른 특수문자가 들어갈 경우 예외를 발생', input => {
    const RESULT = () => new Order(input);
    expect(RESULT).toThrow(ERROR.nonOrderError);
  });

  test.each([
    ['RED'],
    ['gotksanfvktmxk-1'],
  ])('영어가 포함될 경우 예외를 발생', input => {
    const RESULT = () => new Order(input);
    expect(RESULT).toThrow(ERROR.nonOrderError);
  });
})