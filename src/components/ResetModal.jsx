import axios from "axios";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ResetModal({ handleClose, show }) {
  const [statusMsg, setStatusMsg] = useState("");
  const handleReset = async () => {
    console.log("se va a hacer la llamada");
    const response = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_DOMAIN}/reset`,
    });

    setStatusMsg(response.data);

    console.log("se hizo la llamada");
    handleClose();
  };

  console.log(statusMsg);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="modal-content-style"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="modal-content-article "
        >
          <Modal.Title>Welcome to Kairos!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-article p-40">
          For a better experience you may want to reset the database.
        </Modal.Body>
        <Modal.Footer className="modal-content-article border-top-0">
          <div className="btn-kairos pointer" onClick={handleReset}>
            <div variant="primary" className="btn-kairos-content">
              Reset Database
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResetModal;
