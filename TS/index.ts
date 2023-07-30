//가장 일반적으로 변수에 타입을 지정한 형태이다. '변수명 : 타입명'의 형태이며, 타입명에는 string, number, boolean, null, undefined .. 등이 올 수 있다. (변수에 쉴드 씌우는 거임. 일종의 베리어)
let 이름: string = "Kim";

//객체 형태. name 뒤의 ?는 name의 속성이 string일수도, 아닐 수도 있다는 옵션의 의미이다.
let 이름이: { name?: string } = { name: "Kim" };

// array를 구성하는 타입을 지정한다. []의 앞에는 배열안에 들어올 타입들을 지정해줘야하는데, 아래와 같은 경우는 배열안에 string 요소들만 올 수 있다는 의미이다.
let 이름들: string[] = ["Kim", "lee"];

//Union type은 다양한 타입들을 혼합해서 사용 가능하다.
let union: string[] | number = 123;

// Type alias. 타입은 변수에 담았을 수 있다. 보통 일반변수와 차별화돼서 관리할 수 있어 대문자를 쓴다고 한다.
type Name = string | number;
let 타입: Name = 123;

//함수에도 타입 지정이 가능하다. 파라미터도 일종의 변수이기 때문에 파라미터에도 타입을 지정해 줄 수 있다. 그 옆에는 return값의 타입 종류 역시 지정이 가능하다. 즉, 이식은 파라미터로 number, return 값 역시 number가 되어야 한다.
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

//근데, 초보는 온갖 변수에 타입 지정하려하는데, 타입 지정은 원래 자동으로 돼서 타입지정 문법 생략가능

let 못믿겠으면 = [1, 2, 3];
let 변수에마우스올려봐 = "king";

//문제
let 이상용이름: string = "leesangyong";
let 이상용나이: number = 29;
let 이상용지역: string = "경기도";

let 이상용취향: { 가수: string; 제목: string } = {
  가수: "버즈",
  제목: "겁쟁이",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// Union type: 타입 2개 이상이 올 수도 있다. 라는 의미. 심심하면 소괄호 치등가요. 그런데 할당을 확정해버리면 타입이 확정되고, 다시 할당할 수 있음.
let 회원: number | string = 123;
회원;
//유니온 응용하면 이럴수도 있겠죠. (넘버 혹은 스트링)이 들어갈 수 있는 배열.
let 회원들: (number | string)[] = [1, 2, 3];
//근데 1번과 2번은 다른 의미임. (숫자형)혹은 (스트링이 담긴 배열)이 올 수 있단 의미.
let 회원들2: number | string[] = 1;

//오브젝트는 이렇게.
let 오브젝트: { a: string | number } = { a: "123" };

//Any type: 모든 자료형 허용, 이건 주의 해야함. 실드를 해제문법입니다.
let 애니: any;
애니 = 123;
애니 = "123";
애니 = false;

//Unknown type: any랑 비슷함. 모든 자료형 허용해줌. 하지만 차이점은
let 언노운: unknown;
언노운 = 123;
언노운 = "123";
언노운 = false;

//any는 모든 변수의 타입 실드를 해제하지만, unknown은 따로 지정을 해주면 그 타입으로 보호받는다. 그래서 string으로 보호받는 변수1에서 에러가 뜸.
let 변수1: string = 언노운;
let 변수2: string = 애니;

언노운 - 1; //이런거 안되게함.
애니 - 1; //이런건 됨.

//이런경우들은 안됨. 즉, 타입스크립트는 엄격하기 때문에 유니온타입이나 언노운처럼 얘가 될수도 쟤가 될수도 있는 변수들은 염격하게 다뤄져 연산이 안됨.
//unknown은 number타입이 아닙니다. string|number 이것도 number 타입이 아닙니다.
//변수의 타입이 확실해야 연산을 수행해줍니다. 나중에 Narrowing/Assertion 배워서 엄격하게 짜도록 하시오.
let 나이: string | number;
나이 + 1;

언노운 - 1;

/** 즉,
 *  string +1 (허용)
 *  number +1 (허용)
 *  string | number +1 (안돼)
 *
 * */

//연습. 타입을 지정해보자. 철수 변수를 주의깊게 보자.
// let user = 'kim';
// let age = undefined;
// let married = false;
// let 철수 = [user, age, married];

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (boolean | number)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// 함수에는 void라는 타입이있음. return 쓰기 싫은 함수들. void는 '텅비었다'라는 의미로, return값 뱉어내고 싶지 않을 때 씀.
function func(x: number): void {}

func(); //또한, js와 다른점은 타입이 지정된(number) 파라미터는 필수로 넣어줘야한다. 파라미터변수 뒤에 -> 파라미터변수?:타입 이런식으로 ? 붙여줘야 상관없다고 표현할 수 있음. '변수?:타입'은 '변수:타입|undefined' 와 같음

//퀴즈: 여기서 x+2는 왜 에러가 뜸?
//답: x는 유니온 타입이다. ts는 엄격하기 때문에 x가 넘버 혹은 문자라는 애매한 타입지정은 연산 안해줌. 문자+숫자/숫ㅈ+숫자도 가능. 이외엔 불가능.
function 함함수(x: number | string): void {
  console.log(x + 2);
}
함함수(2);


//이런 식으로 바꿔줘야하는데, if안의 조건처럼 엄격하게 조건 설정하는 것을 narrowing이라고함.
function 함함수2(x: number | string): void {
  if(x의 타입이 숫자면) {
  console.log(x + 2);
  }
}
함함수(2);


// 이름을 파라미터로 입력하면 인사를 출력하는 ㅎ마수
function namer(x?:string):void{
  if(x){
    console.log(`안녕하세요 ${x}`)
} else {
  console.log('없읍니다')
}
}
namer('홍길동')

//함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수, 문자에 .length입력가능
function calcNum(x:string|number):number{
  return x.toString().length
}

function 결혼가능하냐(money:number,house:boolean,face:string):string|void{
  let score:number = 0;
  if(money){
    score+=money
  } if(house){
    score+=500;
  } if(face==='상'){
    score+=100;
  }
  if(score>=600) return '결혼가능'
}
console.log(결혼가능하냐(100,true,'상'))