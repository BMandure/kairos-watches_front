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
      <Container>
        <Row>
          {products.map((product) => (
            <Col xs={3} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Shop;
