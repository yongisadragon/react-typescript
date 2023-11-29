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
  "font-size": MyType | number; //이렇게 recursive하게 작성해줘도 된다.(재귀적인 구조를 갖는 객체) 얼마나 많이 중첩돼있든, "font-size": MyType 와 같이 중첩되게 써놓으면 똑같은 모양의 중첩꼴들을 대체한다고 보면된다.
}

//숙제1. 다음 자료의 타입을 지정해보십시오.

interface Objj {
  [k: string]: string | number;
}

let objj: Objj = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

//숙제2. 다음 object 자료의 타입을 interface 써서 만들어보십시오.

interface MyType2 {
  "font-size": number;
  [key: string]: number | MyType2;
}

let objjj: MyType2 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
// /MyType을 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있습니다. 이제 여러분들이 object 안에 object를 집어넣어도 MyType 타입과 비슷하게 생기면 통과시켜줍니다.
