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
        <Col className="d-flex flex-column align-items-center">
          <p className="footer-subtitle">Contact Us</p>
          <div className="footer-row-contact footer-gap">
            <img className="footer-icon" src={fb} alt="facebook link" />
            <img className="footer-icon" src={insta} alt="instagram link" />
            <img className="footer-icon" src={twitter} alt="twitter link" />
          </div>
          <div className="footer-row-contact">
            <p className="footer-text footer-text-small">
              e-mail: adLoremIpsum@gmail.com
            </p>
            <p className="footer-text footer-text-small">phone: 099 999 999</p>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <p className="footer-subtitle">Costumer Services</p>
          <div className="footer-col text-align-center">
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-out-scope">
                Find Costumer Service
              </button>
            </Tooltip>
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-out-scope">FAQ</button>
            </Tooltip>
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-out-scope">Order A Catalogue</button>
            </Tooltip>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <p className="footer-subtitle">More</p>
          <div className="footer-col text-align-center">
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-out-scope">Press Room</button>
            </Tooltip>
            <Tooltip placement="left" title="Out of the scope of the proyect">
              <button className="footer-out-scope">Jobs</button>
            </Tooltip>
          </div>
        </Col>
        <Col>
          <img src={map} alt="Map" className="footer-ubication" />
        </Col>
      </Row>
      <div className="footer-thin">
        <Tooltip title="Out of the scope of the proyect">
          <button className="footer-out-scope">Use Terms</button>
        </Tooltip>
        <p className="footer-text">
          © 2022 Joaquin González, Gastón Laffitte, Augusto Riccardi,
          Maximiliano Quintana & Bruno Manduré.
        </p>
        <Tooltip title="Out of the scope of the proyect">
          <button className="footer-out-scope">Privacy</button>
        </Tooltip>
      </div>
    </footer>
  );
}

export default Footer;
