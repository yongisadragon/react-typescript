// interface StringOnly {
//   name: string;
//   age: string;
//   location: string;
// } //해당하는것 같이 전부 string일 경우 일일이 작성하기 귀찮다? -> object index signatures

interface StringOnly {
  //   age: number; //이딴건 금지됩니다. 아래에 string|number로 쓰면되죠.
  //age: "20"; //이런식으로 리터럴, 문자열은 중복되므로 가능하다.
  [key: string]: string; //모든 문자로 된 속성(key값): string 이라는 의미 ket는 알아서 작명
}

// let userr: StringOnly = {
//   name: "yong",
//   age: "20",
//   location: "seoul",
// };

let userr: StringOnly = {
  0: "yong",
  1: "20",
  2: "seoul",
}; //이렇게 하면 사실 인터페이스값은 [key: nubmer] : string 이어야 하지만 키값이 숫자인 경우에도 문자열화 시켜주므로 별다른 에러는 없다.

console.log(userr[0]); // 'yong'

let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
}; //이런식으로 중첩된 것이라면,

// interface MyType { // 이렇게 똑같이 중첩되게 작성해도 되지만.
//   "font-size": {
//     "font-size": {
//       "font-size": number;
//     };
//   };
// }

interface MyType {
  "font-size": MyType | number; //이렇게 recursive하게 작성해줘도 된다. 얼마나 많이 중첩돼있든, "font-size": MyType 와 같이 중첩되게 써놓으면 똑같은 모양의 중첩꼴들을 대체한다고 보면된다.
}
