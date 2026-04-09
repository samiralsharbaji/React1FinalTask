import React from "react";
import Shop from "../Shop/Shop.jsx";
import { products } from "../Shop/Shop.jsx";
import "./Homestyle.css";
import { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import Hero from "../Home/images/category1.jpg";
import Hero2 from "../Home/images/category2.jpg";
import Hero3 from "../Home/images/category3.jpg";
import Hero4 from "../Home/images/category4.jpg";
import Hero5 from "../Home/images/category5.jpg";
import product1 from "../Home/images/product1.jpg";
import product2 from "../Home/images/product2.jpg";
import product3 from "../Home/images/product3.jpg";
import product4 from "../Home/images/product4.jpg";
import product5 from "../Home/images/product5.jpg";
import product6 from "../Home/images/product6.jpg";
import product7 from "../Home/images/product7.jpg";
import product8 from "../Home/images/product8.jpg";
import banner from "../Home/images/banner1.jpg";
import discount from "../Home/images/discount.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaCcAmazonPay,
  FaCcMastercard,
  FaGooglePay,
  FaCcPaypal,
  FaCcApplePay,
  FaCcStripe,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import {
  FireTruckSharp,
  Headphones,
  HeadsetMic,
  Money,
} from "@mui/icons-material";
import insta1 from "../Home/images/insta1.jpg";
import insta2 from "../Home/images/insta2.jpg";
import insta3 from "../Home/images/insta3.jpg";
import insta4 from "../Home/images/insta4.jpg";
import insta5 from "../Home/images/insta5.jpg";

function Home() {
  const [hotTrends, setHotTrends] = useState([]);
  const [features, setFeatures] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  const getRandomProducts = (arr, count) => {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
  };

  useEffect(() => {
    setHotTrends(getRandomProducts(products, 3));
    setFeatures(getRandomProducts(products, 3));
    setBestSellers(getRandomProducts(products, 3));
  }, []);

  return (
    <div>
      <div className="hero-container" style={{ marginTop: "90px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={Hero} alt="Hero" className="img" />

            <div className="hero-text-overlay">
              <h2 className="display-4 mt-4 text-dark">Women’s fashion</h2>
              <p className="text-dark lead">
                Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                incidid-unt labore edolore magna aliquapendisse ultrices
                gravida.
              </p>
              <a href="#" className="fs-5 shop-now-link">
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div>
              <div className="row justify-content-center">
                <div className="col-lg-6 g-2">
                  <img src={Hero2} alt="Hero" className="img" />
                  <div className="hero-text-overlay">
                    <h2 className="display-4 mt-4 text-dark">
                      Women’s fashion
                    </h2>
                    <p className="text-dark lead">
                      Sitamet, consectetur adipiscing elit, sed do eiusmod
                      tempor incidid-unt labore edolore magna aliquapendisse
                      ultrices gravida.
                    </p>
                    <a href="#" className="fs-5 shop-now-link">
                      SHOP NOW
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 g-2">
                  <img src={Hero3} alt="Hero" className="img" />
                  <div className="hero-text-overlay">
                    <h2 className="display-4 mt-4 text-dark">
                      Women’s fashion
                    </h2>
                    <p className="text-dark lead">
                      Sitamet, consectetur adipiscing elit, sed do eiusmod
                      tempor incidid-unt labore edolore magna aliquapendisse
                      ultrices gravida.
                    </p>
                    <a href="#" className="fs-5 shop-now-link">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 g-2">
                  <img src={Hero4} alt="Hero" className="img" />
                  <div className="hero-text-overlay">
                    <h2 className="display-4 mt-4 text-dark">
                      Women’s fashion
                    </h2>
                    <p className="text-dark lead">
                      Sitamet, consectetur adipiscing elit, sed do eiusmod
                      tempor incidid-unt labore edolore magna aliquapendisse
                      ultrices gravida.
                    </p>
                    <a href="#" className="fs-5 shop-now-link">
                      SHOP NOW
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 g-2">
                  <img src={Hero5} alt="Hero" className="img" />
                  <div className="hero-text-overlay">
                    <h2 className="display-4 mt-4 text-dark">
                      Women’s fashion
                    </h2>
                    <p className="text-dark lead">
                      Sitamet, consectetur adipiscing elit, sed do eiusmod
                      tempor incidid-unt labore edolore magna aliquapendisse
                      ultrices gravida.
                    </p>
                    <a href="#" className="fs-5 shop-now-link">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="NewProducts-container container mt-5">
        <span className="section-title">New </span>
        <span className="rTitle">Products</span>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-8 text-center">
            <ul className="filterControl">
              <li>All</li>
              <li>Women's</li>
              <li>Men's</li>
              <li>Kid's</li>
              <li>Accessories</li>
              <li>Cosmetics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-3 justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product1} alt="" className="image-wrapper" />
              <p>Buttons tweed blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <span className="fw-bold">$ 59.0</span>
              {/* Hover Buttons */}
              <div className="hover-actions">
                <a className="icon-btn" href="#">
                  👁
                </a>
                <a className="icon-btn" href="#">
                  ❤️
                </a>
                <a className="icon-btn" href="#">
                  🛒
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product2} alt="" className="image-wrapper" />
              <p>Buttons tweed blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <span className="fw-bold">$ 59.0</span>
              {/* Hover Buttons */}
              <div className="hover-actions">
                <a className="icon-btn" href="#">
                  👁
                </a>
                <a className="icon-btn" href="#">
                  ❤️
                </a>
                <a className="icon-btn" href="#">
                  🛒
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product3} alt="" className="image-wrapper" />
              <p>Buttons tweed blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <span className="fw-bold">$ 59.0</span>
              {/* Hover Buttons */}
              <div className="hover-actions">
                <a className="icon-btn" href="#">
                  👁
                </a>
                <a className="icon-btn" href="#">
                  ❤️
                </a>
                <a className="icon-btn" href="#">
                  🛒
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product4} alt="" className="image-wrapper" />
              <p>Buttons tweed blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <span className="fw-bold">$ 59.0</span>
              {/* Hover Buttons */}
              <div className="hover-actions">
                <a className="icon-btn" href="#">
                  👁
                </a>
                <a className="icon-btn" href="#">
                  ❤️
                </a>
                <a className="icon-btn" href="#">
                  🛒
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product5} alt="" className="image-wrapper" />
              <p>Buttons tweed blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <span className="fw-bold">$ 59.0</span>
              {/* Hover Buttons */}
              <div className="hover-actions">
                <a className="icon-btn" href="#">
                  👁
                </a>
                <a className="icon-btn" href="#">
                  ❤️
                </a>
                <a className="icon-btn" href="#">
                  🛒
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product6} alt="" className="image-wrapper" />
              <p>Buttons tweed blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <span className="fw-bold">$ 59.0</span>
              {/* Hover Buttons */}
              <div className="hover-actions">
                <a className="icon-btn" href="#">
                  👁
                </a>
                <a className="icon-btn" href="#">
                  ❤️
                </a>
                <a className="icon-btn" href="#">
                  🛒
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product7} alt="" className="image-wrapper" />
              <p>Buttons tweed blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <span className="fw-bold">$ 59.0</span>
              {/* Hover Buttons */}
              <div className="hover-actions">
                <a className="icon-btn" href="#">
                  👁
                </a>
                <a className="icon-btn" href="#">
                  ❤️
                </a>
                <a className="icon-btn" href="#">
                  🛒
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product8} alt="" className="image-wrapper" />
              <p>Buttons tweed blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <span className="fw-bold">$ 59.0</span>
              {/* Hover Buttons */}
              <div className="hover-actions">
                <a className="icon-btn" href="#">
                  👁
                </a>
                <a className="icon-btn" href="#">
                  ❤️
                </a>
                <a className="icon-btn" href="#">
                  🛒
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* summer essential */}
      <div className="BannerSection mt-5 position-relative">
        {/* الصورة الخلفية */}
        <img
          src={banner}
          alt="Banner"
          className="imgBanner w-100"
          style={{ height: "500px", objectFit: "cover" }}
        />

        {/* الكاروسيل فوق الصورة */}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade position-absolute top-0 start-0 w-100 h-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner h-100">
            {/* الشريحة الأولى */}
            <div className="carousel-item active h-100" data-bs-interval="2500">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
                <p className="text-danger fw-bold text-uppercase">
                  summer essential
                </p>
                <h2 className="text-dark display-4 fw-bold">
                  Linen Breeze Dress
                </h2>
                <a
                  href="#"
                  className="fs-5 shop-now-link btn btn-outline-dark mt-3"
                >
                  SHOP NOW
                </a>
              </div>
            </div>

            {/* الشريحة الثانية */}
            <div className="carousel-item h-100" data-bs-interval="2500">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
                <p className="text-danger fw-bold text-uppercase">
                  The Chloe Collection
                </p>
                <h2 className="text-dark display-4 fw-bold">
                  New Spring Arrival
                </h2>
                <a
                  href="#"
                  className="fs-5 shop-now-link btn btn-outline-dark mt-3"
                >
                  SHOP NOW
                </a>
              </div>
            </div>

            {/* الشريحة الثالثة */}
            <div className="carousel-item h-100" data-bs-interval="2500">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
                <p className="text-danger fw-bold text-uppercase">
                  Urban Street Style
                </p>
                <h2 className="text-dark display-4 fw-bold">
                  Modern Chic Looks
                </h2>
                <a
                  href="#"
                  className="fs-5 shop-now-link btn btn-outline-dark mt-3"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

      {/* hot trend , best seller , feature  section */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          {/*  Hot Trend */}
          <div className="col-md-3">
            <p className="mt-5 fs-3 headline">Hot Trend</p>
            {hotTrends.map((product) => (
              <div
                key={product.id}
                className="text-center mb-3 d-flex align-items-center"
              >
                <img
                  className="img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  src={product.image}
                  alt={product.name}
                />
                <div className="ms-3">
                  <h6>{product.name}</h6>
                  <p>⭐ {product.rating}</p>
                </div>
              </div>
            ))}
          </div>

          {/*  Feature */}
          <div className="col-md-3">
            <p className="mt-5 fs-3 headline">Feature</p>
            {features.map((product) => (
              <div
                key={product.id}
                className="text-center mb-3 d-flex align-items-center"
              >
                <img
                  className="img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  src={product.image}
                  alt={product.name}
                />
                <div className="ms-3">
                  <h6>{product.name}</h6>
                  <p>⭐ {product.rating}</p>
                </div>
              </div>
            ))}
          </div>

          {/*  Best Seller */}
          <div className="col-md-3">
            <p className=" mt-5 fs-3 headline">Best Seller</p>
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="text-center mb-3 d-flex align-items-center"
              >
                <img
                  className="img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  src={product.image}
                  alt={product.name}
                />
                <div className="ms-3">
                  <h6>{product.name}</h6>
                  <p>⭐ {product.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* coupon section */}

      <div className="container discountSection">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <div>
                <img src={discount} alt="" />
              </div>
              <div className="col-md-6 w-100 colBG">
                <div className="text-center discountContent ">
                  <p className="fs-3">DISCOUNT</p>
                  <span className="circle"></span>
                  <h2 className="fw-bold text-danger fs-1 summer">
                    Summer 2030
                  </h2>
                  <span className="fs-3">SALE</span>
                  <span className="fs-2 text-danger"> 50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* benefits WHY us section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="d-flex align-items-center justify-content-center">
              <FireTruckSharp sx={{ fontSize: 60, color: "red" }} />
              <div>
                <p className="fw-bold">Free Shipping</p>
                <p className="text-muted">for all order over $99</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center justify-content-center">
              <Money sx={{ fontSize: 60, color: "red" }} />
              <div>
                <p className="fw-bold">Money Back Guarantee</p>
                <p className="text-muted">If good have Problems</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center justify-content-center">
              <HeadsetMic sx={{ color: "red", fontSize: 60 }} />
              <div>
                <p className="fw-bold">Online Support 24/7</p>
                <p className="text-muted">Dedicated support</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center justify-content-center">
              <Headphones sx={{ fontSize: 60, color: "red" }} />
              <div>
                <p className="fw-bold">Payment Secure</p>
                <p className="text-muted">100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Instagram section */}
      <div className="containerGallery mt-5">
        <div className="gallery-item">
          <img src={insta1} alt="Instagram 1" className="gallery-img" />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon"  style={{ color: '#E1306C' }} />
          </div>
        </div>

        <div className="gallery-item">
          <img src={insta2} alt="Instagram 2" className="gallery-img"  style={{ color: '#E1306C' }} />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon"  style={{ color: '#E1306C' }} />
          </div>
        </div>
        <div className="gallery-item">
          <img src={insta3} alt="Instagram 3" className="gallery-img" style={{ color: '#E1306C' }}  />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon"  style={{ color: '#E1306C' }} />
          </div>
        </div>

        <div className="gallery-item">
          <img src={insta4} alt="Instagram 4" className="gallery-img" />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon"  style={{ color: '#E1306C' }} />
          </div>
        </div>
        <div className="gallery-item">
          <img src={insta5} alt="Instagram 5" className="gallery-img" />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon" style={{ color: '#E1306C' }}  />
          </div>
        </div>
      </div>
      <footer className="mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm 7">
              <div className="footerAbout">
                <div className="footerLogo">
                  <img src={Logo} alt="" />
                </div>
                <p className="FooterAboutText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <div className="footerPayment">
                  <FaCcAmazonPay />
                  <FaCcMastercard />
                  <FaGooglePay />
                  <FaCcPaypal />
                  <FaCcApplePay />
                  <FaCcStripe />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footerWidget">
                <h6>Quick Links</h6>
                <ul>
                  <li>
                    About
                    <a href="#"></a>
                  </li>
                  <li>
                    Blogs
                    <a href="#"></a>
                  </li>
                  <li>
                    Contact
                    <a href="#"></a>
                  </li>
                  <li>
                    FAQ
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footerWidget">
                <h6>Account</h6>
                <ul>
                  <li>
                    my Account <a href="#"></a>
                  </li>
                  <li>
                    Orders Trucking
                    <a href="#"></a>
                  </li>
                  <li>
                    Checkout
                    <a href="#"></a>
                  </li>
                  <li>
                    WishList
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footerNewsLetter">
                <h6>NewsLetter</h6>
                <form action="">
                  <label
                    htmlFor="newsletter-email"
                    className="visually-hidden"
                    novalidate
                  >
                    email address
                  </label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      required
                      aria-required="true"
                      autoComplete="email"
                    />
                    <button className="btn btn-primary form-control">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className="footerSocial">
                <a href="#" role="listitem" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" role="listitem" aria-label="X (Twitter)">
                  <FaTwitter />
                </a>
                <a href="#" role="listitem" aria-label="YouTube">
                  <FaInstagram />
                </a>
                <a href="#" role="listitem" aria-label="Instagram">
                  <FaYoutube />
                </a>
                <a href="#" role="listitem" aria-label="Pintrest">
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <p className="text-center lead">
          Copyright &copy; 2026 All rights reserved | This template is made with
          by Eng. Samir
        </p>
      </footer>
    </div>
  );
}

export default Home;
