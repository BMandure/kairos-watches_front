import { Container } from "react-bootstrap";
import "./Banner.css";
import Plyr from "plyr";
import { useEffect, useRef } from "react";

function Banner() {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current, {
      controls: [],
      clickToPlay: false,
      keyboard: false,
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <>
      <div className="container-banner container-fluid">
        <video autoPlay loop muted playsInline className="banner-video">
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
