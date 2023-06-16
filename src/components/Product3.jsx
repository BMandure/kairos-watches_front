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
                <div className="video-container-product3">
                  <video
                    autoPlay
                    loop
                    muted
                    className="carousel-video-element-product3"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={7} className="about-col-product3 d-flex flex-column py-3">
          <h2 className="about-intro-title-product3">
            <img src={logo} alt={`${name} logo`} id="product3-logo" />
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
