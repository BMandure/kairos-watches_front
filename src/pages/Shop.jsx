import { useEffect, useState } from "react";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_DOMAIN}/products`,
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </>
  );
}

export default Shop;
