import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link } from "react-router-dom";

import cart from "../assets/cart.svg";
import truckCart from "../assets/truckCart.svg";
import creditCard from "../assets/creditCardCart.svg";
import shield from "../assets/shieldCart.svg";
import check from "../assets/check.svg";

import ItemCart from "./ItemCart";

import "./cart.css";

function Cart() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <span variant="primary" onClick={handleShow} className="cart-btn z-3">
        <img src={cart} alt="" />
      </span>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="offcanvas-header"
        >
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="overflow-auto bg-black" style={{ height: "70%" }}>
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
          </div>
          <div
            className="bg-black d-flex flex-column justify-content-around align-items-center py-3"
            style={{ height: "30%" }}
          >
            <Link to={"/buy"} className="text-black mx-auto w-75">
              <div className="w-100 bg-white p-3 d-flex justify-content-center fw-bold fs-5">
                <img src={cart} alt="" className="px-2" />
                <span className="px-2">Checkout</span>
                <span className="px-2">USD 1000</span>
              </div>
            </Link>
            <div className="info-cart-container">
              <div className="info-cart">
                <img src={truckCart} alt="" />
                <span className="ms-2">Kairos Insured Shipping</span>
              </div>
              <div className="info-cart">
                <img src={creditCard} alt="" />
                <span className="ms-2">Safe payments</span>
              </div>
              <div className="info-cart">
                <img src={shield} alt="" />
                <span className="ms-2">Two year warranty</span>
              </div>
              <div className="info-cart">
                <img src={check} alt="" />
                <span className="ms-2">Free shipping worldwide</span>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
