import "./BrandInfo.css";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import CollectionCard from "../components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";

function LineInfo() {
  const params = useParams();
  const [line, setLine] = useState(null);

  const brandSlug = params.brand;
  const lineSlug = params.line;

  useEffect(() => {
    const getLine = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_DOMAIN}/${brandSlug}/lines`,
      });
      setLine(response.data);
      console.log(response.data);
    };
    getLine();
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_DOMAIN}/products?filter=${filterLine}`,
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    lines && (
      <>
        <div className="brand-info-container">
          <div className="background-logo-collections">
            <div className="brand-info-logo-container">
              <img
                className="brand-info-logo"
                src={`${import.meta.env.VITE_APP_DOMAIN}${lines[0].brand.logo}`}
                alt="brand-logo"
              />
            </div>
            <h2 className="brand-info-subtitle">COLLECTIONS</h2>
          </div>
          <div className="collection-container-gap d-flex flex-column">
            {lines.map((line) => (
              <CollectionCard
                key={line._id}
                name={line.name}
                img={line.image}
                description={line.description}
              />
            ))}
          </div>

          <div className="collection-container-gap d-flex flex-column">
            <Container className="shop-container">
              FILTER
              <Row>
                {products.map((product) => (
                  <Col
                    xs={{ span: 10, offset: 1 }}
                    md={{ span: 6, offset: 0 }}
                    lg={{ span: 3, offset: 0 }}
                  >
                    <ProductCard key={product.id} product={product} />
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
