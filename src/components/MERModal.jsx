import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./MERModal.css";

import merImg from "../assets/mer.png";

function MERModal() {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="btn-kairos pointer" onClick={handleCardClick}>
        <div className="btn-kairos-content">VIEW MER</div>
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal-content-style"
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="modal-content-article border-bottom-0"
        >
          MER
        </Modal.Header>
        <Modal.Body className="modal-content-article">
          <img src={merImg} alt="MER Image" className="w-100 h-100 border" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MERModal;
