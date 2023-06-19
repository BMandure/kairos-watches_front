import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Buy from "../pages/Buy";
import Product from "../pages/Product";
import Register from "./Register";
import Login from "./Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Router;
