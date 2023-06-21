//Components
import BrandLeft from "../components/BrandLeft";
import BrandRight from "../components/BrandRight";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import SubBanner from "../components/SubBanner";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_DOMAIN}/brands`,
      });
      setBrands(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <SubBanner
        title="ABOUT THE PROJECT"
        buttonText="SEE MORE"
        link="/about"
      />
      <SubBanner
        title="VIEW ALL WATCHES"
        buttonText="MORE"
        link="/shop"
        img="src/assets/banner.png"
      />
      {brands && (
        <>
          <BrandRight
            name={brands[0].name}
            description={brands[0].description}
            imgs={brands[0].image}
            logo={brands[0].logo}
            link="/collections/rolex"
          />

          <BrandLeft
            name={brands[1].name}
            description={brands[1].description}
            logo={brands[1].logo}
            videos={brands[1].video}
            link="/collections/victorinox"
          />

          <BrandRight
            name={brands[3].name}
            description={brands[3].description}
            imgs={brands[3].image}
            logo={brands[3].logo}
            link="/collections/omega"
          />

          <BrandLeft
            name={brands[2].name}
            description={brands[2].description}
            logo={brands[2].logo}
            videos={brands[2].video}
            link="/collections/patek-philippe"
          />
        </>
      )}
      <Cart />
    </div>
  );
}

export default Home;
