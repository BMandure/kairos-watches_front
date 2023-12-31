import "./Pay.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import ItemToBuy from "../components/ItemToBuy";
import mastecard from "../assets/mastercard.svg";
import visa from "../assets/visa.svg";
import paypal from "../assets/paypal.svg";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";

function Pay({ orderAddress, numberPhone }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const cartState = useSelector((state) => state.cart);
  const [fullname, setFullname] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [confirmation, setConfirmation] = useState(false);
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
      email: user.email,
      phone: numberPhone,
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
  };

  useEffect(() => {
    if (cartState.length === 0 && confirmation === false) {
      handleRedirect();
    }
  }, [cartState]);

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      {!confirmation ? (
        <>
          <div className="back-style">
            <BackButton link="/buy" />
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
            <Col className="">
              <div className="d-flex flex-column align-items-center">
                <form
                  className=""
                  onSubmit={(event) => (
                    setConfirmation(true),
                    handleSubmit(event),
                    dispatch(clearCart())
                  )}
                >
                  <div
                    className="mb-3 input-group"
                    controlid="exampleForm.ControlInput1"
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
                    controlid="exampleForm.ControlTextarea1"
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
                    controlid="exampleForm.ControlTextarea1"
                  >
                    <label className="w-100">Expiry Date / CVV</label>
                    <div className="d-flex justify-content-between w-100">
                      <input
                        type="month"
                        placeholder="12/25"
                        name="expiryDate"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(event) => setExpiryDate(event.target.value)}
                        className="w-75"
                        required
                      />
                      <input
                        type="number"
                        size="3"
                        max="999"
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
                    <i className="bi bi-cart3 me-2"></i>
                    Confirm Purchase
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-white mt-5">Thanks for your purchase!</h2>
          <p className="text-white mt-5">
            If you want to track your order you can{" "}
            <Link to={"/profile/orders"} className="text-decoration-underline">
              click here
            </Link>{" "}
            or{" "}
            <Link to={"/shop"} className="text-decoration-underline">
              continue shopping
            </Link>
          </p>
        </div>
      )}
    </Container>
  );
}

export default Pay;
