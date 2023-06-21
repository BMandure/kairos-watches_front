import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./BrandLeft.css";
import { Link } from "react-router-dom";

function BrandLeft({ name, logo, description, videos }) {
  return (
    <Container className="brandLeft-container">
      <Row className="brandLeft-row">
        <Col xs={12} lg={6} className="brandLeft-col">
          <Carousel fade controls={false} indicators={false}>
            {videos.map((video, i) => (
              <Carousel.Item key={i}>
                <div>
                  <video
                    autoPlay
                    loop
                    muted
                    className="brandLeft-carousel-video"
                  >
                    <source
                      src={`${import.meta.env.VITE_APP_DOMAIN}${video}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} lg={6}>
          <div className="brandLeft-info">
            <img
              src={`${import.meta.env.VITE_APP_DOMAIN}${logo}`}
              alt={`${name} logo`}
              id="brandLeft-logo"
              className="img-fluid brandLeft-logo"
            />
            <p className="brandLeft-description">{description}</p>

            <Link className="btn">
              <div className="btn-content">View Collection</div>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BrandLeft;
