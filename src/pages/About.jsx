import React from "react";
import AboutIntroduction from "../components/AboutIntroduction";
import AboutTechnologies from "../components/AboutTechnologies";
import AboutTeam from "../components/AboutTeam";
import BackButton from "../components/BackButton";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container>
      <AboutIntroduction />
      <AboutTechnologies />
      <AboutTeam />
    </Container>
  );
}

export default About;
