import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import 이미지1 from "./img/18ac3091-5615-4b51-b833-f3d8f909b35c.webp";
import { useState } from "react";
import { data } from "./data";
function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">YONGISA MART</Navbar.Brand>
          <Nav className="my-4 me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: `url(${이미지1})` }}
      ></div>
      <div className="container">
        <div className="row">
          <Item shoes={shoes} />
        </div>
      </div>
    </div>
  );
}

const Item = ({ shoes }) => {
  return (
    <>
      {shoes?.map((shoe) => (
        <div className="col-md-4">
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
