import React from "react";
import "./App.css";

import { CartProvider } from "./Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Home/Home.jsx";
import Mens from "./Mens/Mens.jsx";
import Womens from "./Womens/Womens.jsx";
import Shop from "./Shop/Shop.jsx";
import Checkout from "./components/Checkout.jsx";
import CartItems from "./components/CartItems";
import Cart from "./components/Cart.jsx";
import Blog from "./Blog/Blog.jsx";
import ProductDetails from "./components/ProductDetails";
import Contact from "./Contact/Contact.jsx";
import Instagram from "./components/Instagram.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <CartProvider>
          <Router>
            <Navbar />

            <main className="app-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mens" element={<Mens />} />
                <Route path="/womens" element={<Womens />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/cartitems" element={<CartItems />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </Router>
          <Instagram />
          <Footer />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
