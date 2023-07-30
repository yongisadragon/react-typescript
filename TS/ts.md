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
