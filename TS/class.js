// 클래스는 대문자 스타트가 관례
var Yong = /** @class */ (function () {
    function Yong(a) {
        this.name = a;
    }
    Yong.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Yong;
}());
var 사람1 = new Yong("kim");
var 사람2 = new Yong("park");
console.log(사람2);
// 연습문제
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
// 문제2
// 파라미터가 아래와 들어가면 결과가 아래처럼 나오도록 class를 설계하시오.
// let obj = new Word("kim", 3, 5, "park");
// console.log(obj.num); //[3,5]
// console.log(obj.str); //['kim', 'park']
var Word = /** @class */ (function () {
    function Word() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        params.forEach(function (el) {
            if (typeof el === "string") {
                문자들.push(el);
            }
            else {
                숫자들.push(el);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
// 스프레드 연산자와 rest 파라미터의 비교&차이점 함수의 파라미터로 쓰이면 rest 파라미터, 그외 객체나 배열 등에 사용되면 스프레드 연산자이다. 두가지 모두 사용 방법은 동일하다.
// 단, rest 파라미터의 경우 함수 매개변수의 가장 마지막에 작성되어야 한다. 스프레드 연산자는 위치 상관없이 사용할 수 있으며 여러번 사용도 가능하며 이터러블한 데이터에만 사용할 수 있다.
