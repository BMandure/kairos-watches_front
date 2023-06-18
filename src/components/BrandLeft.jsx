import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./BrandLeft.css";

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
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} lg={6}>
          <div className="brandLeft-info">
            <img
              src={logo}
              alt={`${name} logo`}
              id="brandLeft-logo"
              className="img-fluid brandLeft-logo"
            />
            <p className="brandLeft-description">{description}</p>

            <div>
              <button className="btn">View collections</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BrandLeft;
