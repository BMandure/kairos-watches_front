import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Product.css";

function Product() {
  return (
    <>
      <div className="product-general-container">
        <Card className="main-product-container">
          <div className="col-3 product-card-img-cont">
            <img
              className="product-card-img"
              src="../src/assets/omegaDark.jpeg"
              alt="..."
            />
          </div>
          <Card.Body className="col-4 product-card-body">
            <h2 className="product-card-text">Nombre Producto</h2>
            <Card.Text className="product-card-text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, dolorum? Ducimus, illo facilis. Voluptas similique
              minima sapiente molestiae natus. Pariatur labore sequi nisi
              aspernatur nobis impedit, neque doloremque adipisci ab architecto
              recusandae provident, ad expedita eum modi omnis, sed dolore culpa
              est. Voluptas dolores recusandae dolorum esse, soluta, corrupti a
              magnam debitis natus non accusamus! Enim dolor consequatur modi
              dicta.
            </Card.Text>
            <ListGroup className="list-group-flush col-5 product-list-group">
              <h2>USD 1300</h2>
              <h4>Add to Card</h4>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Product;
