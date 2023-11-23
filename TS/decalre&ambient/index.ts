//외부 .js를 쓰고 싶을때가 있잖아요? 동작은 잘됨. 그럴떄에는 변수 재정의가 가능한 declare 문법이 있습니다.

declare let aaa: number; // 어딘가에 분명 변수 a있으니까 에러내지 말아주세요. declare 키워드는 타입스크립트 컴파일러에게 제공되는 일종의 힌트이기 때문에 js로 변환될때에는 없어짐.

console.log(aaa + 1);

//타입스크립트는 모든 trs파일은 abient module(글로벌 모듈)이 되기때문에, 타입스크립트 파일간에는 import/export를 안해줘도 된다.
// console.log(aaaa + 1); // 에러뜨지 않음. (data.ts에서 export안했을때에도)

//그런데 이 전역변수의 특징 떄문에, import/export를 임의로 해주면 자동으로 로컬 모듈이 됨.
import { aaaa } from "./data";
console.log(aaaa + 1);

let bb: Dogg = "Dogg"; //data.ts 에서 declare global{}로 자동으로 불러와진 타입.
