import "./App.css";

import NavbarSite from "./components/NavbarSite";
import Footer from "./components/Footer";
import Router from "./components/Router";

function App() {
  return (
    <div className="app">
      <NavbarSite />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
