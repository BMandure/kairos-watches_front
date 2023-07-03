import "./App.css";
import "./components/Forms.css";

import NavbarSite from "./components/NavbarSite";
import Footer from "./components/Footer";
import Router from "./components/Router";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ResetModal from "./components/ResetModal";
import useSelection from "antd/es/table/hooks/useSelection";

function App() {
  const location = useLocation();
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <NavbarSite
        handleShow={handleShow}
        setFirstLoad={setFirstLoad}
        firstLoad={firstLoad}
      />
      <Router />
      {cartState.length > 0 && <Cart />}
      <Footer />
      <ResetModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default App;
