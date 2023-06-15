import { Container, Row, Col, Carousel } from "react-bootstrap";

import tech from "../assets/tech.jpg";
import bootstrap from "../assets/bootstrap.svg";
import github from "../assets/github.svg";
import js from "../assets/js.svg";
import mongoDB from "../assets/mongoDB.svg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import supabase from "../assets/supabase-custom.svg";
import vercel from "../assets/vercel.svg";

function AboutTechnologies() {
  return (
    <Container className="about-intro-container">
      <Row className="about-row">
        <Col xs={5} className="about-col">
          <img
            className="about-intro-img"
            src={tech}
            alt="about the project - introduction"
          />
        </Col>
        <Col xs={7} className="about-col d-flex flex-column  p-5">
          <h2 className="about-intro-title">Used Technologies</h2>
          <div className="tech-container">
            <div className="technology-card">
              <img
                className="tech-img"
                src={bootstrap}
                alt="tech-bootstrap-icon"
              />
              Bootstrap
            </div>
            <div className="technology-card">
              <img className="tech-img" src={github} alt="tech-github-icon" />
              GitHub
            </div>
            <div className="technology-card">
              <img className="tech-img" src={js} alt="tech-js-icon" />
              JavaScript
            </div>
            <div className="technology-card">
              <img className="tech-img" src={mongoDB} alt="tech-mongoDB-icon" />
              MongoDB
            </div>
            <div className="technology-card">
              <img className="tech-img" src={node} alt="tech-node-icon" />
              Node
            </div>
          </div>
          <div className="tech-container">
            <div className="technology-card">
              <img className="tech-img" src={react} alt="tech-react-icon" />
              React
            </div>
            <div className="technology-card">
              <img className="tech-img" src={redux} alt="tech-redux-icon" />
              Redux
            </div>
            <div className="technology-card">
              <img
                className="tech-img"
                src={supabase}
                alt="tech-supabase-icon"
              />
              Supabase
            </div>
            <div className="technology-card">
              <img className="tech-img" src={vercel} alt="tech-vercel-icon" />
              Vercel
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutTechnologies;
