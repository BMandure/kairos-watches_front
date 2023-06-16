import "./ItemCart.css";
import deleteBtn from "../assets/delete.svg";

function ItemCart() {
  return (
    <div className="p-4 w-75 mx-auto my-2 item-cart-container">
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
    </div>
  );
}

export default ItemCart;
