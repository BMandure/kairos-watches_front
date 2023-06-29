import "./Sidemenu.css";
import { Link } from "react-router-dom";

function Sidemenu() {
  return (
    <>
      <div className="sidebar">
        <div className="d-flex flex-column align-items-start mx-5 link-sidebar-zone">
          <Link className="justify-content-start fw-bold btn-nav" to="/orders">
            My orders
          </Link>
          <Link
            className="justify-content-start fw-bold mt-3 btn-nav"
            to="/profile/user-info"
          >
            My information
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
