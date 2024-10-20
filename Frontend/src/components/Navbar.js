import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import SearchBox from "./SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const NavBarComps = () => {
  return (
    <div className="sticky-top" data-testId="navbar">
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="ms-2 me-0 bg-white Navbar pt-3 pb-3"
        >
          <Container fluid>
            <div className="d-flex">
              <Navbar.Brand as={Link} to={"/"} href="#" className="pt-2">
                <h4 id="Navbarview" data-testId="logo-brand">
                  ShopEase
                </h4>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "350px" }}
            >
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Offcanvas.Header closeButton>
                    <Link
                      as={Link}
                      to={"/"}
                      className="d-flex text-dark text-decoration-none"
                    >
                      <h5>ShopEase</h5>
                    </Link>
                  </Offcanvas.Header>
                  <Route
                    render={({ history }) => <SearchBox history={history} />}
                  />
                  <Nav.Link style={{ color: "#000" }}>
                    <i className="bi bi-person-circle fs-4 me-2"></i>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/cartItems"
                    style={{ width: "40px", color: "#000" }}
                  >
                    <i className="bi bi-cart3 fs-4 me-4"></i>
                  </Nav.Link>
                  <Nav.Link className="d-lg-none">Electronics</Nav.Link>
                  <Nav.Link className="d-lg-none">Sports</Nav.Link>
                  <Nav.Link className="d-lg-none">Outdoor</Nav.Link>
                  <Nav.Link className="d-lg-none">Travel</Nav.Link>
                  <Nav.Link className="d-lg-none">Health</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div className="d-lg-block d-none bg-white">
        <Navbar className="border-top border-bottom border-primary">
          <div className="d-flex pe-3">
            <Nav.Link className="pe-3" style={{ marginLeft: "100px" }}>
              Electronics
            </Nav.Link>
            <Nav.Link className="ms-5 pe-3">Sports</Nav.Link>
            <Nav.Link className="ms-5 pe-3">Outdoor</Nav.Link>
            <Nav.Link className="ms-5 pe-3">Travel</Nav.Link>
            <Nav.Link className="ms-5 pe-3">Health</Nav.Link>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBarComps;
