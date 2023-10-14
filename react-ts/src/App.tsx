import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// 일반 변수와 jsx 타입지정법
let a: string = "kim";
let b: JSX.Element = <div></div>;
function App() {
  // useState 값에 타입지정, 타입이 저절로 잘 지정되는데, 간혹 (string | number) 이딴식으로 짜고 싶다면, <string | number> 같이 제너릭으로 짜면된다.
  let [user, setUser] = useState<string | number>("kim");

  return (
    <>
      <h4>안녕하세요</h4>
      <Profile name="철수"></Profile>
    </>
  );
}

// 컴포넌트 만들 때 타입지정 (각각 파라미터, 리턴타입)
//props 자리에는 {name:'철수'} 같은 형식으로 넘어오는데, props 타입을 지정하기 위해서는 파라미터 형태 같도록 유지, 물론 type alias, interface 사용 가능 특히 props에서 버그가 많이 발생하는데, 잘 방지해주면 에러 방지에 좋다.
function Profile(props: { name: string }): JSX.Element {
  return <div>{props.name}입니다.</div>;
}

export default App;
