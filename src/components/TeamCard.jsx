import "./TeamCard.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

function TeamCard({ img, name, title, ghLink, ldLink }) {
  return (
    <div className="card-team mx-auto">
      <div className="card-info">
        <div className="card-avatar">
          <img className="card-img" src={img} alt="" />
        </div>
        <div className="card-title">{name}</div>
        <div className="card-subtitle">{title}</div>
        <div className="card-social">
          <Link className="pt-2" to={ghLink} target="_blank">
            <img className="card-link" src={github} alt="" />
          </Link>
          <Link className="pt-2" to={ldLink} target="_blank">
            <img className="card-link" src={linkedin} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
