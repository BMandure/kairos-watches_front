import { Container, Row } from "react-bootstrap";

import TeamCard from "./TeamCard";

import "./AboutTeam.css";

import img from "../assets/cara-de-hombre-de-negocios-contra-el-fondo-blanco.png";

function AboutTeam() {
  return (
    <Container className="about-team-banner">
      <h2 className="about-team-title">The Team</h2>
      <Row className="d-flex team-row pt-5 gap-5">
        <TeamCard img={img} name="Augusto" title="Full Stack Developer" />
        <TeamCard img={img} name="Maximiliano" title="Full Stack Developer" />
        <TeamCard img={img} name="Gastón" title="Full Stack Developer" />
        <TeamCard img={img} name="Joaquín" title="Full Stack Developer" />
        <TeamCard img={img} name="Bruno" title="Full Stack Developer" />
      </Row>
    </Container>
  );
}

export default AboutTeam;
