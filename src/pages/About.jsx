import React from "react";
import AboutIntroduction from "../components/aboutIntroduction";
import AboutTechnologies from "../components/AboutTechnologies";
import AboutTeam from "../components/AboutTeam";
import BackButton from "../components/BackButton";

function About() {
  return (
    <div>
      <AboutIntroduction />
      <AboutTechnologies />
      <AboutTeam />
      <div className="mx-5">
        <BackButton link="/" text={"Home"} />
      </div>
    </div>
  );
}

export default About;
