import React, { useState } from "react";
import "./App.css";

function App() {
  const [글제목, 글제목변경] = useState([
    "파이썬독학",
    "남자 코트 추천",
    "강남 우동맛집",
  ]);
  const [따봉, 따봉변경] = useState(0);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [values, setValues] = useState("");

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
      {글제목.map((v, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  따봉변경(따봉 + 1);
                  e.stopPropagation();
                  // span을 클릭해도 span - h4 - div 로 이벤트 버블링이 일어남.
                }}
              >
                👍🏽
              </span>
              {따봉}
            </h4>
            <p>7월 4일 발행</p>
            <button
              onClick={() => {
                let delCopy = [...글제목];
                delCopy.splice(i, 1);
                // 인자는 각각 삭제하고 싶은 인덱스, 삭제하고 싶은 갯수
                글제목변경(delCopy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      {/* input태그의 onChange라는 이벤트 핸들러를 달면 입력할 때마다, ()=>{} 안의
      코드가 실행된다. 이때 파라미터로 넣는 event(e)라는 파라미터는 e는 이벤트
      객체라고 불리우는, input태그에서 발생하는 이벤트들을 관리하는 일종의
      변수같은 기능이다. e.target.value 등을 입력해서 input에 입력되는 값을 다룰 수 있다. 참고로, stat변경함수(set~)는 비동기처리로, 늦게 처리된다. 즉, 한글자만 입력했을때 콘솔이 비는 이유는 set함수보다 console을 먼저 실행시키기 때문임. */}
      <input
        value={values}
        onChange={(e) => {
          setValues(e.target.value);
          console.log(values);
        }}
      />
      <button
        onClick={() => {
          if (values) {
            글제목변경((prev) => [values, ...prev]);
            setValues("");
          }
          // let addArray = [...글제목];
          // addArray.unshift(values);
          // 글제목변경(addArray);
          // setValues("");
          // 이렇게해서 배열 변경해도 DB가 없어 새로고침 하면 날라갑니다. 원래 브라우저는 새로고침하면 html, js 파일을 다시 읽습니다. 다시 읽으면 state나 변수같은 것들도 초기값으로 변경됩니다.나중에 DB 추가할 때 배웁시다!
        }}
      >
        글추가
      </button>
      <Modal2></Modal2>

      {modal == true ? (
        <Modal 글제목변경={글제목변경} 글제목={글제목} title={title} />
      ) : null}
    </div>
  );
}

export default App;

const Modal = ({ 글제목, 글제목변경, title }) => {
  return (
    <div className="modal">
      <h4>{글제목[title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          글제목변경((prev) => {
            const copy = [...prev];
            copy[0] = "여자코트추천";
            return copy;
          });
        }}
        //혹은
        //  onClick={()=>{
        //   const copy = [...글제목];
        //   copy[0] = '여자코트추천';
        //   글제목변경(copy);
        // }}
      >
        글 수정
      </button>
    </div>
  );
};

// class로 컴포넌트를 만들 수 있다. 참고만 하도록 하자.

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    //state만들고 싶으면 constructor안에 obj형식으로 만듬. cunstructor와 super의 파라미터로 부모의 props를 받는 형식이다.
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <>
        <div>이름은{this.state.name}이구요</div>
        <div>나이는{this.state.age}이에요</div>
        <button
          onClick={() => {
            // set변경은 이런식으로 쓴답니다.
            this.setState({ age: 21 });
          }}
        ></button>
      </>
    );
  }
}
