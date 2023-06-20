import React from "react";
import "./ProductCard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <>
      <Card className="product-card">
        <div className="container-img-featured">
          {product.trending && (
            <small className="rounded-pill d-inline mx-auto featured-pill mb-1">
              FEATURED
            </small>
          )}
          <Card.Img
            className="product-img"
            variant="top"
            src={`${import.meta.env.VITE_APP_DOMAIN}/img/products/${
              product.image[0]
            }`}
          />
        </div>
        <Card.Body className="product-card-body">
          <Card.Title className="card-info">{`${product.brand.name} - ${product.line.name} ${product.name}`}</Card.Title>
          <Link to={`product/1`} className="product-card-button">
            VIEW DETAILS
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
