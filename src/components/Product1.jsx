import { Link } from "react-router-dom";
import "./Product1.css";

function Product1() {
  return (
    <div className="product1-container">
      <div className="product1-background">
        <div className="product1-title-container">
          <h1 className="banner-title">Kairos</h1>
          <Link to="/shop" className="product1-button">
            View all watches
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product1;
