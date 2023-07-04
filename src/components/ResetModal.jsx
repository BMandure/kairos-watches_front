import axios from "axios";
import Modal from "react-bootstrap/Modal";

function ResetModal({ handleShow, handleClose, show }) {
  const handleReset = () => {
    const resetDB = async () => {
      await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/reset`,
      });
      console.log("se corrio el reset");
      handleClose();
    };
    resetDB();
  };

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
          <Modal.Title>Welcome to Karios!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-article p-40">
          For a better experience you may want to reset the database.
        </Modal.Body>
        <Modal.Footer className="modal-content-article border-top-0">
          <div className="btn-kairos pointer">
            <div
              variant="primary"
              className="btn-kairos-content"
              onClick={handleReset}
            >
              Reset Database
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResetModal;
