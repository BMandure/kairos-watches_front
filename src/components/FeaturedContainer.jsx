import axios from "axios";
import "./FeaturedContainer.css";
import ProductCard from "./ProductCard.jsx";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";

function FeaturedContainer() {
  const [trending, setTrending] = useState([]);
  const [items, setItems] = useState([]);
  const [render, setRender] = useState(0);

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
    1024: { items: 4 },
  };

  useEffect(() => {
    const getTrendings = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/products`,
      });
      const responseFiltered = response.data.filter(
        (product) => product.trending === true
      );
      responseFiltered.map((product, i) =>
        setItems((prevItems) => [
          ...prevItems,
          <ProductCard key={i} product={product} data-value={i} />,
        ])
      );
    };
    getTrendings();
  }, []);
  return (
    <div className="featured-container">
      <p className="featured-title">FEATURED PRODUCTS</p>
      <AliceCarousel
        autoPlay={true}
        autoPlayInterval={3000}
        disableDotsControls
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite={true}
      />
    </div>
  );
}

export default FeaturedContainer;
