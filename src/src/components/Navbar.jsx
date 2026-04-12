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
import { useState } from "react";
import { products } from "../Shop/Shop.jsx";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredProducts =
    normalizedSearchTerm.length === 0
      ? []
      : products
          .filter((product) =>
            product.name.toLowerCase().includes(normalizedSearchTerm),
          )
          .slice(0, 6);

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
            <Nav.Link as={Link} to="/womens">
              Women's
            </Nav.Link>
            <Nav.Link as={Link} to="/mens">
              Men's
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>

            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item as={Link} to="/product-details">
                Product Details
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/checkout">
                Checkout
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog-details">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login / Register
            </Nav.Link>

            <div className="position-relative d-flex align-items-center">
              <FaSearch className="me-2 text-muted" />
              <input
                type="text"
                className="form-control"
                style={{ width: "220px" }}
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {filteredProducts.length > 0 && (
                <div
                  className="position-absolute start-0 top-100 mt-2 bg-white border rounded shadow-sm overflow-hidden"
                  style={{ width: "320px", zIndex: 2000 }}
                >
                  {filteredProducts.map((p) => (
                    <Link
                      key={p.id}
                      to="/shop"
                      className="d-block px-3 py-2 text-decoration-none text-dark"
                      onClick={() => setSearchTerm("")}
                      style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      <div className="fw-semibold">{p.name}</div>
                      <div className="text-muted small">${p.price}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Nav.Link as={Link} to="/favorite">
              <FaHeart className="me-1" /> Favorite
            </Nav.Link>

            <Nav.Link as={Link} to="/checkout" className="position-relative">
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