import React from "react";
import "./Footer.css";
import { Tooltip } from "antd";
import { Col, Row } from "react-bootstrap";
import fb from "../assets/fb.svg";
import insta from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import map from "../assets/map2.png";

function Footer() {
  return (
    <footer id="footer">
      <Row className="footer-fat">
        <Col xs={12} lg={3} className="col-footer">
          <p className="footer-subtitle">Contact Us</p>
          <div className="d-flex  flex-column gap-4">
            <div className="footer-row-contact">
              <img className="footer-icon" src={fb} alt="facebook link" />
              <img className="footer-icon" src={insta} alt="instagram link" />
              <img className="footer-icon" src={twitter} alt="twitter link" />
            </div>
            <div className="footer-list">
              <p className="footer-text footer-text-small">
                e-mail: adLoremIpsum@gmail.com
              </p>
              <p className="footer-text footer-text-small">
                phone: 099 999 999
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3} className="col-footer">
          <p className="footer-subtitle">Service</p>
          <div className="footer-list">
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-option">Find Costumer Service</button>
            </Tooltip>
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-option">FAQ</button>
            </Tooltip>
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-option">Order A Catalogue</button>
            </Tooltip>
          </div>
        </Col>
        <Col xs={12} lg={3} className="col-footer">
          <p className="footer-subtitle">More</p>
          <div className="footer-list">
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-option">Press Room</button>
            </Tooltip>
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-option">Jobs</button>
            </Tooltip>
          </div>
        </Col>
        <Col xs={12} lg={3} className="col-footer">
          <p className="footer-subtitle">Location</p>
          <img src={map} alt="Map" className="footer-ubication" />
        </Col>
      </Row>
      <Row className="footer-thin">
        <Col xs={12} lg={3} className="d-flex align-items-center">
          <Tooltip
            title="Out of the scope of the proyect"
            className="footer-text"
          >
            <button className="footer-option">Use Terms</button>
          </Tooltip>
        </Col>
        <Col xs={12} lg={6}>
          <p className="footer-text">
            © 2022 Joaquin González, Gastón Laffitte, Augusto Riccardi,
            Maximiliano Quintana & Bruno Manduré.
          </p>
        </Col>
        <Col xs={12} lg={3} className="d-flex align-items-center">
          <Tooltip title="Out of the scope of the proyect">
            <button className="footer-option footer-text">Privacy</button>
          </Tooltip>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
