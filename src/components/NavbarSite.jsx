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

function NavbarSite() {
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
                      {lines.map(
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
