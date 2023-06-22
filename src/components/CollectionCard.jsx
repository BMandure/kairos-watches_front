import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CollectionCard({ name, img, description, slug, lineSlug }) {
  return (
    <Link
      className="collection-thumbnail-img"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_APP_DOMAIN}${img})`,
      }}
    >
      <div className="collection-background">
        <div className="collection-container">
          <Link
            className="d-none d-lg-inline-block"
            to={`/${slug}/lines/${lineSlug}`}
          >
            <div className="btn-content collection-name">{name}</div>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default CollectionCard;
