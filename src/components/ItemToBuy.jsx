import "./ItemToBuy.css";
import deleteBtn from "../assets/delete.svg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function ItemBuy() {
  return (
    <Card
      className="m-4"
      style={{
        width: "18rem",
        backgroundColor: "transparent",
        border: "1px solid white",
        borderRadius: "0px",
      }}
    >
      <Card.Img
        variant="top"
        src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-de-ville-tresor-42818396003001-l.png"
      />
      <Card.Body>
        <Card.Title className="text-white">Omega Watch</Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-between fs-5 text-white">
            <span>1 Unidad</span>
            <span>USD 500</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    /*     <div className="p-4 w-75 mx-auto my-2 item-cart-container">
        <div className="d-flex align-items-center">
          <img
            src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-de-ville-tresor-42818396003001-l.png"
            alt=""
            className="item-cart-img"
          />
          <p className="ms-5 item-cart-name">
            Victorinox Swiss Army - Maverick Large - Green and Gold
          </p>
        </div>
        <p className="item-price">USD 500</p>
        <span className="btn-delete-item">
          <img src={deleteBtn} alt="" />
        </span>
      </div> */
  );
}

export default ItemBuy;
