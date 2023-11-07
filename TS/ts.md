### 0711

타입스크립트 왜 씀?

- 자바스크립트는 Dynamic Typing이 가능해서 타입에 있어 관대하고 자유도가 보장될 수 있다. (예를 들어 숫자에서 문자를 빼는 경우 등)
- 그렇지만 큰 규모의 프로젝트에서 자유도와 유연성은 단점이 된다. 그래서 타입스크립트는 Type관련 오류에 대해 엄격하게 에러를 잡아준다. (오타 잡아주는 에디터라고 생각하셈)

- 글로벌 타입스크립트 설치
  `nmp install -g typescript`

- 브라우저 파일은 무조건 .js파일만 읽을 수 있으므로 .ts파일은 무조건 compile을 거쳐야한다. 그러므로 `tsc -w` (watch) 를 입력하면 **자동으로 변환**되므로 입력해두자.

- tsconfig.json 안의 코드는 js -> ts 컴파일시 옵션을 설정하는 코드이다. target은 자바스크립트 어떤 버전으로 컴파일 할건지 정하는 것이고, module은 언제적 js문법으로 import 해줄지 정하는 것

### React 프로젝트에서 Typescript 사용할 경우

1. 이미 있는 React 프로젝트에 설치 -> 작업폴더경로에서 터미널을 오픈한 후
   `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

2. 그냥 React 프로젝트를 새로 만들거면 -> 새로 작업폴더를 하나 만드시고 거기서 에디터와 터미널을 오픈한 다음
   `npx create-react-app my-app --template typescript`

### 0720

**유니온 타입 사용**
"이 변수엔 string 또는 number가 들어올 수 있습니다~" 라고 타입정의를 하고싶으면 | 연산자를 씁시다.
OR 연산자 같은 느낌인데 이런 타입을 전문용어로 Union type 이라고 부릅니다.

### 1013

React에서 TS 쓰는법 요약
변수, 함수 만들 때 타입 지정하면 그게 전부임

* 새로운 react-ts 생성
`npx create-react-app 프로젝트명 --template typescript`

* 기존프로젝트에 생성
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

기본적으로 .ts
react내부에서 jsx문법이 있다하면 .tsx (html있는 파일)

-함수의 타입 지정은 return 값과 파라미터에 타입 지정이 가능함.

리액트에서 type assertion 문법 사용할 때

let code: any = 123;
let employeeCode = <number> code; //안됩니다
assertion 하고 싶으면 as 또는 <> 쓰면 되는데

리액트에서 컴포넌트로 오해할 수 있어서 꺾쇠 괄호는 리액트에서 쓰지않습니다.

as 키워드만 씁시다.

하지만 as 키워드는 타입스크립트 보안해제기 때문에 타입이 100% 확실할 때만 사용하도록 합시다.
