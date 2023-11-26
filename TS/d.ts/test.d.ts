// 어쩌구.d.ts파일은 타입정의 보관용 파일이다. (*d: definition)
// 다른 파일에서 namespace 혹은 import * as ?? 식으로도 많이 사용함.
// 모든 타입을 정리해놓은 레퍼런스용 d.ts 팡리 쓰기 (ts.config에) 'declaration:true'를 하면 자동생성됨.
// 참고로 d.ts는 자동 글러볼 모듈 아니고, 기본적으로 로컬임. config에 "typeRoots":["폴더명"] 을 하면 여기 아래 파일들의 타입들은 글로벌 사용가능, 다른 라이브러리는 ts 공홈가서 타입 데피니션 해놓은 npm들이 있으니 찾아서 써보자. ~@types 폴더가 생김. config에선 typeRoots지워줘야함.

export type Age = number;
export interface Person {
  name: string;
}
