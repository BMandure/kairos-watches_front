import React from "react";
import Sidemenu from "../components/Sidemenu";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "../components/UserInfo";
import "./Profile.css";
import Orders from "../components/Orders";

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <Container fluid className="profile-container">
      <Row>
        <Col xs={12} md={2} lg={2}>
          <Sidemenu />
        </Col>
        <Col xs={12} md={10} lg={10} className="px-4">
          <div>
            <Routes>
              <Route path="/user-info" element={<UserInfo />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
