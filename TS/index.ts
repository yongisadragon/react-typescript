//가장 일반적으로 변수에 타입을 지정한 형태이다.
let 이름: string = "Kim";

//객체 형태. name 뒤의 ?는 속성은 옵션이라는 의미이다.
let 이름이: { name?: string } = { name: "Kim" };

// array를 구성하는 타입을 지정한다. 이름들이라는 변수에는 '문자열로 된' 배열만 올 수 있다는 의미이다.
let 이름들: string[] = ["Kim", "lee"];

//Union type은 다양한 타입이 들어올 수 있다.
let union: string[] | number = 123;

// Type alias. 타입은 변수에 담았을 수 있다. 보통 일반변수와 차별화돼서 관리할 수 있어 대문자를 쓴다고 한다.
type Name = string | number;
let 타입: Name = 123;

//함수에도 타입 지정이 가능하다. 파라미터도 일종의 변수이기 때문에 파라미터에도 타입을 지정해 줄 수 있다. 그 옆에는 return 될 타입의 종류 역시 지정이 가능하다. 즉, 이식은 파라미터로 number, return 값 역시 number가 되어야 한다.
function 함수(x: number): number {
  return x * 2;
}

// 변수로 오는 array의 첫째는 무조건 nubmer, 둘째는 boolean이 와야 한다는 의미. 이런 형식을 array에 쓸 수 있는 tuple 타입이라고 한다.
type Member = [number, boolean];
let john: Member = [123, true];

//이런식으로 써주면 글자로 된 모든 obj속성의 타입은:string이 된다라는 의미
type Member2 = {
  [key: string]: string;
};
let paul: Member2 = { name: "kim" };

//class에도 똑같이 타입을 지정 할 수 있음.
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
