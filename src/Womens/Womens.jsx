import Shop from "../Shop/Shop.jsx";
import "./WomensStyle.css";

function Womens() {
  return (
    <div>
      <div className="container-fluid bg-danger">
        <div className="row">
          <h1 className="text-white text-center">Women's Collection</h1>
          <h6 className="text-white text-center">
            Discover the latest trends in women's fashion
          </h6>
        </div>
      </div>
      <Shop />
    </div>
  );
}

export default Womens;
