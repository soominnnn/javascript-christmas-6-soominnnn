import PurchaseController from "../src/controller/PurchaseController";


describe('PurchaseController 테스트', () => {
  test.each([
    [['해산물파스타','1','레드와인','1'],95000],
    [['레드와인','10'], 600000]
  ])('전체 금액 테스트', (input,expected) => {
    const purchaseController = new PurchaseController([true,true,true,true],'23',[3,4]);
    const RESULT = purchaseController.calculateTotalPrice(input);
    expect(RESULT).toEqual(expected);
  });
})