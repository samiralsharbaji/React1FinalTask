import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Card, Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card
      className="product-card shadow border-0 rounded-4 overflow-hidden position-relative"
      style={{
        width: "22rem",
        margin: "20px auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="img-fluid"
          style={{ height: "240px", objectFit: "cover" }}
        />

        <Badge className="position-absolute top-0 start-0 m-2 fs-6 px-2 rounded-pill shadow-sm">
          {product.status === "sale" && "🔥 SALE"}
          {product.status === "new" && "🆕 NEW"}
          {product.status === "out_of_stock" && "❌ OUT"}
        </Badge>

        <Badge
          bg="secondary"
          className="position-absolute top-0 end-0 m-2 fs-6 px-2 rounded-pill shadow-sm"
        >
          {product.price} USD
        </Badge>
      </div>

      <Card.Body className="text-center d-flex flex-column justify-content-between px-3">
        <div>
          <Card.Title className="fs-5 fw-bold text-dark mb-1">
            {product.name}
          </Card.Title>

          <div className="d-flex justify-content-center mb-2">
            <StarRating rating={product.rating} />
          </div>
        </div>

        <div className="text-decoration-line-through text-muted mb-3">
          {product.oldPrice
            ? `${parseFloat(product.oldPrice).toFixed(2)} USD`
            : ""}
        </div>

        <Button
          disabled={product.status === "out_of_stock"}
          onClick={() => addToCart(product)}
          className="d-flex align-items-center justify-content-center mx-auto gap-2 text-white rounded-pill px-4 py-2 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "none",
          }}
        >
          <FaShoppingCart />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
