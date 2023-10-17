import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { addItem } from "../store";

//구식 컴포넌트 갈고리 다는 법
// class Detail2 extends React.Component {
//   componentDidMount() {
//     //컴포넌트 mount시 여기 코드 실행됨
//   }
//   componentDidUpdate() {
//     //컴포넌트 update시 여기 코드 실행됨
//   }
//   componentWillUnmount() {
//     //컴포넌트 unmount시 여기 코드 실행됨
//   }
// }

//요즘 컴포넌트 갈고리 다는 법 (useEffect)
//mount, update시 코드 실행해주는 useEffect! 리액트상에서 개발을 할때에는 디버깅등의 이유로 두번 실행될 수 있음. 실제 사이트에서는 안그렇지만 이게 싫다면 index.js에서 React.StrictMode 이런거 없애시든가요.
//사실 cosole.log()는 useEffect바깥에서도 실행이 된다. 그러면 useEffect는 왜, 언제쓰는가. -> txt참고..

export default function Detail({ shoes }) {
  // let [shoes] = useState(data); 이런식으로 하면 상태값을 수정해야할 때, App.js에 있는 상태값과 두곳을 수정해야하는 번거로움이 있기때문에 데이터를 드릴링해주는게 좋다.(단계가 많지 않을때) 일반적으로 데이터는 한곳에서 관리하셈.
  // useParams라는 훅은 현재 유저가 URL 파라미터에 입력한 값을 가져온다. 예를들어 이 컴포넌트는 /detail/:id에 해당 하는 컴포넌트인데, 예를들어 유저가 detail/1 이라고 입력하면 useParams를 통해 1을 뿅 나오게 해준다. 이걸 어디에 쓰냐구? 데이터화 된 shoes에 순서를 매겨서 각각 다른 내용을 보여줄 때 활용하면 되지 않을까? 참고로 {}안에 작명이름은 router에서 :id 에 써준 이름과 일치해야합니다.
  let { id } = useParams();
  //shoes가 배열이므로 find()는 배열중 일치하는(params의 id와 shoes data 고유 id와 일치하는) 첫 요소를 반환(배열이니까 여기 data에선 각 순서에 해당하는 객체(상품)를 반환할듯), 즉 일치상품이란 id값이 일치할때에만 생기는 변수값. data상에서 없는 아이디값을 입력하면 find는 undefined를 뱉음.
  let 일치상품 = shoes.find((x) => x.id == id);

  const [alerted, setalerted] = useState(true);
  const [inputTxt, setInputTxt] = useState("");
  const [tabCount, setTabCount] = useState(0);
  const [fade2, setFade2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // 변수에 담아서 setTimeout해도 동작함. 이렇게 담으면 장점이 클린업 함수에서 제거할 수 있음.
    let timer = setTimeout(() => {
      //이건 매우 생자바스크립트 방식
      // document.querySelector(".alerted").style.display = "none";
      setalerted(false); // ui 꺼주세요..
      console.log(2);
      return () => {
        //useEffect 동작 전에 실행되는 return ()=>{}, 클린업 함수눈 mount시엔 실행x, unmount시에는 실행됨.
        //예를 들어 서버에서 데이터 요청과 관련된 버그를 없애기 위해 사용하기도 함.
        clearTimeout(timer);
        console.log(1);
      };
    }, 2000);
  }, []);
  //배열안에 다른값이 있으면 그 값이 변할때마다 실행 + mount 될때마다 실행 2가지 조건이 실행되기 때문에, 의존성 배열을 비우는것은 일종의 편법임(mount에만 실행되도록)

  const inputHandler = (e) => {
    setInputTxt(e.target.value);
  };

  //input값에 숫자 이외엔 허용하지 않는 함수를 만드려면?
  useEffect(() => {
    if (isNaN(inputTxt)) {
      alert("숫자만!");
      setInputTxt("");
    }
  }, [inputTxt]);

  //detail 컴포넌트 투명도 애니메이션
  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  return (
    <>
      {alerted && (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      )}

      {!일치상품 ? (
        <p>해당 신발을 찾을 수 없습니다.</p>
      ) : (
        <div className={"container start " + fade2}>
          <YellowBtn bg="blue">버튼</YellowBtn>
          <YellowBtn bg="yellow">버튼</YellowBtn>
          <div className="row">
            <div className="col-md-6">
              <img
                src={`https://codingapple1.github.io/shop/shoes${
                  일치상품.id + 1
                }.jpg`}
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <input value={inputTxt} onChange={inputHandler} type="text" />
              <h4 className="pt-2">{일치상품.title}</h4>
              <p>{일치상품.content}</p>
              <p>{일치상품.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(
                    addItem({
                      id: 일치상품.id,
                      name: 일치상품.title,
                      count: 1,
                    })
                  );
                  navigate("/cart");
                }}
              >
                주문하기
              </button>
            </div>
          </div>
          <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTabCount(0);
                }}
                eventKey="link0"
              >
                버튼0
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTabCount(1);
                }}
                eventKey="link1"
              >
                버튼1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTabCount(2);
                }}
                eventKey="link2"
              >
                버튼2
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContente shoes={shoes} tabCount={tabCount} />
        </div>
      )}
    </>
  );
}

