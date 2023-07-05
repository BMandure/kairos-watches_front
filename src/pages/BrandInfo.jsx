import "./BrandInfo.css";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import CollectionCard from "../components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";

import backgroundBrandInfo from "../assets/backgroundLogoCollections.jpeg";

import { Col, Row } from "react-bootstrap";

function BrandInfo() {
  const params = useParams();
  const [lines, setLines] = useState(null);
  const [render, setRender] = useState(0);

  const slug = params.brand;

  useEffect(() => {
    const getLines = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/lines?filterBrand=${slug}`,
      });
      setLines(response.data);
    };
    getLines();
  }, [slug]);

  return (
    lines && (
      <>
        <div className="brand-info-container">
          <div
            className="background-logo-collections"
            style={{ backgroundImage: `url(${backgroundBrandInfo})` }}
          >
            <div className="brand-info-logo-container">
              <img
                className="brand-info-logo"
                src={`${import.meta.env.VITE_SUPABASE_PRODUCTS_BRAND_URL}${
                  lines[0].brand.logo
                }`}
                alt="brand-logo"
              />
            </div>
            <h2 className="brand-info-subtitle">LINES</h2>
          </div>
          <div className="collection-container-gap d-flex flex-column">
            {lines.map((line) => (
              <CollectionCard
                key={line._id}
                name={line.name}
                img={line.image}
                slug={slug}
                lineSlug={line.slug}
              />
            ))}
          </div>
          <div>
            <h2 className="brand-info-subtitle">NEWS</h2>
            <Row className="mx-auto">
              {lines[0].brand.articles.map((article) => (
                <Col
                  key={article.id}
                  md={12}
                  lg={4}
                  className="d-flex justify-content-center"
                >
                  <ArticleCard article={article} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </>
    )
  );
}

export default BrandInfo;
