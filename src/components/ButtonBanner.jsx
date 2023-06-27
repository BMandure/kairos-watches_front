import { Link } from "react-router-dom";
import "./ButtonBanner.css";

function ButtonBanner({ buttonText, link, img }) {
  return (
    <div
      className="container-banner-project"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="about-project-brightness">
        <div className="about-project-content">
          <Link className="btn-kairos" to={link}>
            <div className="btn-kairos-content button-banner-text">
              {buttonText}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ButtonBanner;
