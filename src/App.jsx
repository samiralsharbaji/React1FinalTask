import React from "react";

import { CartProvider } from "./Context/CartContext";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop/Shop.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Home from "./Home/Home.jsx";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <CartProvider>
          <Router>
            <Navbar />
            <div className="container mt-4"></div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Shop />} />
              <Route path="/Cart" element={<Checkout />} />{" "}
            </Routes>
          </Router>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
