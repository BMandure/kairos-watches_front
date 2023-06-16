import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container>
        <Row>
          {products.map((product, i) => (
            <Col xs={3}>
              <ProductCard key={i} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Shop;
