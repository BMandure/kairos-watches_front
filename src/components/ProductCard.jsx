import React from "react";
import "./ProductCard.css";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const handleAddToCart = () => {
    if (!cartState.some((p) => p.id === product.id)) {
      dispatch(addItem(product));
    } else {
      dispatch(deleteItem({ productId: product._id }));
    }
  };
  return (
    <>
      <Card className="product-card">
        <div className="container-img-featured">
          {product.trending && (
            <small className="rounded-pill d-inline mx-auto featured-pill mb-1">
              FEATURED
            </small>
          )}

          <button
            expand="true"
            className="btn-fast-add"
            onClick={handleAddToCart}
          >
            {cartState.some((p) => p.id === product.id) ? (
              <img
                src="src/assets/check.svg"
                alt=""
                className="img-product-add"
              />
            ) : (
              <img
                src="src/assets/add.svg"
                alt=""
                className="img-product-add"
              />
            )}
          </button>
          <Card.Img
            className="product-img"
            variant="top"
            src={`${import.meta.env.VITE_API_DOMAIN}/img/products/${
              product.image[0]
            }`}
          />
        </div>
        <Card.Body className="product-card-body">
          <Card.Title className="card-info">{`${product.brand.name} - ${product.line.name} ${product.name}`}</Card.Title>
          <Link className="btn" to={`/product/${product.slug}`}>
            <div className="btn-content">VIEW DETAILS</div>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
