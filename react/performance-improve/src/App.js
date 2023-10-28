import { useDeferredValue, useState, useTransition } from "react";

const arr = new Array(5000).fill(0);

function App() {
  let [name, setName] = useState("");
  //useTransition 은 2개의 변수를 받는데, startTransition은 함수이고, isPending은 startTransition이 감싼 코드가 처리중일 때 true를 유지하는 변수이다.
  let [isPending, startTransition] = useTransition();
  //여기 집어넣은 state는 늦게 변화해줌.
  let state = useDeferredValue(name);
  return (
    <>
      <input
        onChange={(e) => {
          //느린 함수를 startTransition로 감싸면 코드처리를 약간 늦게 처리(다른 중요한 작업 다하고)해서 빠르게 처리해주는 것처럼 보인다.
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />
      {isPending
        ? "로딩 중..."
        : arr.map(() => {
            return <div>{state}</div>;
          })}
    </>
  );
}
export default App;
