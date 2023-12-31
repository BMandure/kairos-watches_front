import { Container, Row, Col } from "react-bootstrap";
import "./Buy.css";
import ItemToBuy from "../components/ItemToBuy";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import truckCart from "../assets/truckCart.svg";
import creditCard from "../assets/creditCardCart.svg";
import shield from "../assets/shieldCart.svg";
import check from "../assets/check.svg";
import BackButton from "../components/BackButton";

function Buy({ setOrderAddress, setNumberPhone }) {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cart);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [redirect, setRedirect] = useState(false);

  let totalPrice = 0;
  cartState.map(
    (product) => (totalPrice = totalPrice + product.price * product.qty)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderAddress(`${address}, ${city}, ${country}`);
    setNumberPhone(number);
    navigate("/pay");
  };

  useEffect(() => {
    if (cartState.length === 0) {
      handleRedirect();
    }
  }, [cartState]);

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <div className="mx-5">
        <BackButton link="/shop" />
      </div>
      <Row>
        <Col lg={6}>
          <div
            className="flex-wrap overflow-auto me-4"
            style={{ height: "60vh" }}
          >
            {cartState.length > 0 &&
              cartState.map((product) => (
                <ItemToBuy key={product._id} product={product} />
              ))}
          </div>
        </Col>
        <Col lg={6}>
          <div className="h-100">
            <form
              className="h-100 d-flex flex-column justify-content-between"
              onSubmit={handleSubmit}
            >
              <p className="text-white fs-5 mb-2">Shipping address</p>
              <div className="input-group">
                <input
                  type="text"
                  name="country"
                  id="country"
                  onChange={(event) => setCountry(event.target.value)}
                  value={country}
                  placeholder="Country/Region"
                  required
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={(event) => setCity(event.target.value)}
                  value={city}
                  placeholder="City"
                  required
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={(event) => setAddress(event.target.value)}
                  value={address}
                  placeholder="Address"
                  required
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="number"
                  name="postalCode"
                  id="postalCode"
                  placeholder="Postal code"
                  required
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="d-flex flex-column justify-content-between align-items-end mt-4">
                <button
                  className="buy-btn py-3 text-center border-0"
                  type="submit"
                >
                  <i className="bi bi-cart3 me-2"></i>
                  Continue to payment - USD{" "}
                  {new Intl.NumberFormat("de-DE").format(totalPrice)}
                </button>
              </div>
              <div className="d-flex w-100 justify-content-between mt-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="info-cart-container-buy">
                    <div className="info-buy">
                      <img className="img-info" src={truckCart} alt="" />
                    </div>
                    <div className="info-buy">
                      <img className="img-info" src={creditCard} alt="" />
                    </div>
                    <div className="info-buy">
                      <img className="img-info" src={shield} alt="" />
                    </div>
                    <div className="info-buy">
                      <img className="img-info" src={check} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Buy;
