export { aaaa }; //로컬모듈로 임의지정

let aaaa = 10;

declare global {
  //로컬 모듈에서 글로벌 모듈로 재정의 할때 declare global{}
  type Dogg = string;
}
