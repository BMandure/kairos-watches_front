import { useState } from "react";
import axios from "axios";
import "./ResetPassword.css";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_DOMAIN}/reset-password`,
        data: {
          email,
        },
      });
      if (response.data.error === "Email does not belong to any user") {
        setSuccess(false);
        setError("Email does not belong to any user");
      } else {
        setSuccess(true);
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setError("Failed password reset");
      setSuccess(false);
    }
  }

  return (
    <div className="h-75 w-100 d-flex justify-content-center align-items-center reset-page">
      <div className="border reset-container ">
        <h2 className="text-white">Reset Password</h2>

        <form className="reset-form">
          {success && (
            <p>Password successfully resetted and sent to your email.</p>
          )}
          {error && <p>{error}</p>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="btn-kairos pointer" onClick={handleSubmit}>
            <div className="btn-kairos-content">Reset Password</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
