import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ArticleModal.css";

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
        size="lg"
      >
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        <Modal.Body>
          <img
            src="src/assets/CosmographDaytona.jpeg"
            alt="MER Image"
            className="w-100 h-100 border"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MERModal;
