import { Container } from "react-bootstrap";

import TeamCard from "./TeamCard";

import "./AboutTeam.css";

import img from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";
import img4 from "../assets/about4.jpg";
import img5 from "../assets/about5.jpg";

function AboutTeam() {
  return (
    <Container className="about-team-container">
      <div className="about-team-col d-flex flex-column">
        <h2 className="about-intro-title">The Team</h2>
        <div className="team-col">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </Container>
  );
}

export default AboutTeam;
