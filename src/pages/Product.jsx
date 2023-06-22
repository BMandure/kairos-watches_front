import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [brand, setBrand] = useState(null);
  const [hoverFav, setHoverFav] = useState(false);
  const text = "Out of the project's scope";
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/product/${params.slug}`,
      });
      setProduct(response.data.product);
    };
    getProduct();
  }, []);
  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <>
      {product && (
        <div className="container product-container">
          <div className="row d-flex justify-content-center align-items-center mt-4 p-4">
            <div className="col-12 col-lg-6 p-4">
              <div>
                <Carousel indicators={true}>
                  {product.image.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img
                        className="w-100"
                        src={`${
                          import.meta.env.VITE_API_DOMAIN
                        }/img/products/${img}`}
                        alt="..."
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-4">
              <div className="bg-transparent text-light d-flex flex-column">
                <div className="d-flex justify-content-between ">
                  <Link to={`/product/slug`} className="change-product">
                    {" "}
                    &larr; Previous product{" "}
                  </Link>
                  <Link to={`/product/slug`} className="change-product">
                    {" "}
                    Next product &rarr;{" "}
                  </Link>
                </div>
                <h2 className="mt-2">{`${product.brand.name} ${product.line.name} ${product.name} - ${product.gender}`}</h2>
                <div className="list-group-flush col-5 product-list-group mt-2">
                  <h2>
                    <em>{`USD ${product.price}`}</em>
                  </h2>
                </div>
                <div>
                  <div className="row">
                    <h4 className="">Select your upgrades</h4>
                    <div className="col-sm-12 col-md-3 col-lg-12 border rounded m-2 pe-auto">
                      <Tooltip placement="top" title={text}>
                        <div className="form-check mt-2 mb-2">
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            <h4>Black Tropic Strap</h4>
                          </label>
                          <input
                            className="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <div>
                            <h5>USD 39.20</h5>
                          </div>
                        </div>
                      </Tooltip>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-12 border rounded  m-2 pe-auto">
                      <Tooltip placement="top" title={text}>
                        <div className="form-check mt-2 mb-2">
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            <h4>Grey Tropic Strap</h4>
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <div>
                            <h5>USD 39.20</h5>
                          </div>
                        </div>
                      </Tooltip>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-12 border rounded  m-2 pe-auto">
                      <Tooltip placement="top" title={text}>
                        <div className="form-check mt-2 mb-2">
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            <h4>Black Nato Strap</h4>
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <div>
                            <h5>USD 23.20</h5>
                          </div>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-between mt-2 align-items-center">
                <button
                  expand="true"
                  className="btn-gray p-4 text-center w-100"
                  onClick={handleAddToCart}
                >
                  <i className="bi bi-cart3 me-2"></i>Add To Cart
                </button>
                <div className="ms-4">
                  <i
                    className={`bi ${
                      hoverFav ? "bi-heart-fill" : "bi-heart"
                    } text-light heart`}
                    onMouseEnter={() => setHoverFav(true)}
                    onMouseLeave={() => setHoverFav(false)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
