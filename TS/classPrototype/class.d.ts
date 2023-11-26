declare class Yong {
    name: string;
    constructor(a: string);
    함수(a: string): void;
}
declare let 사람1: Yong;
declare let 사람2: Yong;
declare class Car {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    num: any;
    str: any;
    constructor(...params: (string | number)[]);
}
declare let obj: Word;
