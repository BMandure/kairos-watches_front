import React from "react";
import AboutIntroduction from "../components/aboutIntroduction";
import AboutTechnologies from "../components/AboutTechnologies";
import AboutTeam from "../components/AboutTeam";

function About() {
  return (
    <div className="about-page">
      <AboutIntroduction />
      <AboutTechnologies />
      <AboutTeam />
    </div>
  );
}

export default About;
