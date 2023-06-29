import { Container, Row } from "react-bootstrap";

import TeamCard from "./TeamCard";

import "./AboutTeam.css";

import maxiImg from "../assets/IMG_9221-PhotoRoom.png-PhotoRoom.png";
import brunoImg from "../assets/fotoBruno.jpg";

function AboutTeam() {
  return (
    <Container className="mt-4 team-container">
      <h2 className="about-team-title  p-0 px-4">Our Team</h2>
      <Row className="d-flex mt-2 px-2 justify-content-between g-4">
        <TeamCard
          img=""
          name="Augusto"
          title="Full Stack Developer"
          ghLink="https://github.com/augustoriccardi"
          ldLink="https://www.linkedin.com/in/augusto-riccardi/"
        />
        <TeamCard
          img={maxiImg}
          name="Maximiliano"
          title="Full Stack Developer"
          ghLink="https://github.com/kasenawe"
          ldLink="https://www.linkedin.com/in/maximiliano-quintana-tabarez/"
        />
        <TeamCard
          img=""
          name="Gastón"
          title="Full Stack Developer"
          ghLink="https://github.com/G-Laffitte"
          ldLink="https://www.linkedin.com/in/gastonlaffitte/"
        />
        <TeamCard
          img=""
          name="Joaquin"
          title="Full Stack Developer"
          ghLink="https://github.com/joaquingonjua"
          ldLink="https://www.linkedin.com/in/joaquingonzalezjuambeltz/"
        />
        <TeamCard
          img={brunoImg}
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
