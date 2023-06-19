import "./itemCart.css";
import deleteProduct from "../assets/delete.svg";
import add from "../assets/add.svg";
import rest from "../assets/rest.svg";

function ItemCart() {
  return (
    <div className="position-relative">
      <div className="d-flex justify-content-between item-cart px-3 py-1">
        <div className="position-absolute top-0 end-0">
          <img src={deleteProduct} alt="" />
        </div>
        <div className="d-flex my-auto" style={{ width: "40%" }}>
          <div style={{ width: "100%" }} className="my-auto">
            <img
              src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-de-ville-tresor-42818396003001-l.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="d-flex flex-column my-auto" style={{ width: "60%" }}>
          <p className="my-1 fs-6 text-white">Rolex Gmt II Master</p>
          <div className="d-flex w-75 text-white m-0">
            <p className="btn-quantity">
              <img src={rest} alt="-1 product quantity" />
            </p>
            <p className="my-auto ms-3">1</p>
            <p className="btn-quantity ms-3">
              <img src={add} alt="+1 product quantity" />
            </p>
          </div>
          <span className="my-1 fs-5 text-white">USD 500</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
