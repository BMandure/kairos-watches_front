import { Link } from "react-router-dom";
import "./BannerAboutProject.css";

function BannerAboutProject() {
  return (
    <div className="container-banner-project">
      <div className="about-project-brightness">
        ABOUT THE PROJECT <Link className="btn">SEE MORE</Link>
      </div>
    </div>
  );
}

export default BannerAboutProject;
