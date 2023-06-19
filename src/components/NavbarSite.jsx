import "./NavbarSite.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import NavbarToggle from "react-bootstrap/NavbarToggle";
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
            <Link className="btn d-none d-lg-inline-block ">
              <div className="btn-content">Rolex</div>
            </Link>
            <Link className="btn d-none d-lg-inline-block ">
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
            <Link className="btn d-none d-lg-inline-block ">
              <div className="btn-content">Omega</div>
            </Link>
            <Link className="btn d-none d-lg-inline-block ">
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
          <Offcanvas.Header closeButton closeVariant="white"></Offcanvas.Header>
          <Navbar.Brand className="px-4 text-nabvar-brand m-auto">
            <Link to="/" className="text-nabvar-brand">
              Kairos
            </Link>
          </Navbar.Brand>
          <Offcanvas.Body className="d-flex flex-column align-items-start mx-auto offcanvas-project p-0">
            <Nav className="text-primary">
              <Link className="btn m-4 fw-bold" to="/about">
                <div className="btn-content">ABOUT THE PROJECT</div>
              </Link>
              <Link className="btn mx-4 fw-bold" to="#action1">
                <div className="btn-content">Rolex</div>
              </Link>
              <ul className="mt-1 px-5 pb-5">
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Submariner</div>
                  </Link>
                </li>

                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Daytona</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Oyster</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">GMT-Master II</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Day-Date</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Pearlmaster</div>
                  </Link>
                </li>
              </ul>

              <Link className="btn mx-4 fw-bold" to="#action1">
                <div className="btn-content">Victorinox Swiss Army</div>
              </Link>
              <ul className="mt-1 px-5 pb-5">
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Officer's</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Maverick Large</div>
                  </Link>
                </li>

                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">INOX</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Alliance</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Alliance XS</div>
                  </Link>
                </li>
              </ul>

              <Link className="btn mx-4 fw-bold" to="#action1">
                <div className="btn-content">Omega</div>
              </Link>
              <ul className="mt-1 px-5 pb-5">
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Speedmaster</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Constellation</div>
                  </Link>
                </li>
              </ul>

              <Link className="btn mx-4 fw-bold" to="#action1">
                <div className="btn-content">Patek Philippe</div>
              </Link>
              <ul className="mt-1 px-5 pb-5">
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Calatrava</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary ">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Nautilus</div>
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link
                    className="btn mx-2 d-flex justify-content-center"
                    to="#action1"
                  >
                    <div className="btn-content">Aquanaut</div>
                  </Link>
                </li>
              </ul>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;
