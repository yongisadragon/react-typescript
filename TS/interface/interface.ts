// obj의 경우 type이나 interface나 같은 타입지정의 역할을 한다. *interface의 경우 등호는 필요없다. 일종의 클래스랑 비슷한 모냥새
// type Square = { color: string; width: number };
interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 100 };

// -> 근데 모냥새만 class랑 비슷한게 아니라 class의 extends를 쓸수있음. 요롷게요.
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "lee", age: 29 };
// interface가 &를 사용한 경우
let 변수: Student & Teacher = { name: "park", age: 40 };
// type에도 이런 extends과 유사한 기능이 있다. &기호(intersection type)이라고 한다. 다만 이건 '복사'의 개념이 아니라 두 타입 모두 만족하는 타입이라는 뜻임.
type Dog = { name: string };
type Cat = { age: number } & Animal;

// 중요한 차이점은, interface는 중복선언 가능 vs type은 중복선언 불가능 하다는 점이다. type은 엄격하고, interface는 유연하다.
// interface의 경우 중복선언을 하면 자동 extends이 된다고 생각하면 된다. 그래서 다른 사람이 이용 많이 할 것 같은 obj 타입 지정할 때 interface를 쓰자.

interface Me {
  name: string;
}
interface Me {
  age: 29;
}

//연습1.
//interface 이용해서 간단하게 타입을
let 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

// 연습2.
// 배열속 obj를 interface로 만들어보자.
let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface Cart {
  product: string;
  price: number;
}
// 연습3.
// 연습2에서 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
//혹은 속성이 겹치지않으면 & 연산자 써도 가능합니다.
interface UpdateCart extends Cart {
  card: boolean;
}

// 연습4.
// object 안에 함수를 2개 넣고 싶은데요
// 함수타입은 타입지정 화살표로 해주기.
interface Funcs {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

let funcs: Funcs = {
  plus(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};
