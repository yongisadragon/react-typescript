interface Square {
    color: string;
    width: number;
}
declare let 네모: Square;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
declare let 변수: Student & Teacher;
type Dog = {
    name: string;
};
type Cat = {
    age: number;
} & Animal;
interface Me {
    name: string;
}
interface Me {
    age: 29;
}
declare let 상품: {
    brand: string;
    serialNumber: number;
    model: string[];
};
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 장바구니: Cart[];
interface Cart {
    product: string;
    price: number;
}
interface UpdateCart extends Cart {
    card: boolean;
}
interface Funcs {
    plus: (x: number, y: number) => number;
    minus: (x: number, y: number) => number;
}
declare let funcs: Funcs;
