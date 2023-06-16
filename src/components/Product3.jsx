import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Product3.css";

function Product3({ name, logo, description, videos }) {
  return (
    <Container id="about-intro-container-product3">
      <Row className="product3-row">
        <Col xs={5} className="about-col-product3 my-auto">
          <Carousel fade controls={false} indicators={false}>
            {videos.map((video, i) => (
              <Carousel.Item className="carousel-item-product3 my-auto" key={i}>
                <video
                  autoPlay
                  loop
                  muted
                  className="carousel-video-element-product3"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={7} className="about-col-product3 d-flex flex-column p-4">
          <h2 className="about-intro-title-product3">
            {name}
            <img
              src={logo}
              alt={`${name} logo`}
              id="product3-victorinox-logo"
            />
          </h2>
          <p className="about-intro-text-product3">{description}</p>

          <div>
            <button>View collections</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Product3;
