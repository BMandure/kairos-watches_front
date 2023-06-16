import "./Product1.css";

function Product1() {
  return (
    <div className="product1-container">
      <div className="product1-background">
        <div className="product1-title-container">
          <img
            src="../src/assets/KAIROS.png"
            alt="logo marca"
            className="product1-logo"
          />
          <button className="product1-button">View all watches</button>
        </div>
      </div>
    </div>
  );
}

export default Product1;
