import React, { useState } from "react";
import "./ProductCard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const notifyAdd = () =>
    toast.success("Product Added to Cart", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyRemove = () =>
    toast.error("Product Removed from Cart", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleAddToCart = () => {
    if (!cartState.some((p) => p.id === product.id)) {
      notifyAdd();
      dispatch(addItem(product));
    } else {
      notifyRemove();
      dispatch(deleteItem({ productId: product._id }));
    }
  };
  return (
    <>
      <Card className="product-card">
        <div className="container-img-featured">
          {product.trending && (
            <i className="bi bi-bookmark-star fs-4 text-secondary icon-bookmark"></i>
          )}{" "}
          {product.stock > 0 && (
            <Link className="btn-fast-add" to={`/product/${product.slug}`}>
              <i className={"bi bi-search text-secondary fs-4"}></i>
            </Link>
          )}
          <Card.Img
            className="product-img"
            variant="top"
            src={`${import.meta.env.VITE_SUPABASE_PRODUCTS_IMG_URL}${
              product.image[0]
            }`}
          />
        </div>
        <Card.Body className="product-card-body">
          <div className="card-info">
            <p>{`${product.line.name} ${product.name}`}</p>
          </div>

          {cartState.some((p) => p.id === product.id) ? (
            <div
              className="btn-add-cart"
              to={`/product/${product.slug}`}
              onClick={handleAddToCart}
            >
              <div className="btn-kairos-content">ALREADY IN CART</div>
            </div>
          ) : (
            <div
              className="btn-add-cart"
              to={`/product/${product.slug}`}
              onClick={handleAddToCart}
            >
              <div className="btn-kairos-content">ADD TO CART</div>
            </div>
          )}
        </Card.Body>
      </Card>
      <ToastContainer />
    </>
  );
}

export default ProductCard;
