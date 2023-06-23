import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import cart from "../assets/cart.svg";
import truckCart from "../assets/truckCart.svg";
import creditCard from "../assets/creditCardCart.svg";
import shield from "../assets/shieldCart.svg";
import check from "../assets/check.svg";

import ItemCart from "./ItemCart";

import "./Cart.css";

function Cart() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let total = 0;

  return (
    <>
      <span
        variant="primary"
        onClick={handleShow}
        className="cart-btn z-3 slide-in-blurred-top"
      >
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
            {cartState.map(
              (item, i) => (
                (total = total + item.price),
                (
                  <>
                    <ItemCart key={i} product={item} />
                    <hr
                      style={{
                        height: "2px",
                        backgroundColor: "#454545",
                        border: "none",
                        margin: "0 40px",
                      }}
                    />
                  </>
                )
              )
            )}
          </div>
          <div
            className="bg-black d-flex flex-column justify-content-around align-items-center py-3"
            style={{ height: "30%" }}
          >
            <Link to={"/buy"} className="text-black mx-auto w-75">
              <button expand="true" className="btn-gray p-4 text-center w-100">
                <i className="bi bi-cart3 me-2"></i>
                <span className="px-2">Checkout</span>
                <span className="px-2">USD {total}</span>
              </button>
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
