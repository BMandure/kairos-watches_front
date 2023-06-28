import "./NavbarSite.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/userSlice";

import deleteIcon from "../assets/delete.svg";
import { NavDropdown } from "react-bootstrap";

function NavbarSite() {
  const user = useSelector((state) => state.user);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  function handleLogout() {
    dispatch(removeToken());

    navigate("/");
  }
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
          <div className="nav-brand">
            <Navbar.Brand>
              <Link to="/" className="text-nabvar-brand">
                Kairos
              </Link>
            </Navbar.Brand>
          </div>
        </div>
        <div className="login-container me-4">
          {user === null ? (
            <Link to={"/login"} className="btn-kairos">
              <div className="btn-kairos-content">Login</div>
            </Link>
          ) : (
            <NavDropdown
              className="text-white"
              id="nav-dropdown-dark-example"
              drop="down-centered"
              title={
                <i class="bi bi-person-fill dropdown-style">
                  {"  "}
                  {`${user.firstname} ${user.lastname}`}
                </i>
              }
              menuVariant="dark"
            >
              <NavDropdown.Item href="">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </div>

        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleToggleOffcanvas}
          id={`offcanvasNavbar-expand-${showOffcanvas}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${showOffcanvas}`}
          placement="start"
          className="offcanvas-project"
        >
          <Offcanvas.Header
            closeButton
            data-bs-theme="dark"
            className="pt-2 pb-0 px-4 offcanvas-header"
          >
            <span className="offcanvas-brand">KAIROS</span>
          </Offcanvas.Header>

          <Offcanvas.Body className="d-flex flex-column align-items-start mx-5 p-0">
            <Nav className="text-primary">
              <Link
                className="justify-content-start fw-bold mt-3"
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
                  to="/rolex/lines/submariner"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Submariner</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="/rolex/lines/daytona"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Daytona</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="/rolex/lines/oyster"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Oyster</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="/rolex/lines/gmt-master-II"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">GMT-Master II</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="/rolex/lines/day-date"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Day-Date</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="pearlmaster"
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
                  to="/victorinox-swiss-army/lines/officers"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Officer's</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start"
                  to="/victorinox-swiss-army/lines/mavericks-large"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Maverick Large</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="/victorinox-swiss-army/lines/inox"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">INOX</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="/victorinox-swiss-army/lines/alliance"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Alliance</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="/victorinox-swiss-army/lines/alliance-xs"
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
                  to="/omega/lines/speedmaster"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Speedmaster</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="/omega/lines/constellation"
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
                  to="/patek-philippe/lines/calatrava"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Calatrava</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="/patek-philippe/lines/nautilus"
                  onClick={() => handleToggleOffcanvas()}
                >
                  <li className="btn-content btn-nav">Nautilus</li>
                </Link>
                <Link
                  className="border-0 mx-2 d-flex justify-content-start "
                  to="/patek-philippe/lines/aquanaut"
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
