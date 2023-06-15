import "./TeamCard.css";

function TeamCard({ img, name, title }) {
  return (
    <div className="team-card-container">
      <img
        src="src/assets/submarinerGreen.jpeg"
        alt="Team Member"
        className="team-card-image"
      />
      <div>{name}</div>
      <div>{title}</div>
    </div>
  );
}

export default TeamCard;
