import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, Row, Col, Form, ListGroup } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../Context/CartContext";
import { products } from "../Shop/Shop";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <h2>No product found</h2>;

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-6">
          <img src={product.image} className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4>${product.price}</h4>

          <p>Rating: {product.rating}</p>

          {/* Colors */}
          <div className="d-flex gap-2 mt-3">
            <div style={{ width: 20, height: 20, background: "black", borderRadius: "50%" }} />
            <div style={{ width: 20, height: 20, background: "red", borderRadius: "50%" }} />
            <div style={{ width: 20, height: 20, background: "blue", borderRadius: "50%" }} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;