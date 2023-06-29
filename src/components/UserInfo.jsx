import { useSelector } from "react-redux";
import "./UserInfo.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

function UserInfo() {
  const user = useSelector((state) => state.user);

  const [userInfo, setUserInfo] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/api/user/${user.email}`,
        headers: {
          Authorization: `bearer ${user.token}`,
        },
      });
      setUserInfo(response.data);
    };
    getUser();
  }, []);

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
    <>
      <h1 className="profile-title text-white text-left w-75 mx-auto">
        Welcome, {user.firstname}!
      </h1>
      {userInfo && (
        <div className="user-info-fields w-75 pt-2 mx-auto">
          <Row className="form-container m-0 w-100">
            <Col xs={4}>
              <p className="form-title info-field">Full name:</p>s
              <p>
                {userInfo.firstname} {userInfo.lastname}
              </p>
              <p className="form-title info-field">E-mail:</p>
              <p>{userInfo.email}</p>
              <p className="form-title info-field">Address:</p>
              <p>{userInfo.address}</p>
              <p className="form-title info-field">Phone:</p>
              <p>{userInfo.phone}</p>
            </Col>
            <Col xs={8}>
              <p className="form-title">Change your password</p>

              {status &&
                (status !== "Successfully password change" ? (
                  <p className="text-center font-quicksand text-danger mt-2 mb-0">
                    {status}
                  </p>
                ) : (
                  <p className="text-center font-quicksand text-success mt-2 mb-0">
                    {status}
                  </p>
                ))}

              <form
                className="form mt-0"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="input-group d-flex flex-column gap-3">
                  <div>
                    <label htmlFor="currentpassword">
                      Current password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="currentpassword"
                      id="currentpassword"
                      value={currentPassword}
                      onChange={(event) =>
                        setCurrentPassword(event.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="newpassword">
                      New password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="newpassword"
                      id="newpassword"
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">
                      New password confirmation{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="btn-kairos pointer mt-4" onClick={handleSubmit}>
                  <div className="btn-kairos-content">Change Password</div>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default UserInfo;
