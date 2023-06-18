import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./BrandRight.css";

function BrandRight({ name, logo, description, imgs }) {
  return (
    <Container className="brandRight-container">
      <Row className="brandRight-row">
        <Col xs={12} lg={6}>
          <div className="brandRight-info">
            <img
              src={logo}
              alt={`${name} logo`}
              id="product3-logo"
              className="img-fluid brandRight-logo"
            />
            <p className="brandRight-description">{description}</p>

            <div>
              <button className="btn">View collections</button>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} className="brandRight-col">
          <Carousel
            fade
            controls={false}
            indicators={false}
            className="brandRight-carousel"
          >
            {imgs.map((img, i) => (
              <Carousel.Item key={i}>
                <div>
                  <img
                    className="brandRight-carousel-image img-fluid"
                    src={img}
                    alt=""
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default BrandRight;
