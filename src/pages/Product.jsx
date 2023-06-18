import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="container ">
      <div className="row p-4 m-5 vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-6 mt-4">
          <div>
            <img className="w-100" src="../src/assets/pngegg.png" alt="..." />
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-4">
          <div className="bg-transparent text-light d-flex flex-column">
            <div className="d-flex justify-content-between ">
              <div>← Previous product</div>
              <div>Next product →</div>
            </div>
            <h2 className="mt-2">Rolex - Oyster Perpetual - Man</h2>
            <div className="list-group-flush col-5 product-list-group mt-4">
              <h2>
                <em>USD 1300</em>
              </h2>
            </div>
            <div>
              <div className="row mt-4">
                <h4 className="">Select your upgrades</h4>
                <div className="g-col-sm-12 g-col-lg-4 border rounded my-2">
                  <div className="form-check mt-2 mb-2">
                    <label className="form-check-label" for="flexRadioDefault1">
                      <h4>Black Tropic Strap</h4>
                    </label>
                    <input
                      className="form-check-input "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <div>
                      <h5>USD 39.20</h5>
                    </div>
                  </div>
                </div>
                <div className="g-col-sm-12 g-col-lg-4 border rounded  my-2">
                  <div className="form-check mt-2 mb-2">
                    <label className="form-check-label" for="flexRadioDefault1">
                      <h4>Grey Tropic Strap</h4>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <div>
                      <h5>USD 39.20</h5>
                    </div>
                  </div>
                </div>
                <div className="g-col-sm-12 g-col-lg-4 border rounded  my-2">
                  <div className="form-check mt-2 mb-2">
                    <label className="form-check-label" for="flexRadioDefault1">
                      <h4>Black Nato Strap</h4>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <div>
                      <h5>USD 23.20</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-between mt-4 align-items-center">
            <button
              expand="true"
              className="btn-preorder p-4 text-center w-100"
            >
              <i className="bi bi-cart3 me-2"></i>Pre-order USD 1300
            </button>
            <div className="ms-4">
              <i class="bi bi-heart text-light heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
