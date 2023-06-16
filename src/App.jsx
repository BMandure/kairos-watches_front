import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";

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
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
