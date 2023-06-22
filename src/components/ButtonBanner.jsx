import { Link } from "react-router-dom";
import "./ButtonBanner.css";

function SubBanner({ buttonText, link, img }) {
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
            <Link className="btn" to={link}>
              <div className="btn-content button-banner-text">{buttonText}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubBanner;
