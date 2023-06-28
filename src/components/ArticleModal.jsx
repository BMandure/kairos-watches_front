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
      <Link className="btn-kairos">
        <div onClick={handleCardClick} className="btn-kairos-content">
          Read More
        </div>
      </Link>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal-content-style"
      >
        <Modal.Header closeButton closeVariant="white">
          <img
            className="about-project-title-brand-modal"
            src={`${import.meta.env.VITE_API_DOMAIN}${article.modalPic}`}
            alt="brand-logo"
          />
        </Modal.Header>
        <Modal.Body>
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
