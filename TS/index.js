//가장 일반적으로 변수에 타입을 지정한 형태이다.
var 이름 = "Kim";
//객체 형태. name 뒤의 ?는 속성은 옵션이라는 의미이다.
var 이름이 = { name: "Kim" };
// array를 구성하는 타입을 지정한다. 이름들이라는 변수에는 '문자열로 된' 배열만 올 수 있다는 의미이다.
var 이름들 = ["Kim", "lee"];
//Union type은 다양한 타입이 들어올 수 있다.
var union = 123;
var 타입 = 123;
//함수에도 타입 지정이 가능하다. 파라미터도 일종의 변수이기 때문에 파라미터에도 타입을 지정해 줄 수 있다. 그 옆에는 return 될 타입의 종류 역시 지정이 가능하다. 즉, 이식은 파라미터로 number, return 값 역시 number가 되어야 한다.
function 함수(x) {
  return x * 2;
}
var john = [123, true];
var paul = { name: "kim" };
//class에도 똑같이 타입을 지정 할 수 있음.
var User = /** @class */ (function () {
  function User(name) {
    this.name = name;
  }
  return User;
})();