function TabContente({ shoes, tabCount }) {
  const [fade, setFade] = useState("");
  // className 변경으로 애니메이팅 주기 위한 uesEffect. 이런식으로 setTime을 안해주면 automatic batching에 의해 state가 일괄처리되게 되어 내용이 아얘 안보이거나, 의도한대로 className state를 바꿀 수 없다. 참고로 클린업 함수로 클래스네임을 의도적으로 비웠다가 다시 넣는 방식.
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [tabCount]);

  return (
    // return 안에는 if문을 못쓰니 삼항연산자를 써야하는데, 삼항도 길어지면 컴포넌트를 새로 생성하고, 그안에서 다시 조건에 의한 렌더링 보여줘야합니다. 이렇게하면 배열과 단순 숫자 state만을 사용해서 삼항도 필요없지 않을까요?
    <>
      <div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabCount]}
      </div>
    </>
  );
}

//css-in-js styled-components:
//장점1. css까지 가지 않고 js안에서 할 수 있어서 편리하다. 하나의 스타일을 가진 '컴포넌트'를 생성해준다고 생각하면된다.
//장점2. 다른 js파일을 오염시키지 않음. 해당 js파일에서만 유효. 리액트는 html css js 파일을 하나로 합치는데, 그게 사이즈가 커질 경우 단점이 될 수 있음. (*css 파일을 작명.module.css 하면 '작명'이라는 컴포넌트에 종속시키는 문법이 있다.)
//장점3. <styled></style>형식으로 넣어주기 때문에 페이지 로딩시간 향상이 있다.

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) =>
    props.bg == "blue"
      ? "white"
      : "black"}; //이딴 프로그래밍적인 코드도 짤 수 있따.
  padding: 10px;
`;

// 단점1. JS 파일이 매우 복잡해집니다. 그리고 이 컴포넌트가 styled 인지 아니면 일반 컴포넌트인지 구분도 어렵습니다.

// 단점2. JS 파일 간 중복 디자인이 많이 필요하면 어쩌죠?다른 파일에서 스타일 넣은 것들 import 해와서 쓰면 됩니다.근데 그럼 CSS파일 쓰는거랑 차이가 없을 수도요

// 단점3. CSS 담당하는 디자이너가 있다면 협업시 불편할텐데 그 사람이 styled-components 문법을 모른다면 그 사람이 CSS로 짠걸 styled-components 문법으로 다시 바꾸거나 그런 작업이 필요하겠군요. 그래서 신기술같은거 도입시엔 언제나 미래를 생각해보아야합니다.
