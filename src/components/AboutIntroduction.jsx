import { Container, Row, Col } from "react-bootstrap";

import "./AboutIntroduction.css";
import MERModal from "./MERModal";
import BackButton from "./BackButton";

function AboutIntroduction() {
  return (
    <Container className="about-intro-banner">
      <div className="back-style">
        <BackButton link="/" text={"Home"} />
      </div>
      <h2 className="about-intro-title p-0 px-4 mx-2">About The Project</h2>
      <Row className="mx-2 mt-4 text-center">
        <Col xs={12} className="about-col px-4">
          <div className="container-text">
            <p className="about-intro-text">
              <strong>Kairos</strong> is the result of an integrative project
              carried out during the Coding Bootcamp at Hack Academy, which
              involved more than 600 hours of practice over three months. The
              challenge was to create an e-commerce within a three-week time
              limit. We chose high-end watches as the category, and we took{" "}
              <strong>MAEN Watches'</strong> website as a reference.
            </p>
            <p className="about-intro-text">
              The architecture of this project consists of a front-end for the
              store, a front-end for administration and management, and a
              back-end server that connects to a database.
            </p>
          </div>
        </Col>
        <Col xs={12} className="about-col px-4">
          <p className="about-intro-text">
            Both the store and the administration page are{" "}
            <strong>Single Page Applications</strong> built with{" "}
            <strong>React</strong>, and we use a <strong>Redux</strong> store to
            save the user's shopping cart and access token. The front-end makes
            AJAX calls to the <strong>Node.js-based</strong> back-end using the{" "}
            <strong>Axios</strong> library, which then queries the{" "}
            <strong>MongoDB</strong> database using the Mongoose ODM. The
            database stores user information, including their orders,
            administrators, products, brands, lines, and colors. It allows for
            CRUD operations on products, lines, and administrators.
          </p>
          <p className="about-intro-text">
            We deployed the application using <strong>Vercel</strong>, stored
            images in <strong>Supabase</strong>, and hosted the database on{" "}
            <strong>Mongo DB Atlas</strong>.
          </p>
        </Col>
      </Row>

      <div className="w-100vw text-center">
        <MERModal />
      </div>
    </Container>
  );
}

export default AboutIntroduction;
