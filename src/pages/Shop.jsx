import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

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
      <div className="shop-carousel">
        <Carousel indicators={false} className="shop-carousel-container">
          {products &&
            products.map(
              (product) =>
                product.trending && (
                  <Carousel.Item key={product.id}>
                    <img
                      className="carousel-img"
                      src={`${import.meta.env.VITE_APP_DOMAIN}/img/products/${
                        product.image[0]
                      }`}
                      alt={`${product}'s image`}
                    />
                  </Carousel.Item>
                )
            )}
        </Carousel>
      </div>
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
