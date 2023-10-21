import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import 이미지1 from "./img/18ac3091-5615-4b51-b833-f3d8f909b35c.webp";
import { Suspense, lazy, useEffect, useState } from "react";
import { data } from "./data";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

// import Detail from "./pages/Detail";
// import Cart from "./pages/Cart";

// lazy를 사용했을때, 해당 컴포넌트들이 뜨는데 하얀화면으로 로딩이 지연되는 경우가 있다.
const Detail = lazy(() => import("./pages/Detail"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  // 쌩 obj를 setItem하면 [object Object] 이딴식으로 깨져버릴 것입니다. stringify를 하면 {"name":"lee"} 요런식으로 문자열화 될것입니다.
  let obj = { name: "lee" };
  localStorage.setItem("data", JSON.stringify(obj));
  let 꺼낸거 = localStorage.getItem("data");
  // console.log(JSON.parse(꺼낸거));

  let [shoes, setSheos] = useState(data);
  let [isLoading, setIsLoading] = useState(false);
  let [count, setCount] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  // axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
  //   console.log(a.data);
  // });
  // 원래대로라면 서버에 axios 또는 fetch 할 수 있겠지만 react-query에서는 많은 응용기능들이 있는 useQuery를 이용해서 ajax를 요청한다네요.
  // useQuery 사용 장점.. txt참고

  let result = useQuery(
    "작명",
    () =>
      axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
        // console.log("요청됨");
        return a.data;
      }),
    // 3초안에는 refetch안됨.
    { staleTime: 3000 }
  );
  // console.log(result);

  return (
    <div className="App">
      <Navbar bg="lighrt" data-bs-theme="light">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            YONGISA MART
          </Navbar.Brand>
          <Nav className="my-4 me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* reactquery는 state를 따로 만들필요없이 result하나에 들어있는 return 값들을(결과에대한) 유용하게 사용가능하다.ㄴ */}
            {result.isLoading ? "로딩중" : `안녕하세요 ${result.data.name}님!`}
          </Nav>
        </Container>
      </Navbar>

      {/* <Routes>는 단일 <Router />를 감싸며 각각의 Router들은 페이지 하나에 해당한다. */}
      {/*  대게는 lazy가 적용될 컴포넌트만 감싸지만, Routes전체를 Suspense 하고, 컴포넌트들이 뜰때까지 fallback에 있는 것을 보여줍니다.  */}
      <Suspense fallback={<div>로딩중입니다.</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="main-bg"
                  style={{ backgroundImage: `url(${이미지1})` }}
                ></div>
                {isLoading && <p className="mt-3">로딩중입니다 . . .</p>}
                <div className="container">
                  <div className="row">
                    <Item navigate={navigate} shoes={shoes} />
                  </div>
                </div>
                {count < 2 && (
                  <button
                    //기본적은 axios사용법, 새로고침 없이 가져오는 깔끔한 방법
                    onClick={() => {
                      //더보기 토글
                      setCount(count + 1);
                      setIsLoading(true);
                      console.log(count);
                      Promise.all([
                        axios.get(
                          "https://codingapple1.github.io/shop/data2.json"
                        ),
                        axios.get(
                          "https://codingapple1.github.io/shop/data3.json"
                        ),
                      ]).then((r) => {
                        console.log(r); //2개가 배열로 동시에 들어옴
                        setTimeout(() => {
                          setIsLoading(false);
                          if (count == 0) {
                            //기존 데이터 배열에 새로운 데이터 넣기.
                            let copy = [...shoes, ...r[0].data];
                            setSheos(copy);
                          } else if (count == 1) {
                            let copy2 = [...shoes, ...r[1].data];
                            setSheos(copy2);
                          } else {
                            alert("없어요 더이상");
                          }
                        }, 600);
                      });
                    }}
                  >
                    더보기
                  </button>
                )}
              </>
            }
          />
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버</div>} />
            <Route path="location" element={<div>위치</div>} />
          </Route>
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<p>양배추즙 증정</p>} />
            <Route path="two" element={<p>쿠폰 증정</p>} />
          </Route>
          {/* 404페이지를 위해, *는 이외의 모든 url경로를 뜻함 */}
          <Route path="*" element={<div>없는 페이지</div>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </div>
  );
}

//About Page
const About = () => {
  return (
    <div>
      <h4>회사정보 중에</h4>
      {/* Oulet은 nested 하위 요소들이 올 자리이다. */}
      <Outlet />
    </div>
  );
};

//Event Page
const Event = () => {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet />
    </>
  );
};

//Detail Page
const Item = ({ shoes, navigate }) => {
  return (
    <>
      {shoes?.map((shoe, i) => (
        <div
          className="col-md-4 hoverItem"
          key={i}
          onClick={() => {
            navigate(`detail/${shoe.id}`);
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`}
            width="80%"
          />
          <h4>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
        </div>
      ))}
    </>
  );
};

export default App;
