import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ModalOrder.css";

function ModalOrder({ products, order }) {
  const loggedAdmin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notifyError = () =>
    toast.error("Out of the scope of the project", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const handleOnClick = () => {
    notifyError();
  };

  return (
    <>
      <span className="view-order" onClick={handleShow}>
        View order
      </span>

      <Modal
        centered
        dialogClassName="modal-90w"
        show={show}
        onHide={handleClose}
        size={"xl"}
      >
        <Modal.Header closeButton closeVariant={"white"} className="modal-bg">
          <Modal.Title className="text-white">
            {`Order ID: #${order.id}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-bg">
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex flex-column">
              <span className="text-white">Fullname: {order.fullname}</span>
              <span className="text-white">Address: {order.address}</span>
            </div>
            <div className="d-flex flex-column">
              <span className="text-white">Email: {order.email}</span>
              <span className="text-white">Phone: {order.phone}</span>
            </div>
          </div>

          <table className="table table-dark table-hover text-center mt-4">
            <thead>
              <tr>
                <th scope="col" className="bg-header">
                  ID
                </th>
                <th scope="col" className="bg-header">
                  Product
                </th>
                <th scope="col" className="bg-header">
                  Color
                </th>
                <th scope="col" className="bg-header">
                  Gender
                </th>
                <th scope="col" className="bg-header">
                  Quantity
                </th>
                <th scope="col" className="bg-header">
                  Unit price
                </th>
                <th scope="col" className="bg-header">
                  Total price
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td scope="row">{product.id}</td>
                  <td>
                    {product.brand}-{product.line}-{product.name}
                  </td>
                  <td>
                    {product.color.map((color, i) => (
                      <span key={i}>{color}, </span>
                    ))}
                  </td>

                  <td>{product.gender}</td>
                  <td>{product.qty}</td>
                  <td>USD {product.price}</td>
                  <td>USD {product.price * product.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between fs-4 ">
            <div className="w-25"></div>
            <p className="my-auto text-white">Total: USD {order.totalPrice}</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-bg d-flex justify-content-end">
          <div
            className="btn-kairos float-end my-3 mx-2 pointer"
            onClick={handleClose}
          >
            <div className="btn-kairos-content">Close</div>
          </div>
          <div
            className="btn-kairos float-end my-3 mx-2 pointer"
            onClick={handleOnClick}
          >
            <div className="btn-kairos-content">Print</div>
          </div>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default ModalOrder;
