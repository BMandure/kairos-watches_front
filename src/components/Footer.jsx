import React from "react";
import "./Footer.css";
import { Tooltip } from "antd";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer id="footer">
      <Row className="footer-fat">
        <Col xs={2} lg={3} className="col-footer">
          <p className="footer-title">About Us</p>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">About Us</button>
          </Tooltip>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Customer Reviews</button>
          </Tooltip>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Press Reviews</button>
          </Tooltip>
        </Col>
        <Col xs={2} lg={3} className="col-footer">
          <p className="footer-title">Contact & Support</p>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Support</button>
          </Tooltip>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Product Manuals</button>
          </Tooltip>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Pre-order Status Update</button>
          </Tooltip>
        </Col>
        <Col xs={2} lg={3} className="col-footer">
          <p className="footer-title">Follow Us</p>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Facebook</button>
          </Tooltip>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Instagram</button>
          </Tooltip>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Twitter</button>
          </Tooltip>
        </Col>{" "}
        <Col xs={2} lg={3} className="col-footer">
          <p className="footer-title">More</p>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">Cookies Configuration</button>
          </Tooltip>
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-text">FAQ</button>
          </Tooltip>
        </Col>
      </Row>
      <Row className="footer-thin">
        <Col xs={12} lg={3} className="d-flex align-items-center">
          <Tooltip
            placement="left"
            title="Out of the scope of the proyect"
            className="footer-text"
          >
            <button className="footer-option footer-text">Use Terms</button>
          </Tooltip>
        </Col>
        <Col xs={12} lg={6}>
          <p className="footer-text">
            © 2022 Joaquin González, Gastón Laffitte, Augusto Riccardi,
            Maximiliano Quintana & Bruno Manduré.
          </p>
        </Col>
        <Col xs={12} lg={3} className="d-flex align-items-center">
          <Tooltip placement="left" title="Out of the scope of the proyect">
            <button className="footer-option footer-text">Privacy</button>
          </Tooltip>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
