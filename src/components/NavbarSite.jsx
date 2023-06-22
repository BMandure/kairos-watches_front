import "./NavbarSite.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { CloseButton } from "react-bootstrap";
import { useState } from "react";

function NavbarSite() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <Navbar expand="false" className="navbar-project">
      <NavbarToggle
        aria-controls="basic-navbar-nav"
        className="border border-0 p-0 position-absolute ms-4"
        onClick={handleToggleOffcanvas}
      >
        <img
          src={`${
            import.meta.env.VITE_REACT_APP_DOMAIN
          }/list_hamburger_icon.svg`}
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
          show={showOffcanvas}
          onHide={handleToggleOffcanvas}
          id={`offcanvasNavbar-expand-${showOffcanvas}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${showOffcanvas}`}
          placement="start"
          className="offcanvas-project"
        >
          <span className="offcanvas-brand d-md-none mt-5 ms-4">KAIROS</span>
          <CloseButton
            onClick={handleToggleOffcanvas}
            variant="white"
            className="m-3 position-absolute top-0 left-0"
          />
          <Offcanvas.Body className="d-flex flex-column align-items-start mx-5 offcanvas-project p-0">
            <Nav className="text-primary">
              <Link
                className="justify-content-start fw-bold mt-4 "
                to="/about"
                onClick={() => handleToggleOffcanvas()}
              >
                <div className="btn-content btn-nav">ABOUT THE PROJECT</div>
              </Link>
              <Link
                className="justify-content-start fw-bold mt-3"
                to="/shop"
                onClick={() => handleToggleOffcanvas()}
              >
                <div className="btn-content btn-nav">VIEW ALL WATCHES</div>
              </Link>
              <Link
                className="justify-content-start mt-3 fw-bold"
                to="/rolex/lines"
                onClick={() => handleToggleOffcanvas()}
              >
                <div className="btn-content btn-nav">Rolex</div>
              </Link>
              <ul className="list-unstyled m-0 ms-1">
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Submariner</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Daytona</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Oyster</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">GMT-Master II</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Day-Date</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Pearlmaster</li>
                </Link>
              </ul>
              <Link
                className="justify-content-start mt-3 fw-bold"
                to="/victorinox-swiss-army/lines"
                onClick={() => handleToggleOffcanvas()}
              >
                <div className="btn-content btn-nav">Victorinox Swiss Army</div>
              </Link>
              <ul className="list-unstyled m-0 ms-1">
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Officer's</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Maverick Large</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">INOX</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Alliance</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Alliance XS</li>
                </Link>
              </ul>
              <Link
                className="justify-content-start mt-3 fw-bold"
                to="/omega/lines"
                onClick={() => handleToggleOffcanvas()}
              >
                <div className="btn-content btn-nav">Omega</div>
              </Link>
              <ul className="list-unstyled m-0 ms-1">
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Speedmaster</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Constellation</li>
                </Link>
              </ul>
              <Link
                className="justify-content-start mt-3 fw-bold"
                to="/patek-philippe/lines"
                onClick={() => handleToggleOffcanvas()}
              >
                <div className="btn-content btn-nav">Patek Philippe</div>
              </Link>
              <ul className="list-unstyled m-0 ms-1">
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Calatrava</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Nautilus</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="#"
                  onClick={() => handleToggleOffcanvas()}
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
