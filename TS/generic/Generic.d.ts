declare let aa: number;
declare let bb: number;
interface LengthCheck {
    length: number;
}
declare function 햄수3<MyType3 extends LengthCheck>(x: MyType3): number;
declare let cc: number;
declare let cc2: number;
/**
 * 정리
 * 1. 함수에 타입파라미터 넣을 수 있음.
 * 2. extends 키워드로 넣을 수 있는 타입 제한가능
 */
declare function 제너릭1<MyType4 extends string | string[]>(a: MyType4): number;
interface Animal2 {
    name: string;
    age: number;
}
declare let data: string;
declare function toObj<MyType5>(a: string): MyType5;
declare let result: Animal2;
declare class Person3<Type> {
    name: any;
    constructor(a: Type);
}
declare let ayo: Person3<string>;
