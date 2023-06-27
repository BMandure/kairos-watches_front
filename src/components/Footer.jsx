import React from "react";
import "./Footer.css";
import { Tooltip } from "antd";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  const text = "Out of the project's scope";
  return (
    <footer id="footer">
      <Row className="footer-fat">
        <Col xs={6} md={6} lg={3} className="col-footer">
          <p className="footer-title">About Us</p>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">About Us</button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Customer Reviews</button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Press Reviews</button>
          </Tooltip>
        </Col>
        <Col xs={6} md={6} lg={3} className="col-footer">
          <p className="footer-title">Contact & Support</p>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Support</button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Product Manuals</button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Pre-order Status Update</button>
          </Tooltip>
        </Col>
        <Col xs={6} md={6} lg={3} className="col-footer">
          <p className="footer-title">Follow Us</p>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Facebook</button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Instagram</button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Twitter</button>
          </Tooltip>
        </Col>{" "}
        <Col xs={6} md={6} lg={3} className="col-footer">
          <p className="footer-title">More</p>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">Cookies Configuration</button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <button className="footer-text">FAQ</button>
          </Tooltip>
        </Col>
      </Row>
      <Row className="footer-thin">
        <Col xs={12} md={6} lg={4} className="d-flex align-items-center pe-0">
          <Tooltip placement="top" title={text}>
            <button className="footer-option footer-text-copy">
              Use Terms
            </button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <button className="footer-option footer-text-copy">Privacy</button>
          </Tooltip>
        </Col>
        <Col xs={12} md={6} lg={4} lg-offset={4}>
          <p className="footer-text-copy-names">
            © 2022 Joaquin González, Gastón Laffitte, Augusto Riccardi,
            Maximiliano Quintana & Bruno Manduré.
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
