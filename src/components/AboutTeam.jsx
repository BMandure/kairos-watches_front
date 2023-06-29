import { Container, Row } from "react-bootstrap";

import TeamCard from "./TeamCard";

import "./AboutTeam.css";

import img from "../assets/IMG_9221-PhotoRoom.png-PhotoRoom.png";
import imgAugusto from "../assets/Augusto.jpg";
import maxiImg from "../assets/IMG_9221-PhotoRoom.png-PhotoRoom.png";
import brunoImg from "../assets/fotoBruno.jpg";
<<<<<<< Updated upstream
import gastonImg from "../assets/IMG_9237.jpg";
=======
import joaquinImg from "../assets/joaquinFotoPerfil.jpeg";
import gastonImg from "../assets/gastonFotoPerfil.png";
>>>>>>> Stashed changes

function AboutTeam() {
  return (
    <Container className="mt-4 team-container">
      <h2 className="about-team-title  p-0 px-4">Our Team</h2>
      <Row className="d-flex mt-2 px-2 justify-content-between g-4">
        <TeamCard
          img={imgAugusto}
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
          img={gastonImg}
          name="Gastón"
          title="Full Stack Developer"
          ghLink="https://github.com/G-Laffitte"
          ldLink="https://www.linkedin.com/in/gastonlaffitte/"
        />
        <TeamCard
          img={joaquinImg}
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
