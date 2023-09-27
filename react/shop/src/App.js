import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import 이미지1 from "./img/18ac3091-5615-4b51-b833-f3d8f909b35c.webp";
import { useState } from "react";
import { data } from "./data";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">YONGISA MART</Navbar.Brand>
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
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Routes>는 단일 <Router />를 감싸며 각각의 Router들은 페이지 하나에 해당한다. */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: `url(${이미지1})` }}
              ></div>
              <div className="container">
                <div className="row">
                  <Item shoes={shoes} />
                </div>
              </div>
            </>
          }
        />
        :URL 뒤에는 
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
      </Routes>
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
const Item = ({ shoes }) => {
  return (
    <>
      {shoes?.map((shoe, i) => (
        <div className="col-md-4" key={i}>
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
