import { useState } from "react";
import "./App.css";

function App() {
  const [글제목, 글제목변경] = useState([
    "파이썬독학",
    "남자 코트 추천",
    "강남 우동맛집",
  ]);
  const [따봉, 따봉변경] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button
        onClick={() => {
          let sortingCopy = [...글제목];
          sortingCopy.sort((a, b) => a.localeCompare(b));
          //혹은 sort((a, b) => (a > b ? 1 : -1));
          글제목변경(sortingCopy);
          console.log(sortingCopy);
        }}
      >
        가나다정렬
      </button>
      <button
        onClick={() => {
          //let copy = 글제목;
          //console.log(copy == 글제목); //얘는 같은 '화살표를 가르키기 때문에 true가 나옴. 복사를 하려면 아래방식으로. 즉, true이기 때문에 copy는 기존state와 달라지지 않았다고 판단, 버튼이 작동하지 않는다.

          let copy = [...글제목]; //새로운 배열 데이터 복사(깊은 복사)
          copy[0] = "여자코트추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍🏽
          </span>
          {따봉}
        </h4>
        <p>7월 4일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>7월 4일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
            // !state 의 의미는 state를 항상 반대로 바꿔준다. !true는 출력해보면 false, !false는 출력해보면 true이다.
          }}
        >
          {글제목[2]}
        </h4>
        <p>7월 4일 발행</p>
      </div>

      {modal == true ? <Modal /> : null}
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
