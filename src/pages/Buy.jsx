import { Container, Row, Col } from "react-bootstrap";
import "./Buy.css";
import ItemBuy from "../components/ItemToBuy";

function Cart() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <div className="d-flex justify-content-between">
        <div
          className="d-flex flex-wrap justify-content-around overflow-auto me-4"
          style={{ width: "50%", height: "90vh" }}
        >
          <ItemBuy />
          <ItemBuy />
          <ItemBuy />
          <ItemBuy />
          <ItemBuy />
          <ItemBuy />
          <ItemBuy />
          <ItemBuy />
          <ItemBuy />
        </div>

        <div className="mt-4 mb-5" style={{ width: "50%" }}>
          <div className="total-price-row d-flex justify-content-between mb-3">
            <span>Total:</span>
            <span>USD 1000</span>
          </div>
          <form action="">
            <div className="input-group">
              <label htmlFor="email" className="fs-4 my-3">
                Contact
              </label>
              <input type="email" name="email" id="email" placeholder="email" />
            </div>
            <p className="text-white fs-4 my-3">Shipping address</p>
            <div className="input-group my-3">
              <input
                type="country"
                name="country"
                id="country"
                placeholder="Country/Region"
              />
            </div>
            <div className="input-group my-3 d-flex justify-content-between">
              <input
                style={{ width: "48%" }}
                type="firstname"
                name="firstname"
                id="firstname"
                placeholder="Firstname"
              />
              <input
                style={{ width: "48%" }}
                type="lastname"
                name="lastname"
                id="lastname"
                placeholder="Lastname"
              />
            </div>
            <div className="input-group my-3">
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="input-group my-3">
              <input
                type="country"
                name="country"
                id="country"
                placeholder="Apartament/suite/etc. (optional)"
              />
            </div>
            <div className="input-group my-3 d-flex justify-content-between">
              <input
                style={{ width: "30%" }}
                type="postalCode"
                name="postalCode"
                id="postalCode"
                placeholder="Postal code"
              />
              <input
                style={{ width: "30%" }}
                type="city"
                name="city"
                id="city"
                placeholder="City"
              />
              <input
                style={{ width: "30%" }}
                type="region"
                name="region"
                id="region"
                placeholder="Region"
              />
            </div>
            <div className="input-group my-3">
              <input type="phone" name="phone" id="phone" placeholder="Phone" />
            </div>
            <div className="d-flex flex-column justify-content-between align-items-end">
              <button className="buy-btn">Continue to shipping</button>
              <span className="back-btn">← Return to store</span>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
