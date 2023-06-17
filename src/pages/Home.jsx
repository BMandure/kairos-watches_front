import React from "react";
import Product3 from "../components/Product3";
import Product2 from "../components/Product2";
import Product1 from "../components/Product1";

import rolex1 from "../assets/Datejust-everose.png";
import rolex2 from "../assets/submarinerGreen.jpeg";
import rolex3 from "../assets/watch-city.jpeg";
import rolex5 from "../assets/about5.jpg";
import rolex6 from "../assets/oysterGold.png";
import rolexLogo from "../assets/Rolex.svg";

import victorinox2 from "../assets/maverick.mp4";
import victorinox1 from "../assets/INOX.mp4";
import victorinoxLogo from "../assets/Victorinox_Logo.svg";

import omega1 from "../assets/omegaVintage.jpeg";
import omega3 from "../assets/omegaRedBlue.jpeg";
import omega4 from "../assets/omegaDark.jpeg";
import omega5 from "../assets/about3.jpg";
import omega6 from "../assets/omegaVintage.jpeg";

import omegaLogo from "../assets/Omega_Logo.svg";

import patekLogo from "../assets/patek-philippe-sa-logo.svg";
import patek1 from "../assets/patek1.mp4";
import patek2 from "../assets/patek2.mp4";

function Home() {
  const imgRolex = [rolex1, rolex2, rolex3, rolex5, rolex6];
  const descRolex =
    "Rolex stands as an emblem of timeless sophistication, with the Submariner as its crowning jewel. From its commitment to innovation in watchmaking to its partnerships in the realm of sports, Rolex continues to inspire with its unwavering pursuit of excellence.";

  const victorinoxVideos = [victorinox1, victorinox2];
  const descVictorinox =
    "Victorinox Swiss Army stands as a symbol of timeless sophistication, with its remarkable timepieces capturing the essence of enduring elegance. From their commitment to innovation in watchmaking to their dedication to precision and functionality, Victorinox Swiss Army watches inspire with their unwavering pursuit of excellence!";

  const imgOmega = [omega1, omega3, omega4, omega5, omega6];

  const descOmega =
    "Omega, a true icon of refined sophistication, embodies unparalleled elegance and prestige, with the Seamaster proudly standing as its crowning achievement. Through an unwavering commitment to pushing the boundaries of horological craftsmanship and forging extraordinary partnerships in the realm of athletics, Omega stands as a timeless source of inspiration, ceaselessly pursuing perfection.";

  const descPatek =
    "Patek Philippe exudes an aura of timeless elegance, with the Calatrava as its dazzling masterpiece. From its unwavering dedication to pioneering craftsmanship to its prestigious collaborations in the world of horology, Patek Philippe remains an unrivaled source of inspiration, ceaselessly striving for perfection.";

  const patekVideos = [patek1, patek2];

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
        name="Omega"
        description={descOmega}
        imgs={imgOmega}
        logo={omegaLogo}
      />
      <Product3
        name="Patek Philippe"
        description={descPatek}
        logo={patekLogo}
        videos={patekVideos}
      />
    </div>
  );
}

export default Home;
