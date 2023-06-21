import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function Shop() {
  const [products, setProducts] = useState([]);
  const filter = "";
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_DOMAIN}/products?filter=${filter}`,
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Container className="shop-container">
        FILTER
        <Row>
          {products.map((product) => (
            <Col xs={3}>
              {console.log(product)}
              <ProductCard key={product.id} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Shop;
