import axios from "axios";
import Modal from "react-bootstrap/Modal";

function ResetModal({ handleClose, show }) {
  const handleReset = async () => {
    console.log("se va a hacer la llamada");
    await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_DOMAIN}/reset`,
    });
    console.log("se hizo la llamada");
  };
  console.log(`${import.meta.env.VITE_API_DOMAIN}/reset`);
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
