import React from "react";
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
            <small className="rounded-pill d-inline mx-auto featured-pill mb-1">
              FEATURED
            </small>
          )}
          {product.stock > 0 && (
            <button
              expand="true"
              className="btn-fast-add"
              onClick={handleAddToCart}
            >
              {cartState.some((p) => p.id === product.id) ? (
                <img
                  src={`${
                    import.meta.env.VITE_REACT_APP_DOMAIN
                  }/src/assets/check.svg`}
                  alt=""
                  className="img-product-add"
                />
              ) : (
                <img
                  src={`${
                    import.meta.env.VITE_REACT_APP_DOMAIN
                  }/src/assets/add.svg`}
                  alt=""
                  className="img-product-add"
                />
              )}
            </button>
          )}

          <img
            className="brand-logo-product"
            src={`${import.meta.env.VITE_API_DOMAIN}${product.brand.logo}`}
            alt=""
          />

          <Card.Img
            className="product-img"
            variant="top"
            src={`${import.meta.env.VITE_API_DOMAIN}/img/products/${
              product.image[0]
            }`}
          />
        </div>
        <Card.Body className="product-card-body">
          <div className="card-info">{`${product.line.name} ${product.name}`}</div>
          {product.stock > 0 ? (
            <Link className="btn" to={`/product/${product.slug}`}>
              <div className="btn-content">VIEW DETAILS</div>
            </Link>
          ) : (
            <div className="out-of-stock">Coming soon</div>
          )}
        </Card.Body>
      </Card>
      <ToastContainer />
    </>
  );
}

export default ProductCard;
