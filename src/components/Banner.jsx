import { Container } from "react-bootstrap";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="container-banner container-fluid">
        <video autoPlay loop muted className="banner-video">
          <source
            src="https://anbfiejogykibxgfpofg.supabase.co/storage/v1/object/public/media/video/home/videoIntro.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default Banner;
