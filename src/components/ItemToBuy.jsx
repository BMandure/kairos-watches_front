import "./ItemToBuy.css";
import deleteProduct from "../assets/delete.svg";

function ItemToBuy({ product }) {
  return (
    <div className="d-flex justify-content-between item-cart px-3 py-1">
      <div className="d-flex my-auto" style={{ width: "20%" }}>
        <div style={{ width: "100%" }} className="my-auto">
          <img
            src={`${import.meta.env.VITE_API_DOMAIN}/img/products/${
              product.image[0]
            }`}
            alt="product-img"
            className="img-fluid"
          />
        </div>
      </div>
      <div
        className="d-flex justify-content-between my-auto mx-3"
        style={{ width: "80%" }}
      >
        <div className="d-flex flex-column" style={{ minWidth: "50%" }}>
          <p className="m-0 fs-6 text-white">{product.brand.name}</p>
          <p className="m-0 fs-6 text-white">{product.line.name}</p>
          <p className="m-0 fs-6 text-white">{product.name}</p>
        </div>
        <div
          className="my-1 fs-5 text-white d-flex align-items-center"
          style={{ minWidth: "25%" }}
        >
          <span>x {product.qty} Uni.</span>
        </div>
        <div
          className="my-1 fs-5 text-white d-flex align-items-center justify-content-end"
          style={{ minWidth: "25%" }}
        >
          <span>USD {product.price * product.qty}</span>
        </div>
      </div>
      <img src={deleteProduct} alt="" className="" />
    </div>
  );
}

export default ItemToBuy;
