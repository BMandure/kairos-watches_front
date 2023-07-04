import "./Sidemenu.css";
import { Link } from "react-router-dom";

function Sidemenu() {
  return (
    <>
      <div className="sidebar">
        <div className="d-flex flex-column align-items-start mx-5 link-sidebar-zone">
          <Link
            className="justify-content-start fw-bold btn-nav"
            to="/profile/user-info"
          >
            Personal Info
          </Link>{" "}
          <Link
            className="justify-content-start fw-bold btn-nav mt-3"
            to="/profile/orders"
          >
            My Orders
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
