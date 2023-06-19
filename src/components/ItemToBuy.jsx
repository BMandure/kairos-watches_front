import "./ItemToBuy.css";
import deleteBtn from "../assets/delete.svg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

import deleteProduct from "../assets/delete.svg";
import rest from "../assets/rest.svg";
import add from "../assets/add.svg";

function ItemBuy() {
  return (
    <div className="position-relative">
      <div className="d-flex justify-content-between item-cart px-3 py-1">
        <div className="d-flex my-auto" style={{ width: "20%" }}>
          <div style={{ width: "100%" }} className="my-auto">
            <img
              src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-de-ville-tresor-42818396003001-l.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-around my-auto"
          style={{ width: "80%" }}
        >
          <p className="my-1 fs-5 text-white">Rolex Gmt II Master</p>
          <span className="my-1 fs-5 text-white">USD 500</span>
          <img src={deleteProduct} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ItemBuy;
