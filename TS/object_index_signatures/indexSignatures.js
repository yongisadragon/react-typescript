// interface StringOnly {
//   name: string;
//   age: string;
//   location: string;
// } //해당하는것 같이 전부 string일 경우 일일이 작성하기 귀찮다? -> object index signatures
// let userr: StringOnly = {
//   name: "yong",
//   age: "20",
//   location: "seoul",
// };
var userr = {
    0: "yong",
    1: "20",
    2: "seoul",
}; //이렇게 하면 사실 인터페이스값은 [key: nubmer] : string 이어야 하지만 키값이 숫자인 경우에도 문자열화 시켜주므로 별다른 에러는 없다.
console.log(userr[0]); // 'yong'
var css = {
    "font-size": {
        "font-size": {
            "font-size": 14,
        },
    },
}; //이런식으로 중첩된 것이라면,
var objj = {
    model: "k5",
    brand: "kia",
    price: 6000,
    year: 2030,
    date: "6월",
    percent: "5%",
    dealer: "김차장",
};
var objjj = {
    "font-size": 10,
    secondary: {
        "font-size": 12,
        third: {
            "font-size": 14,
        },
    },
};
// /MyType을 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있습니다. 이제 여러분들이 object 안에 object를 집어넣어도 MyType 타입과 비슷하게 생기면 통과시켜줍니다.
