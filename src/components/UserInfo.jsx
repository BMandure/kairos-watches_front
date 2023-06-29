import { useDispatch, useSelector } from "react-redux";
import "./UserInfo.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function UserInfo() {
  const user = useSelector((state) => state.user);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const username = user.email;

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_DOMAIN}/reset-password`,
        data: {
          currentPassword,
          newPassword,
          password,
          username,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.data.error === "Invalid credentials") {
        console.log("no machea");
        return setStatus("Invalid credentials");
      }
      if (response.data.error === "Passwords not matching each other") {
        return setStatus("Passwords not matching each other");
      }
      if (response.data === "success") {
        return setStatus("Successfully password change");
      }
    } catch (error) {
      console.log(error);
      setStatus("Password change failed");
    }
  }

  return (
    <div className="w-100 container-form">
      <div className="form-container">
        <p className="form-title">Change your password below</p>
        {status !== "Successfully password change" ? (
          <p className="text-center font-quicksand text-danger">{status}</p>
        ) : (
          <p className="text-center font-quicksand text-success">{status}</p>
        )}

        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <div className="input-group">
            <label htmlFor="currentpassword">Current password *</label>
            <input
              type="password"
              name="currentpassword"
              id="currentpassword"
              placeholder=""
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
            />
            <label htmlFor="newpassword">New password *</label>
            <input
              type="password"
              name="newpassword"
              id="newpassword"
              placeholder=""
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
            <label htmlFor="password">New password confirmation *</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="btn-kairos pointer mt-4" onClick={handleSubmit}>
            <div className="btn-kairos-content">Change Password</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserInfo;
