import { Container, Row, Col } from "react-bootstrap";
import "./Buy.css";
import ItemToBuy from "../components/ItemToBuy";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cartState = useSelector((state) => state.cart);

  const prices = cartState.map((product) => product.price);
  const totalPrice = prices.reduce((a, b) => a + b, 0);

  return (
    <Container style={{ marginTop: "100px", height: "55vh" }}>
      <div className="d-flex justify-content-between">
        <div
          className="flex-wrap  overflow-auto me-4"
          style={{ width: "50%", height: "60vh" }}
        >
          {cartState.length > 0 &&
            cartState.map((product) => (
              <ItemToBuy key={product._id} product={product} />
            ))}
        </div>

        <div className="mt-4 mb-5" style={{ width: "50%" }}>
          <form action="">
            <p className="text-white fs-5 my-2">Shipping address</p>
            <div className="input-group">
              <input
                type="country"
                name="country"
                id="country"
                placeholder="Country/Region"
              />
            </div>
            <div className="input-group mt-2">
              <input type="city" name="city" id="city" placeholder="City" />
            </div>
            <div className="input-group mt-2">
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="input-group mt-2">
              <input
                type="postalCode"
                name="postalCode"
                id="postalCode"
                placeholder="Postal code"
              />
            </div>
            <div className="input-group mt-2">
              <input type="phone" name="phone" id="phone" placeholder="Phone" />
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
      </div>
    </Container>
  );
}

export default Cart;
