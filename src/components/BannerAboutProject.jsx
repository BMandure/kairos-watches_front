import { Link } from "react-router-dom";
import "./BannerAboutProject.css";

function BannerAboutProject() {
  return (
    <div className="container-banner-project">
      <div className="about-project-brightness">
        <div className="about-project-content">
          <h2 className="about-project-title">ABOUT THE PROJECT</h2>
          <Link className="btn" to="/about">
            <div className="btn-content">SEE MORE</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerAboutProject;
