import { Link } from "react-router-dom";

function AdminButton() {
  return (
    <a
      href="https://kairoswatches-admin.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="btn-add-cart ">
        <div className="btn-kairos-content text-center btn-text">
          Admin Site
        </div>
      </div>
    </a>
  );
}

export default AdminButton;
