import { Container, Row, Col } from "react-bootstrap";
import "./Buy.css";
import ItemToBuy from "../components/ItemToBuy";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import truckCart from "../assets/truckCart.svg";
import creditCard from "../assets/creditCardCart.svg";
import shield from "../assets/shieldCart.svg";
import check from "../assets/check.svg";

function Buy({ setOrderAddress, setNumberPhone }) {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cart);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");

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

  return (
    <Container style={{ marginTop: "100px" }}>
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
                  type="country"
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
                  type="city"
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
                  type="address"
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
                  type="postalCode"
                  name="postalCode"
                  id="postalCode"
                  placeholder="Postal code"
                  required
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="d-flex flex-column justify-content-between align-items-end mt-4">
                <button className="buy-btn text-center" type="submit">
                  Continue to shipping - USD {totalPrice}
                </button>
              </div>
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
                <div className="d-flex justify-content-end">
                  <Link to={"/shop"} className="btn border-0">
                    <div className="btn-content">&larr; Return to Store</div>
                  </Link>
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
