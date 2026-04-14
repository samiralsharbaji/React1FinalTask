import { useParams, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { products } from "../Shop/Shop";
import { FaHeart, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // 🟢 quantity state
  const [quantity, setQuantity] = useState(1);

  // 🔥 product
  const product =
    location.state || products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <h2 className="text-center mt-5 text-danger">❌ No product found</h2>
    );
  }

  // 🔥 related products
  const relatedProducts = products.filter(
    (p) => p.Category === product.Category && p.id !== product.id,
  );

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {/* IMAGE */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* DETAILS */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.name}</h2>

          <h4 className="text-primary">${product.price}</h4>

          <p className="text-muted">Rating: {product.rating} ⭐</p>

          <p className="text-secondary">
            Nemo enim ipsam voluptatem quia voluptas.
          </p>

          {/* 🔢 QUANTITY */}
          <div className="d-flex align-items-center gap-3 my-3">
            <button
              className="btn btn-dark"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>

            <span className="fw-bold fs-5">{quantity}</span>

            <button
              className="btn btn-dark"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          {/* ❤️ + FILTER + ADD TO CART */}
          <div className="d-flex align-items-center gap-3 mt-3">
            {/* Heart */}
            <FaHeart
              className="fs-4 text-danger icon-hover"
              style={{
                cursor: "pointer",
                transition: "0.3s",
              }}
            />

            {/* Filter */}
            <FaFilter
              className="fs-4 text-secondary icon-hover"
              style={{
                cursor: "pointer",
                transition: "0.3s",
              }}
            />

            {/* Add to cart */}
            <button
              className="btn btn-dark ms-auto"
              onClick={() => addToCart({ ...product, quantity })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className="mt-5">
        <h3 className="mb-3">Related Products</h3>

        <div className="row">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <div key={item.id} className="col-md-4">
                <div
                  className="card p-2 shadow-sm"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.image}
                    className="img-fluid rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/product/${item.id}`, { state: item })
                    }
                  />
                  <h6 className="mt-2">{item.name}</h6>
                  <p>${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No related products</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
