import "./TeamCard.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

function TeamCard({ img, name, title }) {
  return (
    <div class="cardContainer">
      <div class="profileDiv">
        <img className="team-img" src={img} alt="..." />
      </div>
      <div class="infoDiv">
        <div class="nameDiv">
          <p class="name">{name}</p>
          <p class="role">{title}</p>
        </div>
        <div class="socialDiv">
          <Link href="#github">
            <img src={github} alt={`${name}'s github`} />
          </Link>

          <Link href="#linkdin">
            <img src={linkedin} alt={`${name}'s linkedin`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
