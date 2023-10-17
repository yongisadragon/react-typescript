// redux 사용시, state들을 보관하는 '통'인 store를 만들어준다. store로 작명.
import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/useSlice";

//useState랑 거의 비슷하다고 생각하면 된다. createSlice는 cofigureStore에 등록해 사용해야한다.

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCount(state, action) {
      // 더 정확하게 하려면 find로 map이 된 id 값과 고유 id값이 일치해야한다. 가나다순 정렬이나 기타 기준에 의한 정렬로 정렬했을 때 순서가 달라질 수 있기 때문, 하지만 버튼이 포함된 정확한 id값을 찾아내면 섞이지 않고 처리 할 수 있다. findIndex()는 조건 일치되는 index를 리턴해줌.
      let matchNum = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[matchNum].count++;
    },
    addItem(state, action) {
      // 일반적으로 state.push(action.payload)도 됨. 스프레드는 iterable해야하는듯. 그래서 payload값 배열로 설정해줬음.
      // find 못하면 undefined. 찾으면 첫번째 요소 넣어줌.
      let matchItem = state.find((a) => a.id == action.payload.id);
      if (matchItem) {
        matchItem.count++;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      let matchNum = state.findIndex((a) => a.id === action.payload);
      state.splice(matchNum, 1);
    },
  },
});

export let { increaseCount, addItem, deleteItem } = cart.actions;

// confiureStore는 slice를 등록하는 곳이다. 규격에 맞춰야함. => 변수.reducer가 store에 등록하는 동작이며, 왼쪽 작명이름은 보통 변수와 이름을 맞춘다. 다른 파일에서 useSelector로 사용할때에는 왼쪽 이름을 끌어다 쓴다.
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
