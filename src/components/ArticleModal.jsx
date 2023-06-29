import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ArticleModal.css";

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
      <div className="btn-kairos pointer" onClick={handleCardClick}>
        <div className="btn-kairos-content">Read More</div>
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal-content-style"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="modal-content-article modal-header-article"
        >
          <img
            className="about-project-title-brand-modal"
            src={`${import.meta.env.VITE_API_DOMAIN}${article.modalPic}`}
            alt="brand-logo"
          />
        </Modal.Header>
        <Modal.Body className="modal-content-article">
          <video controls width="100%" height="auto">
            <source
              src={`${import.meta.env.VITE_API_DOMAIN}${article.video}`}
              type="video/mp4"
            />
          </video>
          <h3>{article.modalTitle}</h3>
          {article.content}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ArticleModal;
