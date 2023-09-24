import { Age, 나이2 } from "./a";

console.log(나이2);

let 변수: Name = "park";
let 함수: Age = (a) => {
  return a + 10;
};

// 옛날 타입스크립트 import 대체문법
/// <reference path="./a.ts" />

//점찍어서 써야하기 때문에 다른 변수명을 오염시키지 않아서 변수명 중복선언문제를 방지할 수 있어서 유용합니다. 근데 자바스크립트 es6 버전이 나온 이후로 import as 키워드로 나름 namespace 와 유사하게 중복문제를 해결가능해서 namespace는 그렇게 많이 쓰이진 않습니다.

let 리름: 네임스페이스.NameType = "민슈";
let 나이: 네임스페이스.PersonInterface = { age: 10 };

//변수명 중복선언문제를 방지할 수 있어서 유용
type NameType = boolean; //사용 가능
interface PersonInterface {} //사용 가능
