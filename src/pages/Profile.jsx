import React from "react";
import Sidemenu from "../components/Sidemenu";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "../components/UserInfo";
import "./Profile.css";

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2} lg={2}>
          <Sidemenu />
        </Col>
        <Col xs={12} md={10} lg={10} className="px-4">
          <h1 className="profile-title text-white text-center">
            Welcome to your profile {user.firstname}!
          </h1>
          <Routes>
            <Route path="/user-info" element={<UserInfo />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
