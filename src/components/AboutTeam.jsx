import { Container, Row } from "react-bootstrap";

import TeamCard from "./TeamCard";

import "./AboutTeam.css";

import img from "../assets/IMG_9221-PhotoRoom.png-PhotoRoom.png";
import BackButton from "./BackButton";

function AboutTeam() {
  return (
    <Container className="mt-4 team-container">
      <h2 className="about-team-title  p-0 px-4">Our Team</h2>
      <Row className="d-flex mt-2 px-2 justify-content-between g-4">
        <TeamCard
          img={img}
          name="Augusto"
          title="Full Stack Developer"
          ghLink="https://github.com/augustoriccardi"
          ldLink="https://www.linkedin.com/in/augusto-riccardi/"
        />
        <TeamCard
          img={img}
          name="Maximiliano"
          title="Full Stack Developer"
          ghLink="https://github.com/kasenawe"
          ldLink="https://www.linkedin.com/in/maximiliano-quintana-tabarez/"
        />
        <TeamCard
          img={img}
          name="Gastón"
          title="Full Stack Developer"
          ghLink="https://github.com/G-Laffitte"
          ldLink="https://www.linkedin.com/in/gastonlaffitte/"
        />
        <TeamCard
          img={img}
          name="Joaquin"
          title="Full Stack Developer"
          ghLink="https://github.com/joaquingonjua"
          ldLink="https://www.linkedin.com/in/joaquingonzalezjuambeltz/"
        />
        <TeamCard
          img={img}
          name="Bruno"
          title="Full Stack Developer"
          ghLink="https://github.com/BMandure"
          ldLink="https://www.linkedin.com/in/brunomanduré/"
        />
      </Row>
    </Container>
  );
}

export default AboutTeam;
