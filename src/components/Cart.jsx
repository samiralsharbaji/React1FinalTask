import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Card, Button } from "react-bootstrap";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center my-5">
        <h3>Your cart is empty</h3>
        <Link to="/">
          <Button variant="primary" className="mt-3">
            Go to Shop
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="container">
      <h2 className="mb-4">Your Shopping Cart</h2>
      {cart.map((item) => (
        <CartItems key={item.id} item={item} />
      ))}

      <Card className="mt-4">
        <Card.Body className="text-end">
          <h4>Total: ${totalPrice.toFixed(2)} USD</h4>

          <Button variant="success" className="mt-3">
            Proceed to Checkout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cart;
