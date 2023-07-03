import axios from "axios";
import Modal from "react-bootstrap/Modal";

function ResetModal({ show, handleClose }) {
  const handleReset = () => {
    const resetDB = async () => {
      await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/reset`,
      });
    };
    resetDB();
    handleClose();
  };

  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        className="modal-content-style"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="modal-content-article border-bottom-0"
        >
          <Modal.Title>Welcome to Kairos Watches!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-article border-bottom-0">
          For a better experience you may want to reset the database.
          <div
            className="btn-kairos pointer mt-4 w-100 text-center"
            onClick={handleReset}
          >
            <div className="btn-kairos-content">Reset</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ResetModal;
