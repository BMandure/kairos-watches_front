import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CollectionCard({ name, img, slug, lineSlug, imgLogo, canBePressed }) {
  return (
    <Link
      className="collection-thumbnail-img"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_API_DOMAIN}${img})`,
      }}
    >
      <div className="collection-background">
        <div className="collection-container">
          <div className="btn-content collection-name">{name}</div>
          <div
            className={`logo-container mt-3 ${!imgLogo ? "d-none" : "d-block"}`}
          >
            <img
              src={`${import.meta.env.VITE_API_DOMAIN}${imgLogo}`}
              alt=""
              className="brand-logo"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CollectionCard;
