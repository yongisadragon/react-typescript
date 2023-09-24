"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a_1 = require("./a");
console.log(a_1.나이2);
var 변수 = "park";
var 함수 = function (a) {
    return a + 10;
};
// 옛날 타입스크립트 import 대체문법
/// <reference path="./a.ts" />
//점찍어서 써야하기 때문에 다른 변수명을 오염시키지 않아서 변수명 중복선언문제를 방지할 수 있어서 유용합니다. 근데 자바스크립트 es6 버전이 나온 이후로 import as 키워드로 나름 namespace 와 유사하게 중복문제를 해결가능해서 namespace는 그렇게 많이 쓰이진 않습니다.
var 리름 = "민슈";
var 나이 = { age: 10 };
