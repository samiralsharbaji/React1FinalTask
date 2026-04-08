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
    <div className="container" style={{ marginTop: "100px" }}>
      <h1>Shop</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Shop;
export { products };
