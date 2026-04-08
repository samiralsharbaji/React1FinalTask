import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Badge,
  NavDropdown,
} from "react-bootstrap";
import { FaShoppingCart, FaHome, FaSearch, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <BootstrapNavbar
      expand="lg"
      className="shadow-sm py-3 rounded-bottom fixed-top"
      style={{ backgroundColor: "#fff" }}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" style={{ width: "80px" }} />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link as={Link} to="/">
              <FaHome className="me-1" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/womens">Women's</Nav.Link>
            <Nav.Link as={Link} to="/mens">Men's</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>

            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item as={Link} to="/product-details">Product Details</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cart">Shop Cart</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/checkout">Checkout</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog-details">Blog Details</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login">Login / Register</Nav.Link>

            <Nav.Link as={Link} to="/search">
              <FaSearch className="me-1" /> Search
            </Nav.Link>

            <Nav.Link as={Link} to="/favorite">
              <FaHeart className="me-1" /> Favorite
            </Nav.Link>

            <Nav.Link as={Link} to="/Cart" className="position-relative">
              <FaShoppingCart className="me-1" /> Cart
              {totalItems > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;