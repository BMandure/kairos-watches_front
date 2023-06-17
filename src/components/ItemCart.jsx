import "./itemCart.css";
import deleteProduct from "../assets/delete.svg";

function ItemCart() {
  return (
    <div className="position-relative">
      <div className="d-flex justify-content-between item-cart p-3">
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
          <p className="my-1 fs-5">Rolex Gmt II Master</p>
          <div className="d-flex justify-content-between my-1 border border-black w-75">
            <span className="px-3 border-end border-black fw-bold">-</span>
            <span className="px-3">1</span>
            <span className="px-3 border-start border-black fw-bold">+</span>
          </div>
          <span className="my-1 fs-5">USD 500</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
