# 🎄크리스마스 프로모션🎄

## 🔺Model

### VisitDay.js
- **🚫예외처리🚫**
  - ✅날짜의 범위가 1에서 31 사이가 아닌 경우 에러
  - ✅입력된 값이 숫자가 아닌 경우 에러

- **✅setDayOfWeek**
  - 입력된 날짜의 요일을 this.#visitDayOfWeek 에 저장

- **✅isWeekDay**
  - 방문 요일이 평일인 경우, true 반환
  - 방문 요일이 주말인 경우, false 반환

- **✅isWeekend**
  - 방문 요일이 주말인 경우, true 반환
  - 방문 요일이 평일인 경우, false 반환

- **✅isNonChristmas**
  - 방문 일자가 26일 이전인 경우, true 반환
  - 방문 일자가 26일 이후인 경우, false 반환

- **✅isSpecialDay**
  - 방문 요일이 일요일인 경우, true 반환
  - 방문 일자가 크리스마스(12월 25일)인 경우, true 반환
  - 그 외 일자인 경우 false 반환

- **✅setDiscount**
  - 배열에 위 함수의 반환값을 저장한다.
  - [평일할인, 주말할인, 크리스마스 할인, 특별 할인] 순으로 저장된다.

### Order.js
- **🚫예외처리🚫**
  - ✅메뉴판에 없는 메뉴를 입력한 경우 에러
  - ❎메뉴 개수가 0개 이하인 경우 에러
  - ❎메뉴의 총 개수가 20개 이상인 경우 에러
  - ✅중복 메뉴를 입력한 경우 에러
  - ✅메뉴의 입력 형식이 다를 경우 에러
  - ✅','와 '-' 외에 다른 특수문자가 들어갈 경우 에러
  - ✅영어가 포함될 경우 에러

- **✅stringToObject**
  - 문자열로 받은 입력 값에서 ,와 - 로 나누어 배열을 생성한다.
  - EX) 해산물파스타-1,레드와인-1 => [[해산물파스타,1], [레드와인,1]]

- **✅getMenuObject**
  - 중첩된 배열을 삭제한다.
  - EX) [[해산물파스타,1], [레드와인,1]] => [해산물파스타, 1, 레드와인 ,1]

- **✅getCategory**
  - filter를 통해 입력한 메뉴의 이름으로만 구성된 배열을 생성한다.
  - 카테고리 내부에 일치하는 메뉴가 있는 경우 배열에 카테고리의 이름을 저장한다.
  - EX) ['beverages',mainCourses]

- **✅calculateCount**
  - filter를 통해 입력한 메뉴의 개수로만 구성된 배열을 생성한다.
  - findArrayIndex 메서드를 통해 같은 카테고리명이 있는 인덱스를 전부 반환한다.
  - 입력한 메뉴의 개수[index] 를 전부 더해서 특정 카테고리의 개수를 반환한다.

- **❎setMenuCount**
  - 배열에 위 함수의 반환값을 저장한다.
  - [에피타이저 메뉴 개수, 메인 메뉴 개수, 디저트 메뉴 개수, 음료 메뉴 개수] 순으로 저장된다.

## 🔺View

### InputView.js

### OuputView.js

## 🔺Controller

### MainContoller.js
- **❎getUserVisitDay**
  - 유저의 방문 날짜를 받아오고 예외가 발생할 경우 catch로 error를 출력한다.
  - 예외를 출력하고 재입력 받는다.

- **❎getUserOrderMenu**
  - 유저의 주문 메뉴를 받아오고 예외가 발생할 경우 catch로 error를 출력한다.
  - 예외를 출력하고 재입력 받는다.

- **❎printResult**
  - 이벤트 혜택을 전부 출력한다.

### PurchaseController.js
- **❎calculateTotalPrice**
  - 메뉴판 오브젝트를 배열로 합친다.
  - 메뉴의 가격을 찾아 메뉴의 총 가격을 계산하고 더해서 반환한다.

- **❎calculateDdayDiscount**
  - 크리스마스 디데이 할인이 true인 경우 디데이 할인 가격을 계산한다.

- **❎calculateWeekDayDiscount**
  - 평일 할인이 true인 경우 평일 할인 가격을 계산한다.

- **❎calculateWeekendDiscount**
  - 주말 할인이 true인 경우 주말 할인 가격을 계산한다.

- **❎calculateSpecialDiscount**
  - 특별 할인이 true인 경우 특별 할인 가격을 계산한다.

- **❎setDiscount**
  - 위 함수의 반환값을 배열에 저장한다.
  - [디데이 할인 가격, 평일 할인 가격, 주말 할인 가격, 특별 할인 가격] 순으로 저장된다.

- **❎calculateTotalDiscount**
  - 할인 가격 전체를 저장한다.

- **❎calculateFreeGift**
  - 카테고리 배열의 0,1,2 인덱스가 전부 0 이고 주문 금액 합계가 12만원 이상인 경우 1을 반환한다.

### FindIndex.js
- **✅findArrayIndex**
  - 배열에 특정 값이 있는 지 확인하고 특정 값의 인덱스를 전부 반환한다.