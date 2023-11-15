import ERROR from "../src/constant/Error";
import VisitDay from "../src/model/VisitDay";

describe('방문 날짜 클래스 테스트', () => {
  test.each([
    ['90'],
    ['32'],
  ])('날짜의 범위가 1에서 31 사이가 아닌 경우 예외를 발생', input => {
    const RESULT = () => new VisitDay(input);
    expect(RESULT).toThrow(ERROR.nonDayError);
  });
  test.each([
    ['1일'],
    ['1day'],
    ['none']
  ])('입력된 값이 숫자가 아닌 경우 예외를 발생', input => {
    const RESULT = () => new VisitDay(input);
    expect(RESULT).toThrow(ERROR.nonDayError);
  });
})