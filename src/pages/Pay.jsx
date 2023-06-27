import "./Pay.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

import mastecard from "../assets/mastercard.svg";
import visa from "../assets/visa.svg";
import paypal from "../assets/paypal.svg";

function Pay({ orderAddress }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cartState = useSelector((state) => state.cart);
  const [fullname, setFullname] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  let cart = [];
  cartState.map((product) =>
    cart.push({
      id: product.id,
      brand: product.brand.name,
      line: product.line.name,
      color: product.color.map((color) => color.name),
      name: product.name,
      gender: product.gender,
      price: product.price,
      slug: product.slug,
      qty: product.qty,
    })
  );

  let total = 0;
  cart.map((product) => (total = total + product.price * product.qty));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      fullname: fullname,
      order: cart,
      status: "Pending",
      address: orderAddress,
      totalPrice: total,
    };
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_DOMAIN}/api/user/order`,
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `bearer ${user.token}`,
      },
    });

    setFullname("");
    setNumberCard("");
    setExpiryDate("");
    setCvv("");
    return console.log("La orden fue enviada.");
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col className="">
          <div className="d-flex flex-column align-items-center">
            <form
              className=""
              onSubmit={(event) => (handleSubmit(event), dispatch(clearCart()))}
            >
              <div
                className="mb-3 input-group"
                controlId="exampleForm.ControlInput1"
              >
                <label>Card holder full name</label>
                <input
                  type="text"
                  placeholder="FULLNAME"
                  name="fullname"
                  id="fullname"
                  value={fullname}
                  onChange={(event) =>
                    setFullname(event.target.value.toUpperCase())
                  }
                  required
                />
              </div>
              <div
                className="mb-3 input-group"
                controlId="exampleForm.ControlTextarea1"
              >
                <label>Card number</label>
                <input
                  type="number"
                  name="numberCard"
                  id="numberCard"
                  value={numberCard}
                  onChange={(event) => setNumberCard(event.target.value)}
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </div>
              <div
                className="mb-3 input-group"
                controlId="exampleForm.ControlTextarea1"
              >
                <label className="w-100">Expiry Date / CVV</label>
                <div className="d-flex justify-content-between w-100">
                  <input
                    type="text"
                    placeholder="00/00"
                    name="expiryDate"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(event) => setExpiryDate(event.target.value)}
                    className="w-75 "
                    required
                  />
                  <input
                    type="text"
                    placeholder="000"
                    name="cvv"
                    id="cvv"
                    value={cvv}
                    onChange={(event) => setCvv(event.target.value)}
                    className="w-25 ms-3"
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between w-50 mb-3">
                <span>
                  <img src={visa} alt="" />
                </span>
                <span>
                  <img src={mastecard} alt="" />
                </span>
                <span>
                  <img src={paypal} alt="" />
                </span>
              </div>
              <button className="buy-btn" type="submit">
                Checkout
              </button>
              {cartState.length === 0 && (
                <p className="text-success text-center bg-success bg-opacity-25 py-1 mt-3 border border-success">
                  Your order has been successfully sent.{" "}
                  <Link
                    to={"/"}
                    className="text-success text-decoration-underline"
                  >
                    Click to return.
                  </Link>
                </p>
              )}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Pay;
