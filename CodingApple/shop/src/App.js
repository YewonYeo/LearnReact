import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import img from "./img/bg.png";
import data from "./data";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  function Products(props) {
    return (
      <div
        className="col-md-4"
        onClick={() => {
          navigate("/detail");
        }}
      >
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            props.data.id + 1
          }.jpg`}
          width="80%"
        />
        <h4>{props.data.title}</h4>
        <p>{props.data.price}</p>
      </div>
    );
  }

  function Main() {
    return (
      <>
        <div
          className="main-bg"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="container">
          <div className="row">
            {shoes.map(function (shoe, i) {
              return <Products data={shoe} key={i} />;
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">OnShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
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

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />

        {/* nested routes: /about/member 방법으로 매핑하는 경우 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>안녕</div>} />
          <Route path="location" element={<About />} />
        </Route>

        <Route
          path="/event"
          element={
            <div>
              <h3>오늘의 이벤트</h3>
              <Outlet />
            </div>
          }
        >
          <Route path="one" element={<h4>첫 주문시 양배추즙 서비스</h4>} />
          <Route path="two" element={<h4>생일기념 쿠폰받기</h4>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <div>회사 정보 페이지</div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
