import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, Row, Col, Form, ListGroup } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Cart = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <ListGroup.Item className="border-0 shadow-sm rounded-3 py-3 px-3 d-flex align-items-center justify-content-between">
      <Row className="align-items-center">
        <Col md={4} className="d-flex align-items-center gap-3">
          <img
            src={item.image}
            alt={item.name}
            className="img-fluid rounded"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div className="fw-semibold">{item.name}</div>
        </Col>

        <Col md={3} className="my-2 my-md-0">
          <Form.Control
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            min="1"
            className="text-center rounded-pill shadow-sm w-100"
            style={{ maxWidth: "80px", margin: "0 auto" }}
          ></Form.Control>
        </Col>

        <Col md={3} className="fw-bold text-primary my-2 my-md-0">
          ${item.price * item.quantity.toFixed(2)}
          USD
        </Col>

        <Col md={2} className="rounded-pill d-flex align-items-center justify-content-center gap-2 mx-auto">
          <Button
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            <FaTrash />
            Remove
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Cart;
