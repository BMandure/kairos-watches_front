import "./NavbarSite.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Button from "react-bootstrap/Button";
import cart from "../assets/cart.svg";

function NavbarSite() {
  const expand = false;
  return (
    <Navbar expand="false" className="fixed-top navbar-project">
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
              className="mx-3 text-navbar-links  d-none d-lg-inline-block"
              to="#action1"
            >
              Rolex
            </Link>
            <Link
              className="mx-3 text-navbar-links  d-none d-lg-inline-block"
              to="#action1"
            >
              Victorinox
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
              className="mx-3 text-navbar-links  d-none d-lg-inline-block"
              to="#action1"
            >
              Omega
            </Link>
            <Link
              className="mx-3 text-navbar-links  d-none d-lg-inline-block"
              to="#action1"
            >
              Patek Philippe
            </Link>
          </div>
        </div>
        <div className="login-container">
          <Link to={"/cart"}>
            <span className="me-3">
              <img src={cart} alt="" />
            </span>
          </Link>
          <Link to={"/login"} className="text-navbar-links">
            Login
          </Link>
        </div>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          className="offcanvas-project"
        >
          <Offcanvas.Header closeButton closeVariant="white"></Offcanvas.Header>
          <Navbar.Brand to="/" className="px-4 text-nabvar-brand m-auto">
            Kairos
          </Navbar.Brand>
          <Offcanvas.Body className="d-flex flex-column align-items-start mx-auto offcanvas-project p-0">
            <Nav className="bg-transparent text-primary">
              <Link className="m-4 text-navbar-links fw-bold" to="/about">
                ABOUT THE PROJECT
              </Link>
              <Link className="mx-4 text-navbar-links fw-bold" to="#action1">
                Rolex
              </Link>
              <ul className="mt-1 ">
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Submariner
                  </Link>
                </li>

                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Daytona
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Oyster
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    GMT-Master II
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Day-Date
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Pearlmaster
                  </Link>
                </li>
              </ul>

              <Link className="mx-4 text-navbar-links fw-bold" to="#action1">
                Victorinox Swiss Army
              </Link>
              <ul className="mt-1 ">
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Officer's
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Maverick Large
                  </Link>
                </li>

                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    INOX
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Alliance
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Alliance XS
                  </Link>
                </li>
              </ul>

              <Link className="mx-4 text-navbar-links fw-bold" to="#action1">
                Omega
              </Link>
              <ul className="mt-1 ">
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Speedmaster
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Constellation
                  </Link>
                </li>
              </ul>

              <Link className="mx-4 text-navbar-links fw-bold" to="#action1">
                Patek Philippe
              </Link>
              <ul className="mt-1 d-block ">
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Calatrava
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary ">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Nautilus
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " to="#action1">
                    Aquanaut
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
