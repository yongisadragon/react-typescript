// redux 사용시, state들을 보관하는 '통'인 store를 만들어준다. store로 작명.
import { configureStore, createSlice } from "@reduxjs/toolkit";

//useState랑 거의 비슷하다고 생각하면 된다. createSlice는 cofigureStore에 등록해 사용해야한다.

let user = createSlice({
  name: "user",
  initialState: "kim",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let products = createSlice({
  name: "products",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});
// confiureStore는 slice를 등록하는 곳이다. 규격에 맞춰야함. => 변수.reducer가 store에 등록하는 행동이며, 왼쪽 작명이름은 보통 변수와 이름을 맞춘다. 다른 파일에서 useSelector로 사용할때에는 왼쪽 이름을 끌어다 쓴다.
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    products: products.reducer,
  },
});
