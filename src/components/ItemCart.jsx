import "./itemCart.css";
import deleteProduct from "../assets/delete.svg";
import add from "../assets/add.svg";
import rest from "../assets/rest.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addItemQty,
  deleteItem,
  restItemQty,
} from "../redux/cartSlice";

function ItemCart({ product }) {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteItem({ productId: product._id }));
  };

  const handleAddQty = () => {
    dispatch(addItemQty({ productId: product._id }));
  };

  const handleRestQty = () => {
    dispatch(restItemQty({ productId: product._id }));
  };

  return (
    <div className="position-relative ">
      <div className="d-flex justify-content-between item-cart px-3 py-1">
        <div className="position-absolute top-0 end-0 pe-2 pt-2">
          <img
            src={deleteProduct}
            alt=""
            onClick={handleDeleteProduct}
            role="button"
          />
        </div>
        <div className="img-item-cart-container">
          <img
            src={`${import.meta.env.VITE_API_DOMAIN}/img/products/${
              product.image[0]
            }`}
            alt=""
            className="img-item-cart"
          />
        </div>
        <div className="d-flex flex-column my-auto" style={{ width: "60%" }}>
          <p className="my-1 fs-6 text-white">{`${product.brand.name} ${product.line.name} ${product.name}`}</p>
          <div className="d-flex w-75 text-white m-0">
            <p className="btn-quantity">
              <img
                src={rest}
                alt="-1 product quantity"
                role="button"
                onClick={handleRestQty}
              />
            </p>
            <p className="my-auto ms-3">{product.qty}</p>
            <p className="btn-quantity ms-3">
              <img
                src={add}
                alt="+1 product quantity"
                role="button"
                onClick={handleAddQty}
              />
            </p>
          </div>
          <span className="my-1 fs-5 text-white">
            USD {product.price * product.qty}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
