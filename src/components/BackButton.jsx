import { Link, useNavigate } from "react-router-dom";
import "./BackButton.css";

function BackButton({ link, text, padding = "1rem" }) {
  const navigate = useNavigate();
  return (
    <div
      className="text-center back-container-btn"
      onClick={() => navigate(link)}
      style={{ paddingTop: padding }}
    >
      <div className="btn-kairos pointer ms-0">
        <div className="btn-kairos-content">&larr; Back to {text}</div>
      </div>
    </div>
  );
}

export default BackButton;
