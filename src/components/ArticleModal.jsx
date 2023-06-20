import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ArticleModal({ article }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleCardClick} className="btn">
        View More
      </button>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal-content-style"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              className="about-project-title-brand-modal"
              src={article.modalPic}
              alt="brand-logo"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video controls width="100%" height="auto">
            <source src={article.video} type="video/mp4" />
            {/* Add more <source> tags here if you want to support other video formats */}
            Your browser does not support video playback.
          </video>
          <h3>{article.modalTitle}</h3>
          {article.modalContent}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ArticleModal;
