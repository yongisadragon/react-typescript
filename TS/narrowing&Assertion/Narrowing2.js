// 1. typeof 연산자로는 내로잉에 한계가 있다.
// undefined타입을 처리할 경우
// 아래의 if문 안에서는 &&연산자를 이용하여 undefiend라면 undefiend가 남아 if문이 실행이 안되고, 아니라면 string이 남게 되어 true가 성립되므로 실행된다.
function 함수(a) {
    if (a && typeof a === "string") {
    }
}
function 함수2(animal) {
    // "swim" in animal은 Fish타입인지 아닌지를 검사하는 내로잉 문법
    if ("swim" in animal) {
        animal.swim;
    }
}
// 3. isntanceof 연산자로 ojb narrowing 가능
// obj 두개가 비슷하면 부모class 누군지 물어봐서 narrowing 가능
// 여기에선 Date가 class
var 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log("참이에요");
}
function 함수3(x) {
    //그럼 어떻게 x가 Car타입인가? 를 물어보나
    //이경우 x변수는 Car타입임
    if (x.wheel === "4개") {
        console.log("이 차는 " + x.color);
    }
    else {
        console.log("이 바이크는 " + x.color);
    }
}
// 해당하는 type으로 '특정' 지을 수 있다고하면 narrowing으로 인정해주기 때문에
