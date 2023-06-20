import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <Link className="btn">
        <div onClick={handleCardClick} className="btn-content">
          Read More
        </div>
      </Link>
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
          </video>
          <h3>{article.modalTitle}</h3>
          {article.content}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ArticleModal;
