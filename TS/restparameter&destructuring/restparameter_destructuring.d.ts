declare let arr: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let 사람: {
    student: boolean;
    age: number;
};
declare let student: boolean;
declare let age: number;
declare let student: boolean, age: number;
declare let a: string, b: number;
declare let person: {
    student: boolean;
    age: number;
};
declare function 최댓값(...nums: number[]): number;
type ObjType = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare function userFunc({ user, comment, admin }: ObjType): void;
type ArrType = (number | string | boolean)[];
declare function userFunc2([num, str, bool]: ArrType): void;
