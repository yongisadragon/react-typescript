// string타입의 자료를 넣고, number타입의 자료를 배출할 수 있다.
// 왜냐하면 일반적인 형태인 () => { return 10 } 이런식으로 작성하면 'return 중괄호'는 생략할 수 있기 때문에, () => 10 과 같은 의미이다. 그러므로 화살표 우측에는 return으로 기대되는 타입인 number만 작성이 가능하다.
// 함수에 type alias를 부착하려면 함수선언문이 아니라, 함수표현식으로 써야한다.
// function 함수표현식(a: string): number {}; 이것과 같은 의미
var 함수표현식 = function (a) {
    return 10;
};
var 회원정보 = {
    name: "kim",
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log(2);
    },
};
회원정보.plusOne(2);
회원정보.changeName();
// 퀴즈: 위 obj안의 함수에 타입지정을 해보자.
// 정답: type 지정을 객채 내 함수들에 개별로 지정하는게 아니라, obj를 통으로 type alias로 만든다.
// ** 콜백함수 기본 설명 - 함수에다가 함수를 뿅 넣어서 실행시키는 일종의 디자인 패턴
function 함수1(a) {
    // 함수2() 이렇게 쓰는 것과 같음. 파라미터로 들어오는 a가 밑에서 함수1안의 인자이기 때문에. 여기선 함수2가 콜백함수겠군요.
    a();
}
function 함수2() { }
함수1(함수2);
var cutZero = function (x) {
    if (x[0] === "0") {
        return x.replace(x[0], "");
    }
};
// 퀴즈2
//이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
function removeDash(x) {
    var result = x
        .split("")
        .filter(function (el) { return (el !== "-" ? el : ""); })
        .join("");
    return parseFloat(result);
}
var overLapFunction = function (a, f1, f2) {
    var result1 = f1(a);
    var result2 = f2(result1);
    console.log(result2);
};
overLapFunction("010-1111-2222", cutZero, removeDash);
