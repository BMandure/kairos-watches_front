import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CollectionCard({ name, img, description, slug, lineSlug }) {
  return (
    <Link
      to={`/${slug}/lines/${lineSlug}`}
      className="collection-thumbnail-img"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_APP_DOMAIN}${img})`,
      }}
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
