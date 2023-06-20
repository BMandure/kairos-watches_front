import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./BrandRight.css";
import { Link } from "react-router-dom";

function BrandRight({ name, logo, description, imgs, link }) {
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

            <Link className="btn" to={link}>
              <div className="btn-content">View Collection</div>
            </Link>
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
