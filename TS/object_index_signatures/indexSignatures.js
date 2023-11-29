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
