import { Link } from "react-router-dom";

function AdminButton() {
  return (
    <Link to="https://kairoswatches-admin.vercel.app/">
      <div className="btn-add-cart ">
        <div className="btn-kairos-content text-center btn-text">
          Admin Site
        </div>
      </div>
    </Link>
  );
}

export default AdminButton;
