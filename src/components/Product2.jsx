import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Product2.css";

function Product2({ name, logo, description, imgs }) {
  return (
    <Container id="about-intro-container-product2">
      <Row className="about-row">
        <Col xs={6} className="about-col-product2 d-flex flex-column">
          <h2 className="about-intro-title-product2 w-50 py-0">
            <img
              src={logo}
              alt={`${name} logo`}
              id="product2-logo"
              className="img-fluid py-0"
            ></img>
          </h2>
          <p className="about-intro-text-product2">{description}</p>

          <div>
            <button>View collections</button>
          </div>
        </Col>
        <Col xs={6} className="about-col-product2">
          <Carousel fade controls={false} indicators={false}>
            {imgs.map((item, i) => (
              <Carousel.Item key={i}>
                <img
                  className="about-intro-img-product2"
                  src={item}
                  alt="about the project intro"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Product2;
