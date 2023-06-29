import "./App.css";
import "./components/Forms.css";

import NavbarSite from "./components/NavbarSite";
import Footer from "./components/Footer";
import Router from "./components/Router";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <NavbarSite />
      <Router />
      {cartState.length > 0 && <Cart />}
      <Footer />
    </div>
  );
}

export default App;
