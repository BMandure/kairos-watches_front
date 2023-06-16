import React from "react";
import Product3 from "../components/Product3";
import Product2 from "../components/Product2";
import Product1 from "../components/Product1";

import rolex1 from "../assets/Datejust-everose.png";
import rolex2 from "../assets/submarinerGreen.jpeg";
import rolex3 from "../assets/watch-city.jpeg";
import rolex4 from "../assets/batman.jpeg";
import rolex5 from "../assets/about5.jpg";
import rolex6 from "../assets/oysterGold.png";

import rolexLogo from "../assets/rolexcrown.png";

import victorinox2 from "../assets/maverick.mp4";
import victorinox1 from "../assets/INOX.mp4";
import victorinoxLogo from "../assets/victorinoxLogo.png";

function Home() {
  const imgRolex = [rolex1, rolex2, rolex3, rolex4, rolex5, rolex6];
  const descRolex =
    "Rolex stands as an emblem of timeless sophistication, with the Submariner as its crowning jewel. From its commitment to innovation in watchmaking to its partnerships in the realm of sports, Rolex continues to inspire with its unwavering pursuit of excellence.";

  const victorinoxVideos = [victorinox1, victorinox2];
  const descVictorinox =
    "Victorinox Swiss Army stands as a symbol of timeless sophistication, with its remarkable timepieces capturing the essence of enduring elegance. From their commitment to innovation in watchmaking to their dedication to precision and functionality, Victorinox Swiss Army watches inspire with their unwavering pursuit of excellence!";

  return (
    <div>
      <Product1 />
      <Product2
        name="Rolex"
        description={descRolex}
        imgs={imgRolex}
        logo={rolexLogo}
      />
      <Product3
        name="Victorinox"
        description={descVictorinox}
        logo={victorinoxLogo}
        videos={victorinoxVideos}
      />
      <Product2
        name="Patek Philippe"
        description={descRolex}
        imgs={imgRolex}
        logo={rolexLogo}
      />
      <Product3
        name="Omega"
        description={descVictorinox}
        logo={victorinoxLogo}
        videos={victorinoxVideos}
      />
    </div>
  );
}

export default Home;
