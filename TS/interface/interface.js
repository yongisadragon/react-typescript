var 네모 = { color: "red", width: 100 };
var 학생 = { name: "kim" };
var 선생 = { name: "lee", age: 29 };
// interface가 &를 사용한 경우
var 변수 = { name: "park", age: 40 };
//연습1.
//interface 이용해서 간단하게 타입을
var 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
// 연습2.
// 배열속 obj를 interface로 만들어보자.
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var funcs = {
    plus: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        return x - y;
    },
};
