import React from "react";
import "./Footer.css";
import { Tooltip } from "antd";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer id="footer">
      <Row className="footer-fat">
        <Col xs={12} lg={3} className="col-footer">
          <p className="footer-title">About Us</p>
          <button className="footer-text">About Us</button>
          <button className="footer-text">Customer Reviews</button>
          <button className="footer-text">Press Reviews</button>
        </Col>
        <Col xs={12} lg={3} className="col-footer">
          <p className="footer-title">Contact & Support</p>
          <button className="footer-text">Support</button>
          <button className="footer-text">Product Manuals</button>
          <button className="footer-text">Pre-order Status Update</button>
        </Col>
        <Col xs={12} lg={3} className="col-footer">
          <p className="footer-title">Follow Us</p>
          <button className="footer-text">Facebook</button>
          <button className="footer-text">Instagram</button>
          <button className="footer-text">Twitter</button>
        </Col>{" "}
        <Col xs={12} lg={3} className="col-footer">
          <p className="footer-title">More</p>
          <button className="footer-text">Cookies Configuration</button>
          <button className="footer-text">FAQ</button>
        </Col>
      </Row>
      <Row className="footer-thin">
        <Col xs={12} lg={3} className="d-flex align-items-center">
          <button className="footer-option footer-text">Use Terms</button>
        </Col>
        <Col xs={12} lg={6}>
          <p className="footer-text">
            © 2022 Joaquin González, Gastón Laffitte, Augusto Riccardi,
            Maximiliano Quintana & Bruno Manduré.
          </p>
        </Col>
        <Col xs={12} lg={3} className="d-flex align-items-center">
          <button className="footer-option footer-text">Privacy</button>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
