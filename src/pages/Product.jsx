import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import BackButton from "../components/BackButton";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState([]);
  const [filterBrand, setFilterBrand] = useState("");
  const navigate = useNavigate();
  const [productIndex, setProductIndex] = useState("");

  const [hoverFav, setHoverFav] = useState(false);
  const text = "Out of the project's scope";
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/product/${params.slug}`,
      });
      setFilterBrand(response.data.product.brand.id);
      setProduct(response.data.product);
    };
    getProduct();
  }, [params.slug]);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${
          import.meta.env.VITE_API_DOMAIN
        }/products?filterBrand=${filterBrand}`,
      });
      setProducts(response.data);
      if (product) {
        setProductIndex(response.data.findIndex((p) => p.id === product.id));
      }
    };
    getProducts();
  }, [product]);

  const handlePrevious = () => {
    const previousProduct = products[productIndex - 1];
    navigate(`/product/${previousProduct.slug}`);
  };

  const handleNext = () => {
    const nextProduct = products[productIndex + 1];
    navigate(`/product/${nextProduct.slug}`);
  };

  return (
    <>
      {product && (
        <div className="container product-container">
          <div className="row d-flex justify-content-center align-items-center mt-4 p-4 w-100">
            <div className="col-12 col-lg-6 p-4">
              <div className="back-style">
                <BackButton link="/shop" text="Shop" />
              </div>
              <div>
                <Carousel indicators={true}>
                  {product.image.map((img, i) => (
                    <Carousel.Item key={i} style={{ Width: "400px" }}>
                      <img
                        className="img-carousel"
                        src={`${
                          import.meta.env.VITE_SUPABASE_PRODUCTS_IMG_URL
                        }${img}`}
                        alt="Product Image"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-4 h-100 d-flex flex-column justify-content-between">
              <div className="bg-transparent text-light d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between ">
                  <button
                    disabled={productIndex === 0}
                    onClick={handlePrevious}
                    className="btn text-light"
                  >
                    &larr; Previous product
                  </button>
                  <button
                    disabled={productIndex === products.length - 1}
                    onClick={handleNext}
                    className="btn text-light"
                  >
                    Next product &rarr;
                  </button>
                </div>
                <h2 className="mt-2">{`${product.brand.name} ${product.line.name} ${product.name} - ${product.gender}`}</h2>
                <div className="list-group-flush col-5 product-list-group mt-2">
                  <h2>
                    <em>{`USD ${new Intl.NumberFormat("de-DE").format(
                      product.price
                    )}`}</em>
                  </h2>
                </div>
              </div>
              <div className="text-light">
                <div className="row">
                  <h4>Select your upgrades</h4>
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
              <div className="w-100 d-flex justify-content-between mt-2 align-items-center">
                {product.stock > 0 ? (
                  <button
                    expand="true"
                    className="btn-gray p-4 text-center w-100"
                    onClick={handleAddToCart}
                  >
                    <i className="bi bi-cart3 me-2"></i>{" "}
                    {cartState.some((p) => p.id === product.id)
                      ? "Already in Cart"
                      : "Add To Cart"}
                  </button>
                ) : (
                  <div className="w-100 coming-soon p-4">
                    Coming soon, stock available
                  </div>
                )}
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
