import "./itemCart.css";
import deleteProduct from "../assets/delete.svg";
import add from "../assets/add.svg";
import rest from "../assets/rest.svg";

function ItemCart({ product }) {
  console.log(product);
  return (
    <div className="position-relative">
      <div className="d-flex justify-content-between item-cart px-3 py-1">
        <div className="position-absolute top-0 end-0">
          <img src={deleteProduct} alt="" />
        </div>
        <div className="d-flex my-auto" style={{ width: "40%" }}>
          <div style={{ width: "100%" }} className="my-auto">
            <img
              src={`${import.meta.env.VITE_APP_DOMAIN}/img/products/${
                product.product.image[0]
              }`}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="d-flex flex-column my-auto" style={{ width: "60%" }}>
          <p className="my-1 fs-6 text-white">{`${product.product.brand.name} ${product.product.line.name} ${product.product.name}`}</p>
          <div className="d-flex w-75 text-white m-0">
            <p className="btn-quantity">
              <img src={rest} alt="-1 product quantity" />
            </p>
            <p className="my-auto ms-3">1</p>
            <p className="btn-quantity ms-3">
              <img src={add} alt="+1 product quantity" />
            </p>
          </div>
          <span className="my-1 fs-5 text-white">
            USD {product.product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
