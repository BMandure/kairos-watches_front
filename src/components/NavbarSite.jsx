import "./NavbarSite.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import CloseButton from "react-bootstrap/CloseButton";

function NavbarSite() {
  const expand = false;
  return (
    <Navbar expand="false" className="fixed-top navbar-project">
      <NavbarToggle
        aria-controls="basic-navbar-nav"
        className="border border-0 ms-4 position-absolute"
      >
        <img
          src="../src/assets/list_hamburger_icon.svg"
          alt="navbar-icon"
          className="navbar-icon"
        />
      </NavbarToggle>
      <Container>
        <div className="mx-auto d-flex align-items-center">
          <Link
            className="mx-3 text-navbar-links fw-bold d-none d-lg-inline-block"
            href="#action1"
          >
            Rolex
          </Link>
          <Link
            className="mx-3 text-navbar-links fw-bold d-none d-lg-inline-block"
            href="#action1"
          >
            Victorinox Swiss Army
          </Link>

          <Navbar.Brand href="/" className=" mx-4 text-nabvar-brand">
            Kairos
          </Navbar.Brand>
          <Link
            className="mx-3 text-navbar-links fw-bold d-none d-lg-inline-block"
            href="#action1"
          >
            Omega
          </Link>
          <Link
            className="mx-3 text-navbar-links fw-bold d-none d-lg-inline-block"
            href="#action1"
          >
            Patek Philippe
          </Link>
        </div>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          className="offcanvas-project"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Navbar.Brand href="/" className="px-4 text-nabvar-brand m-auto">
            <img
              src="../src/assets/KAIROS.png"
              alt="logo marca"
              className="img-logo-kairos m-0 d-flex justify-content-end position-absolute bottom-0 end-0"
            />
          </Navbar.Brand>
          <Offcanvas.Body className="d-flex flex-column align-items-start mx-auto offcanvas-project">
            <Nav className="bg-transparent text-primary">
              <Link className="mx-4 text-navbar-links fw-bold" href="#action1">
                Rolex
              </Link>

              <ul className="mt-2 ">
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Submariner
                  </Link>
                </li>

                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Daytona
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Oyster
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    GMT-Master II
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Day-Date
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Pearlmaster
                  </Link>
                </li>
              </ul>

              <Link className="mx-4 text-navbar-links fw-bold" href="#action1">
                Victorinox Swiss Army
              </Link>
              <ul className="mt-1 ">
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Officer's
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Maverick Large
                  </Link>
                </li>

                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    INOX
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Alliance
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Alliance XS
                  </Link>
                </li>
              </ul>
              <Link className="mx-4 text-navbar-links fw-bold" href="#action1">
                Omega
              </Link>
              <ul className="mt-1 ">
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Speedmaster
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Constellation
                  </Link>
                </li>
              </ul>
              <Link className="mx-4 text-navbar-links fw-bold" href="#action1">
                Patek Philippe
              </Link>
              <ul className="mt-1 d-block ">
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Calatrava
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary ">
                  <Link className="mx-2 text-navbar-links " href="#action1">
                    Nautilus
                  </Link>
                </li>
                <li class="list-group-item bg-transparent text-primary">
                  <Link className="mx-2 text-navbar-links " href="#action1">
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
