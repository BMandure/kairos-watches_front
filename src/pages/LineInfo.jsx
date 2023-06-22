import "./BrandInfo.css";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import ProductCard from "../components/ProductCard";
import CollectionCard from "../components/CollectionCard";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function LineInfo() {
  const params = useParams();
  const [line, setLine] = useState(null);

  const brandSlug = params.brand;
  const lineSlug = params.line;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getLine = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_DOMAIN}/line/${lineSlug}`,
      });
      setLine(response.data);
    };
    getLine();
  }, []);

  useEffect(() => {
    if (line) {
      const getProducts = async () => {
        const lineId = line[0]._id;
        const response = await axios({
          method: "GET",
          url: `${
            import.meta.env.VITE_APP_DOMAIN
          }/products?filterLine=${lineId}`,
        });
        setProducts(response.data);
      };
      getProducts();
    }
  }, [line]);

  return (
    line && (
      <>
        <div className="brand-info-container">
          <div className="background-logo-collections">
            <div className="brand-info-logo-container">
              <img
                className="brand-info-logo"
                src={`${import.meta.env.VITE_APP_DOMAIN}${line[0].brand.logo}`}
                alt="brand-logo"
              />
            </div>
            <h2 className="brand-info-subtitle">COLLECTIONS</h2>
          </div>
          <div className="collection-container-gap d-flex flex-column">
            <CollectionCard
              key={line._id}
              name={line.name}
              img={line.image}
              description={line.description}
            />
          </div>

          <div className="collection-container-gap d-flex flex-column">
            <Container className="shop-container">
              FILTER
              <Row>
                {products.map((product) => (
                  <Col
                    key={product.id}
                    xs={{ span: 10, offset: 1 }}
                    md={{ span: 6, offset: 0 }}
                    lg={{ span: 3, offset: 0 }}
                  >
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </>
    )
  );
}

export default LineInfo;
