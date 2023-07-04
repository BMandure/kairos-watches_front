import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";
import "./Wishlist.css";

function Wishlist() {
  const user = useSelector((state) => state.user);
  return (
    <>
      {" "}
      <Container className="shop-container">
        <Row className="shop-row"></Row>
      </Container>
    </>
  );
}

export default Wishlist;
