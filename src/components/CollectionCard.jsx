import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CollectionCard({ name, img, description }) {
  return (
    <Link
      className="collection-thumbnail-img"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="collection-background">
        <div className="collection-container">
          <div className="btn-content collection-name">{name}</div>
        </div>
      </div>
    </Link>
  );
}

export default CollectionCard;
