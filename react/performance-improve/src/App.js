import { useState } from "react";
function App() {
  let [name, setName] = useState();
  return (
    <>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>{name}</div>
    </>
  );
}
export default App;
