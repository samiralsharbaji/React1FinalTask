import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, Row, Col, Form, ListGroup } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);
const navigate = useNavigate();


  if (!item) return null;

  return (
    <ListGroup.Item className="border-0 shadow-sm rounded-3 py-3 px-3">
      <Row className="align-items-center">

        {/* Image + Name */}
        <Col md={4} className="d-flex align-items-center gap-3">
          <img
            src={item?.image}
            alt={item?.name}
            className="img-fluid rounded"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
            onClick={()=> navigate(`/product/${item.id}`)}
          />
          <div className="fw-semibold">{item?.name}</div>
        </Col>

        {/* Quantity */}
        <Col md={3} className="my-2 my-md-0">
          <Form.Control
            type="number"
            value={item?.quantity}
            min="1"
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value))
            }
            className="text-center rounded-pill shadow-sm w-100"
            style={{ maxWidth: "80px", margin: "0 auto" }}
          />
        </Col>

        {/* Price */}
        <Col md={3} className="fw-bold text-primary">
          ${(item.price * item.quantity).toFixed(2)} USD
        </Col>

        {/* Remove */}
        <Col md={2} className="text-center">
          <Button
            size="sm"
            variant="danger"
            onClick={() => removeFromCart(item.id)}
          >
            <FaTrash /> Remove
          </Button>
        </Col>

      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;