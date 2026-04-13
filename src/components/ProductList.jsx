import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <Row>
      {products?.length > 0 ? (
        products.map((product) => (
          <Col
            key={product.id}
            sm={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center mb-4"
          >
            <ProductCard product={product} />
          </Col>
        ))
      ) : (
        <p>No products found</p>
      )}
    </Row>
  );
};

export default ProductList;