import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Product3.css";
import video2 from "../assets/maverick.mp4";
import video1 from "../assets/INOX.mp4";

function Product3() {
  return (
    <Container id="about-intro-container-product3">
      <Row className="about-row">
        <Col xs={5} className="about-col-product3">
          <Carousel fade controls={false} indicators={false}>
            <Carousel.Item className="carousel-item-product3">
              <video
                autoPlay
                loop
                muted
                className="carousel-video-element-product3"
              >
                <source src={video2} type="video/mp4" />
              </video>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-product3">
              <video
                autoPlay
                loop
                muted
                className="carousel-video-element-product3"
              >
                <source src={video1} type="video/mp4" />
              </video>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={7} className="about-col-product3 d-flex flex-column">
          <h2 className="about-intro-title-product3">
            Victorinox{" "}
            <img
              src="../src/assets/victorinoxLogo.png"
              alt="VictorinoxLogo"
              id="product3-victorinox-logo"
            ></img>
          </h2>
          <p className="about-intro-text-product3">
            Victorinox Swiss Army stands as a symbol of timeless sophistication,
            with its remarkable timepieces capturing the essence of enduring
            elegance. From their commitment to innovation in watchmaking to
            their dedication to precision and functionality, Victorinox Swiss
            Army watches inspire with their unwavering pursuit of excellence!
          </p>

          <div>
            <button>View collections</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Product3;
