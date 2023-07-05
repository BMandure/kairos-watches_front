import { useState } from "react";
import axios from "axios";
import "./ResetPassword.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (email !== "") {
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
    } else {
      const notifyAdd = () =>
        toast.error("Please complete all fields", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      notifyAdd();
    }
  }

  return (
    <>
      <div className="w-100 container-form">
        <div className="form-container">
          <p className="form-title">Reset Password</p>
          {success && (
            <p className="text-center font-quicksand text-success">
              Password successfully reset and sent to your email.
            </p>
          )}
          {error && (
            <p className="text-center font-quicksand text-danger">{error}</p>
          )}
          <form className="form" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="user@email.com"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="btn-kairos pointer mt-4" onClick={handleSubmit}>
              <div className="btn-kairos-content">Reset Password</div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ResetPassword;
