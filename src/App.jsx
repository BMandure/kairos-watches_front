import "./App.css";
import "./components/Forms.css";

import NavbarSite from "./components/NavbarSite";
import Footer from "./components/Footer";
import Router from "./components/Router";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
