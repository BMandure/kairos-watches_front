import React from "react";
import "./ProductCard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <>
      <Card className="product-card">
        <Card.Img
          className="product-img"
          variant="top"
          src={`${import.meta.env.VITE_APP_DOMAIN}/img/products/${
            product.image[0]
          }`}
        />
        <Card.Body>
          <Card.Title>{`${product.brand.name} - ${product.serie.name} ${product.name}`}</Card.Title>
          <Link className="product-card-button" variant="primary">
            View Product
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
