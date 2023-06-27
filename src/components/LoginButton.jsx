import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import "./LoginButton.css";

const LoginButton = ({ isLoggedIn }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!isLoggedIn) {
    return (
      <button className="btn d-none d-lg-inline-block btn-login btn-content">
        Sign In
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      className="btn d-none d-lg-inline-block btn-login btn-content"
    >
      Sign out
    </button>
  );
};

export default LoginButton;
