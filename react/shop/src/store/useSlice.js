import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    // reducers안의 함수들을 action이라고 함.
    // 첫번째 파라미터는 기존 스테이트를 뜻함, 두번째는 쓰이는 함수의 파라미터는 ??.payload로 사용하여 dispatch안 함수의 파라미터값을 받는다. 두번째 파라미터 이름은 관습적으로 action 사용.
    changeName(state, action) {
      // 둘다 가능, state 가 arr/ obj 일경우 return문 대신 직접 접근해서 수정해도 봐줍니다. 그래서 state가 문자 하나만 있더라도 의도적으로 obj형태로 제작하기도 함. return 없이 수정이 간편하니까요.
      // return { name: "park", age: 25 };
      state.name = "park";
      state.age += action.payload;
    },
  },
});

// slice저장소이름.action 에는 함수들이 객체 형태로 남는다.
export let { changeName } = user.actions;

export default user;
