import "./TeamCard.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

function TeamCard({ img, name, title }) {
  return (
    <div className="cardContainer">
      <div className="profileDiv">
        <img className="team-img" src={img} alt="..." />
      </div>
      <div className="infoDiv">
        <div className="nameDiv">
          <p className="name">{name}</p>
          <p className="role">{title}</p>
        </div>
        <div className="socialDiv">
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
