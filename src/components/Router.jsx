import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Buy from "../pages/Buy";
import Product from "../pages/Product";
import Register from "./Register";
import Login from "./Login";
import BrandInfo from "../pages/BrandInfo";
import LineInfo from "../pages/LineInfo";
import Pay from "../pages/Pay";
import ProtectedRoute from "./ProtectedRoute";
import ResetPassword from "./ResetPassword";
import Profile from "../pages/Profile";
import UserInfo from "./UserInfo";

function Router() {
  const [orderAddress, setOrderAddress] = useState("");
  const [numberPhone, setNumberPhone] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />

      <Route
        path="/buy"
        element={
          <Buy
            setOrderAddress={setOrderAddress}
            setNumberPhone={setNumberPhone}
          />
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/pay"
          element={
            <Pay orderAddress={orderAddress} numberPhone={numberPhone} />
          }
        />
      </Route>
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/:brand/lines/" element={<BrandInfo />} />
      <Route path="/:brand/lines/:line" element={<LineInfo />} />
    </Routes>
  );
}

export default Router;
