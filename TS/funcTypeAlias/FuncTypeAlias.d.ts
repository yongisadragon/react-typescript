type 함수타입 = (a: string) => number;
declare let 함수표현식: 함수타입;
type 멤버 = {
    name: string;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let 회원정보: 멤버;
declare function 함수1(a: any): void;
type CutZero = (x: string) => string;
declare let cutZero: CutZero;
declare function removeDash(x: string): number;
/**
 * 1. 만들함수에 입력한 a라는 파라미터를 func1() 함수에 집어넣습니다.
 * 2. 집어넣은 결과를 result에 저장합니다.
 * 3. 그걸 다시 func2() 함수에 집어넣습니다.
 * 4. 최종결과를 콘솔창에 출력했습니다.
 * 5. type alias는 헷갈리지 않게 마지막에 지정해줬음.
 */
type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;
declare let overLapFunction: (a: string, f1: 함수타입1, f2: 함수타입2) => void;
