import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";

const LoginButton = ({ isLoggedIn }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!isLoggedIn) {
    return <button className="btn">Sign In</button>;
  }

  return (
    <button onClick={handleLogout} className="btn">
      Sign out
    </button>
  );
};

export default LoginButton;
