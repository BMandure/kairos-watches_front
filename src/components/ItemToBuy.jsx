import "./ItemToBuyStyles.css";
import deleteProduct from "../assets/delete.svg";

import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/cartSlice";

function ItemToBuy({ product }) {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteItem({ productId: product._id }));
  };

  return (
    <>
      <div className="d-flex justify-content-between item-cart px-3 py-1">
        <div
          className="d-flex my-auto"
          style={{ width: "25%", padding: "1rem" }}
        >
          <div style={{ width: "100%" }} className="my-auto">
            <img
              src={`${import.meta.env.VITE_SUPABASE_PRODUCTS_IMG_URL}${
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
            <span>
              USD{" "}
              {new Intl.NumberFormat("de-DE").format(
                product.price * product.qty
              )}
            </span>
          </div>
        </div>
        <div className=" pe-3 pt-2">
          <i
            className="bi bi-trash3 fs-6 text-secondary"
            onClick={handleDeleteProduct}
            role="button"
          ></i>
        </div>
      </div>
      <hr
        style={{
          height: "2px",
          backgroundColor: "#454545",
          border: "none",
          margin: "0 40px",
        }}
      />
    </>
  );
}

export default ItemToBuy;
