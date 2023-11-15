### 1107

**_React에서 TS 쓰는법 요약_**

변수, 함수 만들 때 타입 지정하면 그게 전부임

- 새로운 react-ts 생성
  `npx create-react-app 프로젝트명 --template typescript`

- 기존프로젝트에 생성
  `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

기본적으로 .ts
react내부에서 jsx문법이 있다하면 .tsx 으로 작명 (html있는 파일)

-컴포넌트 만들때 타입지정 (함수의 타입 지정)은 return 값과 파라미터에 타입 지정이 가능함.

리액트에서 type assertion 문법 사용할 때

let code: any = 123;
let employeeCode = <number> code; //안됩니다
assertion 하고 싶으면 as 또는 <> 쓰면 되는데

리액트에서 컴포넌트로 오해할 수 있어서 꺾쇠 괄호는 리액트에서 쓰지않습니다.

as 키워드만 씁시다.

하지만 as 키워드는 타입스크립트 보안해제기 때문에 타입이 100% 확실할 때만 사용하도록 합시다.

\*\*\* 리덕스 + TS 사용 방법
우선 간단하게 리액트에서 리덕스를 쓰는 이유

1. 모든 컴포넌트가 state 공유가능
2. 수정방법을 파일 한 곳에 정의해둠.

리덕스는 복잡하니 toolkit의 타입지정법 알아봅시다.

타입지정은

(1) state 초기값 타입지정 알아서 해주십시오
(2) reducer 안의 action 파라미터의 타입지정 해주십시오
(3) 나머지는 타입지정 필요없습니다. 자동임

```
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const 초기값 = { count: 0, user : 'kim' };

const counterSlice = createSlice({
  name: 'counter',
  initialState : 초기값,
  reducers: {
    increment (state){
      state.count += 1
    },
    decrement (state){
      state.count -= 1
    },
    incrementByAmount (state, action: PayloadAction<number>){
      state.count += action.payload
    }
  }
})

let store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
  }
})

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>

//수정방법 만든거 export
export let {increment, decrement, incrementByAmount} = counterSlice.actions
```

꺼내온거 쓸때에는 이렇게 합니다.

```
import { useDispatch, useSelector } from 'react-redux'
import {RootState, increment} from './index'

function App() {

  const 꺼내온거 = useSelector( (state :RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button onClick={()=>{dispatch(increment())}}>버튼</button>
    </div>
  );
}
```
