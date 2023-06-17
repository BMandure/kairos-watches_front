import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Buy from "./pages/Buy";
import Product from "./pages/Product";

import Register from "./components/Register";
import NavbarSite from "./components/NavbarSite";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <>
      <NavbarSite />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
