import React from "react";
import Shop from "../Shop/Shop.jsx";
import { products } from "../Shop/Shop.jsx";
import "./Homestyle.css";
import { useState } from "react";
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

function Home() {



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
              <img src={product5} alt=""  className="image-wrapper"/>
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
              <img src={product6} alt=""  className="image-wrapper"/>
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
              <img src={product8} alt=""  className="image-wrapper"/>
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
    </div>
  );
}

export default Home;
