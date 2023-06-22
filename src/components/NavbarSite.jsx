import "./NavbarSite.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { CloseButton } from "react-bootstrap";

function NavbarSite() {
  const expand = false;
  return (
    <Navbar expand="false" className="navbar-project">
      <NavbarToggle
        aria-controls="basic-navbar-nav"
        className="border border-0 p-0 position-absolute ms-4"
      >
        <img
          src="../src/assets/list_hamburger_icon.svg"
          alt="navbar-icon"
          className="navbar-icon"
        />
      </NavbarToggle>
      <Container className="d-flex justify-content-center">
        <div className="nav-general-cont">
          <div className="nav-brands-left">
            <Link
              className="btn d-none d-lg-inline-block"
              to={"/collections/rolex"}
            >
              <div className="btn-content">Rolex</div>
            </Link>
            <Link
              className="btn d-none d-lg-inline-block "
              to={"/collections/victorinox"}
            >
              <div className="btn-content">Victorinox</div>
            </Link>
          </div>
          <div className="nav-brand">
            <Navbar.Brand>
              <Link to="/" className="text-nabvar-brand">
                Kairos
              </Link>
            </Navbar.Brand>
          </div>
          <div className="nav-brands-right">
            <Link
              className="btn d-none d-lg-inline-block "
              to={"/collections/omega"}
            >
              <div className="btn-content">Omega</div>
            </Link>
            <Link
              className="btn d-none d-lg-inline-block "
              to={"/collections/patekphilippe"}
            >
              <div className="btn-content">Patek Philippe</div>
            </Link>
          </div>
        </div>
        <div className="login-container">
          <Link className="btn" to={"/login"}>
            <div className="btn-content">Login</div>
          </Link>
        </div>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          className="offcanvas-project"
        >
          <Offcanvas.Header
            closeButton
            closeVariant="white"
            className="justify-content-end"
          ></Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column align-items-start mx-5 offcanvas-project p-0">
            <Nav className="text-primary">
              <Nav.Link
                className="justify-content-start p-0 fw-bold mt-3 btn-content btn-nav"
                href="/about"
              >
                ABOUT THE PROJECT
              </Nav.Link>
              <Nav.Link
                className="justify-content-start p-0 fw-bold mt-3 btn-content btn-nav"
                href="/shop"
              >
                VIEW ALL WATCHES
              </Nav.Link>
              <Link
                className="justify-content-start mt-3 fw-bold"
                to="/rolex/lines"
              >
                <div className="btn-content btn-nav">Rolex</div>
              </Link>
              <ul className="list-unstyled m-0 ms-1">
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Submariner</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Daytona</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Oyster</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">GMT-Master II</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Day-Date</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Pearlmaster</li>
                </Link>
              </ul>
              <Link
                className="justify-content-start mt-3 fw-bold"
                to="/victorinox-swiss-army/lines"
              >
                <div className="btn-content btn-nav">Victorinox Swiss Army</div>
              </Link>
              <ul className="list-unstyled m-0 ms-1">
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Officer's</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Maverick Large</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">INOX</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Alliance</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Alliance XS</li>
                </Link>
              </ul>
              <Link
                className="justify-content-start mt-3 fw-bold"
                to="/omega/lines"
              >
                <div className="btn-content btn-nav">Omega</div>
              </Link>
              <ul className="list-unstyled m-0 ms-1">
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Speedmaster</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Constellation</li>
                </Link>
              </ul>
              <Link
                className="justify-content-start mt-3 fw-bold"
                to="/patek-philippe/lines"
              >
                <div className="btn-content btn-nav">Patek Philippe</div>
              </Link>
              <ul className="list-unstyled m-0 ms-1">
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Calatrava</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Nautilus</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#action1"
                >
                  <li className="btn-content btn-nav">Aquanaut</li>
                </Link>
              </ul>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;
