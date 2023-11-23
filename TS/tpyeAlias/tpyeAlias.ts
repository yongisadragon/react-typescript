// type alias(별칭)를 작성할 때, 타입이 지정이 길어지면 type을 붙여서 변수처럼 작성해 사용 가능하다. 일반 변수와의 차별화를 위해서 대문자로 시작하는건 국룰

type Animal = { name: string; age: number };
let 용팔이: Animal = { name: "dog", age: 10 };

// 여기서 잠깐! object타입은 const에 의해 변수할당이 되어도, 내부 key에 붙은 value값은 변경이 가능하다. const 변수는 재할당만 막아줄 뿐이지 그 안에 있는 object 속성 바꾸는 것 까지 관여하지 않기 때문입니다. readonly 키워드는 속성 왼쪽에 붙일 수 있으며 특정 속성을 변경불가능하게 잠궈줍니다.

const 출생지역 = { region: "seoul" };

출생지역.region = "busan "; // 변경가능

// 타입스크립트에서는(파일안에서만) 이런 임의적으로 키값 앞에 object 자료 수정을 막아주는(것처럼 보이는) readonly를 붙일 수 있다. 실제로 js파일로 가보면 변환은 해주고 있다. 다만 ts파일안에서 경고를 해주는 것이다.

type Girlfriend = {
  readonly name: string;
};

const 여친: Girlfriend = { name: "엠버" };
여친.name = "유라";

// type변수는 당연히 union type으로 합치기도 가능

type Job = string;
type Age = number;
type Person = Job | Age;

// obj타입은 &연산자로 obj를 합칠 수 있다. (extend한다고 표현한다.)
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let positon: NewType = { x: 10, y: 20 };

// 같은 이름으로 type변수 재정의 불가하다.!
type PositionZ = { x: number };
type PositionZ = number;

type Lee = { x: string };
type Kim = { y: string };
type FristName = Lee & Kim;

let firstName: FristName = { x: "kim", y: "kim" };

type ThisOne = {
  color?: string;
  size: number;
  readonly position: number[];
};

//이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias

type They = {
  name: string;
  phone: number;
  email?: string;
};

type Teenager = {
  adult: boolean;
};

type NewUser = They & Teenager;

let 회원가입정보: NewUser = {
  name: "kim",
  phone: 1234,
  adult: false,
};
