import { Container } from "react-bootstrap";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="container-banner container-fluid">
        <video autoPlay loop muted className="banner-video">
          <source src="src/assets/videoIntro.mov" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Banner;
