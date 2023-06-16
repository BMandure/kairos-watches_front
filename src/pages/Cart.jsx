import { Container, Row } from "react-bootstrap";
import ItemCart from "../components/ItemCart";
import "./Cart.css";

function Cart() {
  return (
    <Container>
      <Row>
        <p className="my-cart w-75 mx-auto px-0 pt-4">My Cart:</p>
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </Row>

      <Row>
        <div className="w-75 mx-auto mt-3 px-4 total-price-row">
          <span>Total:</span>
          <span>USD 1000</span>
        </div>
      </Row>

      <Row>
        <div className="w-75 mx-auto d-flex justify-content-end mt-3">
          <span className="buy-btn px-4 py-1">Buy</span>
        </div>
      </Row>
    </Container>
  );
}

export default Cart;
