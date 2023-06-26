import { Container, Row, Col } from "react-bootstrap";
import "./Buy.css";
import ItemToBuy from "../components/ItemToBuy";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cartState = useSelector((state) => state.cart);

  let totalPrice = 0;
  cartState.map(
    (product) => (totalPrice = totalPrice + product.price * product.qty)
  );

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="">
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
          <div className="mb-5">
            <form action="">
              <p className="text-white fs-5 mb-2">Shipping address</p>
              <div className="input-group">
                <input
                  type="country"
                  name="country"
                  id="country"
                  placeholder="Country/Region"
                  required
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="city"
                  name="city"
                  id="city"
                  placeholder="City"
                  required
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="address"
                  name="address"
                  id="address"
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
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="d-flex flex-column justify-content-between align-items-end mt-5">
                <button className="buy-btn">
                  Continue to shipping - USD {totalPrice}
                </button>
                <Link to={"/"}>
                  <span className="back-btn">← Return to store</span>
                </Link>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
