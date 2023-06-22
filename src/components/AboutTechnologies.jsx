import { Container, Row, Col, Carousel } from "react-bootstrap";

import "./AboutTechnologies.css";
import bootstrap from "../assets/bootstrap.svg";
import github from "../assets/githubWhite.svg";
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
      <div>
        <div className="about-tech-col">
          <h2 className="about-tech-title p-0 px-4 mx-2">Technologies</h2>
          <Row className="about-tech-row mt-4 vw-55 mx-auto">
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img
                  className="tech-img"
                  src={bootstrap}
                  alt="tech-bootstrap-icon"
                />
                Bootstrap
              </div>
            </Col>
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img className="tech-img" src={github} alt="tech-github-icon" />
                GitHub
              </div>
            </Col>
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img className="tech-img" src={js} alt="tech-js-icon" />
                JavaScript
              </div>
            </Col>
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img
                  className="tech-img"
                  src={mongoDB}
                  alt="tech-mongoDB-icon"
                />
                MongoDB
              </div>
            </Col>
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img className="tech-img" src={node} alt="tech-node-icon" />
                Node
              </div>
            </Col>
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img className="tech-img" src={react} alt="tech-react-icon" />
                React
              </div>
            </Col>
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img className="tech-img" src={redux} alt="tech-redux-icon" />
                Redux
              </div>
            </Col>
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img
                  className="tech-img"
                  src={supabase}
                  alt="tech-supabase-icon"
                />
                Supabase
              </div>
            </Col>
            <Col xs={4} md={4} lg={4} className="tech-container">
              <div className="technology-card">
                <img className="tech-img" src={vercel} alt="tech-vercel-icon" />
                Vercel
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default AboutTechnologies;
