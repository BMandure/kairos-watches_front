import "./App.css";

import NavbarSite from "./components/NavbarSite";
import Footer from "./components/Footer";
import Router from "./components/Router";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app">
      <NavbarSite />
      <Router />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
