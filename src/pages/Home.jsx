//Components
import BrandLeft from "../components/BrandLeft";
import BrandRight from "../components/BrandRight";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import SubBanner from "../components/SubBanner";

//Data
import {
  descOmega,
  descPatek,
  descRolex,
  descVictorinox,
  imgOmega,
  imgRolex,
  videosPatek,
  videosVictorinox,
} from "../db";

//Logos
import victorinoxLogo from "../assets/Victorinox_Logo.svg";
import rolexLogo from "../assets/Rolex.svg";
import omegaLogo from "../assets/Omega_Logo.svg";
import patekLogo from "../assets/patek-philippe-sa-logo.svg";

function Home() {
  return (
    <div>
      <Banner />
      <SubBanner
        title="ABOUT THE PROJECT"
        buttonText="SEE MORE"
        link="/about"
      />
      <SubBanner
        title="ALL WATCHES"
        buttonText="SEE CATALOGUE"
        link="/shop"
        img="src/assets/banner.png"
      />
      <BrandRight
        name="Rolex"
        description={descRolex}
        imgs={imgRolex}
        logo={rolexLogo}
        link="/collections/rolex"
      />
      <BrandLeft
        name="Victorinox"
        description={descVictorinox}
        logo={victorinoxLogo}
        videos={videosVictorinox}
        link="/collections/victorinox"
      />
      <BrandRight
        name="Omega"
        description={descOmega}
        imgs={imgOmega}
        logo={omegaLogo}
        link="/collections/omega"
      />
      <BrandLeft
        name="Patek Philippe"
        description={descPatek}
        logo={patekLogo}
        videos={videosPatek}
        link="/collections/patek-philippe"
      />

      <Cart />
    </div>
  );
}

export default Home;
