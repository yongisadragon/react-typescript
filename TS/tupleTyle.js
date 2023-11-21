// arr타입 지정할때 tuple type이란? tuple type은 array에 붙일 수 있는 타입인데 자료의 위치까지 정확히 지정할 수 있는 타입입니다. '?'를 붙여서 optional하게 표현가능하다. [string, boolean?, number] 이딴식으로하면 안되고, ?는 맨뒤에 와야함.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 멍멍 = ["dog", true];
//rest파라미터 타입지정?! 이런식으로 tuple을 쓰면 1번째 넘버, 2번째 스트링이 확정되어야함.
function 햄수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
햄수(1, "야야");
//array합칠때. rest파라미터 타입지정
var arrr = [1, 2, 3];
var arrr2 = __spreadArray([4, 5], arrr, true);
console.log(arrr2);
// 숙제1
var delicious = ["맥도날드", 5700, true];
// 숙제2
// 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. tuple 타입과 spread 연산자를 써보도록 합시다.
var arrr3 = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
// 숙제3 (X)
function 숙제3() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
숙제3("숙제", true, 123, "문자", 4, 5);
// 숙제4
function 햄수2() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    //return 되는 값도 변수 설정.
    var result = [[], []];
    rest.forEach(function (e) {
        if (typeof e === "string") {
            result[0].push(e);
        }
        else if (typeof e === "number") {
            result[1].push(e);
        }
    });
    console.log(result);
    return result;
}
햄수2("b", 5, 6, 8, "a");
