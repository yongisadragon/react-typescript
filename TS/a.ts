// 변수명, 함수명, 클래스명 전부 export/import 가능

// export type Name = string;
export var 나이2 = 20;
export type Age = (a: number) => number;

// 타입 변수를 숨기고 싶다. 파일간에 중복을 방지하고 싶다. -> 옛날엔 오브젝트 자료형으로 해가지고 숨기고 그랬답니다.

namespace 네임스페이스 {
  export interface PersonInterface {
    age: number;
  }
  export type NameType = number | string;
}
