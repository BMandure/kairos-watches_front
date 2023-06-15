import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Product2.css";
import img from "../assets/Datejust-everose.png";
import img2 from "../assets/submarinerGreen.jpeg";
import img3 from "../assets/watch-city.jpeg";
import img4 from "../assets/batman.jpeg";
import img5 from "../assets/about5.jpg";
import img6 from "../assets/oysterGold.png";

function Product2() {
  return (
    <div className="about-intro-container-product2">
      <Container className="">
        <Row className="about-row">
          <Col xs={7} className="about-col d-flex flex-column">
            <h2 className="about-intro-title">
              Rolex{" "}
              <img
                src="../src/assets/rolexcrown.png"
                alt="RolexCrown"
                id="product2-rolex-crown"
              ></img>
            </h2>
            <p className="about-intro-text">
              Rolex stands as an emblem of timeless sophistication, with the
              Submariner as its crowning jewel. From its commitment to
              innovation in watchmaking to its partnerships in the realm of
              sports, Rolex continues to inspire with its unwavering pursuit of
              excellence.
            </p>

            <div>
              <button>View collections</button>
            </div>
          </Col>
          <Col xs={5} className="about-col">
            <Carousel fade controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="about-intro-img"
                  src={img}
                  alt="about the project intro"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="about-intro-img"
                  src={img2}
                  alt="about the project intro"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="about-intro-img"
                  src={img3}
                  alt="about the project intro"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="about-intro-img"
                  src={img4}
                  alt="about the project intro"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="about-intro-img"
                  src={img5}
                  alt="about the project intro"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="about-intro-img"
                  src={img6}
                  alt="about the project intro"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product2;
