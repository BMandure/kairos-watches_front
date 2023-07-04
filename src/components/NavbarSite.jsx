import "./NavbarSite.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/userSlice";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";

function NavbarSite({ handleShow }) {
  const user = useSelector((state) => state.user);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [brands, setBrands] = useState(null);
  const [lines, setLines] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  function handleLogout() {
    dispatch(removeToken());

    navigate("/");
  }

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/brands`,
      });
      setBrands(response.data);
    };

    const getLines = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/lines`,
      });
      setLines(response.data);
    };

    getBrands();
    getLines();
  }, []);

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
        <div className="login-container">
          {user === null ? (
            <Link to={"/login"} className="btn-kairos">
              <div className="btn-kairos-content">Login</div>
            </Link>
          ) : (
            <div className="d-flex align-items-center justify-content-center gap-2">
              <NavDropdown
                className="text-white"
                id="nav-dropdown-dark-example"
                drop="down-centered"
                title={
                  <>
                    <span className="text-white me-2 d-none d-sm-inline">
                      {user.firstname} {user.lastname}
                    </span>
                    <i className="bi bi-person-fill dropdown-style  text-light"></i>
                  </>
                }
              >
                <NavDropdown.Item disabled className="text-black d-sm-none">
                  {user.firstname} {user.lastname}
                </NavDropdown.Item>
                <NavDropdown.Divider className="d-sm-none" />
                <div className="dropdown-menu-profile">
                  <Link to="/profile/user-info" className="text-black border-0">
                    My profile
                  </Link>

                  <Link
                    to="/"
                    className="text-black border-0"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </div>
              </NavDropdown>
            </div>
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
              {brands &&
                brands.map((brand) => (
                  <div key={brand.id} className="mt-3">
                    <Link
                      className="justify-content-start mt-3 fw-bold"
                      to={`/${brand.slug}/lines`}
                      onClick={() => handleToggleOffcanvas()}
                    >
                      <div className="btn-content btn-nav">{brand.name}</div>
                    </Link>
                    <ul className="list-unstyled m-0 ms-1">
                      {lines &&
                        lines.map(
                          (line) =>
                            line.brand.id === brand.id && (
                              <Link
                                key={line.id}
                                className="border-0 mx-2 d-flex justify-content-start"
                                to={`/${brand.slug}/lines/${line.slug}`}
                                onClick={() => handleToggleOffcanvas()}
                              >
                                <li className="btn-content btn-nav">
                                  {line.name}
                                </li>
                              </Link>
                            )
                        )}
                    </ul>
                  </div>
                ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;
