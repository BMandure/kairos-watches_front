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
        className="d-flex justify-content-around my-auto"
        style={{ width: "80%" }}
      >
        <p className="my-1 fs-5 text-white">{`${product.brand.name} ${product.line.name} ${product.name}`}</p>
        <span className="my-1 fs-5 text-white">{product.price}</span>
        <img src={deleteProduct} alt="" />
      </div>
    </div>
  );
}

export default ItemToBuy;
