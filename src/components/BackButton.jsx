import { Link, useNavigate } from "react-router-dom";
import "./BackButton.css";

function BackButton({ link, padding = "1rem" }) {
  const navigate = useNavigate();
  return (
    <div
      className="text-center back-container-btn mb-3"
      onClick={() => navigate(link)}
      style={{ paddingTop: padding }}
    >
      <div className="btn-kairos pointer ms-0">
        <div className="btn-kairos-content">
          <i className="bi bi-arrow-left"></i>
        </div>
      </div>
    </div>
  );
}

export default BackButton;
