import React from "react";
import AboutIntroduction from "../components/AboutIntroduction";
import AboutTechnologies from "../components/AboutTechnologies";
import AboutTeam from "../components/AboutTeam";
import BackButton from "../components/BackButton";

function About() {
  return (
    <div>
      <AboutIntroduction />
      <AboutTechnologies />
      <AboutTeam />
    </div>
  );
}

export default About;
