import { Link } from "react-router-dom";
import "./SubBanner.css";

function SubBanner({ title, buttonText, link, img }) {
  return (
    <div
      className="container-banner-project"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="about-project-brightness">
        <div className="about-project-content">
          <div>
            <h2 className="about-project-title">{title}</h2>
            <Link className="btn" to={link}>
              <div className="btn-content">{buttonText}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubBanner;
