import { Container, Row } from "react-bootstrap";

import TeamCard from "./TeamCard";

import "./AboutTeam.css";

import img from "../assets/cara-de-hombre-de-negocios-contra-el-fondo-blanco.png";

function AboutTeam() {
  return (
    <Container className="mt-4 team-container">
      <h2 className="about-team-title  p-0 px-4">Our Team</h2>
      <Row className="d-flex mt-2 px-2 justify-content-around g-4">
        <TeamCard img={img} name="Augusto" title="Full Stack Developer" />
        <TeamCard img={img} name="Maximiliano" title="Full Stack Developer" />
        <TeamCard img={img} name="Gastón" title="Full Stack Developer" />
        <TeamCard img={img} name="Joaquin" title="Full Stack Developer" />
        <TeamCard img={img} name="Bruno" title="Full Stack Developer" />
      </Row>
    </Container>
  );
}

export default AboutTeam;
