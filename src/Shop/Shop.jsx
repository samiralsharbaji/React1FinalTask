import React, { useContext } from "react";

import shop1 from "../assets/images/shop1.jpg";
import shop2 from "../assets/images/shop2.jpg";
import shop3 from "../assets/images/shop3.jpg";
import shop4 from "../assets/images/shop4.jpg";
import shop5 from "../assets/images/shop5.jpg";
import shop6 from "../assets/images/shop6.jpg";
import shop7 from "../assets/images/shop7.jpg";
import shop8 from "../assets/images/shop8.jpg";
import shop9 from "../assets/images/shop9.jpg";

import "./sidebarStyle.css";
import ProductList from "../components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    id: 1,
    image: shop1,
    name: "Furry hooded parka",
    rating: 5,
    price: 59.0,
    oldPrice: null,
    status: "new",
    Category: "Women",
  },
  {
    id: 2,
    image: shop2,
    name: "Flowy striped skirt",
    rating: 4,
    price: 49.0,
    oldPrice: null,
    status: "new",
    Category: "Women",
  },
  {
    id: 3,
    image: shop3,
    name: "Croc Effect Bag",
    rating: 5,
    price: 59.0,
    oldPrice: null,
    status: "new",
    Category: "Women",
  },
  {
    id: 4,
    image: shop4,
    name: "Dark wash Xavi jeans",
    rating: 4,
    price: 59.0,
    oldPrice: null,
    status: "new",
    Category: "Men",
  },
  {
    id: 5,
    image: shop5,
    name: "Ankle Cuff Sandals",
    rating: 5,
    price: 49.0,
    oldPrice: 59.0,
    status: "sale",
    Category: "Kid",
  },
  {
    id: 6,
    image: shop6,
    name: "Contrasting sunglasses",
    rating: 4,
    price: 59.0,
    oldPrice: null,
    status: "sale",
    Category: "Accessories",
  },
  {
    id: 7,
    image: shop7,
    name: "Circular pendant earrings",
    rating: 3.5,
    price: 59.0,
    oldPrice: null,
    status: "sale",
    Category: "Women",
  },
  {
    id: 8,
    image: shop8,
    name: "Cotton T-Shirt",
    rating: 3,
    price: 59.0,
    oldPrice: null,
    status: "out_of_stock",
    Category: "Men",
  },
  {
    id: 9,
    image: shop9,
    name: "Water resistant zips backpack",
    rating: 5,
    price: 49.0,
    oldPrice: 59.0,
    status: "sale",
    Category: "Women",
  },
];

function Shop() {
  return (
    <div className="shop container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-3">
          <div className="shop__sidebar">
            <div className="sidebar__categories">
              <div className="section-title">
                <h4>Categories</h4>
              </div>
              <div className="categories__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading active">
                      <a data-bs-toggle="collapse" href="#collapseOne">
                        Clothing
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul>
                          <li>
                            <a href="#">Coats</a>
                          </li>
                          <li>
                            <a href="#">Jackets</a>
                          </li>
                          <li>
                            <a href="#">Dresses</a>
                          </li>
                          <li>
                            <a href="#">Shirts</a>
                          </li>
                          <li>
                            <a href="#">T-shirts</a>
                          </li>
                          <li>
                            <a href="#">Jeans</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-bs-toggle="collapse" href="#collapseTwo">
                        Shoes
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul>
                          <li>
                            <a href="#">Heels</a>
                          </li>
                          <li>
                            <a href="#">Boots</a>
                          </li>
                          <li>
                            <a href="#">Sneakers</a>
                          </li>
                          <li>
                            <a href="#">Sandals</a>
                          </li>
                          <li>
                            <a href="#">Flats</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-bs-toggle="collapse" href="#collapseThree">
                        Bags
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul>
                          <li>
                            <a href="#">Handbags</a>
                          </li>
                          <li>
                            <a href="#">Backpacks</a>
                          </li>
                          <li>
                            <a href="#">Clutches</a>
                          </li>
                          <li>
                            <a href="#">Totes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-bs-toggle="collapse" href="#collapseFour">
                        Accessories
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul>
                          <li>
                            <a href="#">Jewelry</a>
                          </li>
                          <li>
                            <a href="#">Watches</a>
                          </li>
                          <li>
                            <a href="#">Sunglasses</a>
                          </li>
                          <li>
                            <a href="#">Scarves</a>
                          </li>
                          <li>
                            <a href="#">Belts</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar__filter">
              <div className="section-title">
                <h4>Shop by price</h4>
              </div>
              <div className="filter-range-wrap__bottom">
                <div className="range-slider">
                  <div className="price-input">
                    <p className="me-2">Price: </p>
                    <input
                      type="range"
                      className="price-range_input price-range_input--min"
                      min="33"
                      max="99"
                      defaultValue="33"
                    />
                  </div>
                </div>
                <a href="#">Filter</a>
              </div>
            </div>
            <div className="sidebar__sizes">
              <div className="section-title">
                <h4>Shop by size</h4>
              </div>
              <div className="size__list">
                <label htmlFor="xxs">
                  xxs
                  <input type="checkbox" id="xxs" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="xs">
                  xs
                  <input type="checkbox" id="xs" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="xss">
                  xs-s
                  <input type="checkbox" id="xss" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="s">
                  s
                  <input type="checkbox" id="s" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="m">
                  m
                  <input type="checkbox" id="m" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="ml">
                  m-l
                  <input type="checkbox" id="ml" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="l">
                  l
                  <input type="checkbox" id="l" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="xl">
                  xl
                  <input type="checkbox" id="xl" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="sidebar__color">
              <div className="section-title">
                <h4>Shop by color</h4>
              </div>
              <div className="size__list color__list">
                <label htmlFor="black">
                  Blacks
                  <input type="checkbox" id="black" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="whites">
                  Whites
                  <input type="checkbox" id="whites" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="reds">
                  Reds
                  <input type="checkbox" id="reds" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="greys">
                  Greys
                  <input type="checkbox" id="greys" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="blues">
                  Blues
                  <input type="checkbox" id="blues" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="beige">
                  Beige Tones
                  <input type="checkbox" id="beige" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="greens">
                  Greens
                  <input type="checkbox" id="greens" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="yellows">
                  Yellows
                  <input type="checkbox" id="yellows" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {/* Category Filter Bar */}
          <div className="shop__product__option">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="shop__product__option__left">
                  <p>Showing 1-12 of 126 results</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="shop__product__option__right">
                  <p>Sort by:</p>
                  <select>
                    <option value="">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                    <option value="rating">Best Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* products list  */}
            <h1>Shop</h1>
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
export { products };
