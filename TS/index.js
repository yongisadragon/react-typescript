//가장 일반적으로 변수에 타입을 지정한 형태이다. '변수명 : 타입명'의 형태이며, 타입명에는 string, number, boolean, null, undefined .. 등이 올 수 있다. (변수에 쉴드 씌우는 거임. 일종의 베리어)
var 이름 = "Kim";
//객체 형태. name 뒤의 ?는 name의 속성이 string일수도, 아닐 수도 있다는 옵션의 의미이다.
var 이름이 = { name: "Kim" };
// array를 구성하는 타입을 지정한다. []의 앞에는 배열안에 들어올 타입들을 지정해줘야하는데, 아래와 같은 경우는 배열안에 string 요소들만 올 수 있다는 의미이다.
var 이름들 = ["Kim", "lee"];
//Union type은 다양한 타입들을 혼합해서 사용 가능하다.
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
}());
//근데, 타입 지정은 원래 자동으로 돼서 타입지정 문법 생략가능
var 못믿겠으면 = [1, 2, 3];
var 변수에마우스올려봐 = "king";
//문제
var 이상용이름 = "leesangyong";
var 이상용나이 = 29;
var 이상용지역 = "경기도";
var 이상용취향 = {
    가수: "버즈",
    제목: "겁쟁이",
};
