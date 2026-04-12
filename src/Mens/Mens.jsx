import Shop from '../Shop/Shop.jsx'
import  "./MensStyle.css"

function Mens() {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row">
          <h1 className='text-white text-center'>Men's Collection</h1>
          <h6 className='text-white text-center'>Discover the latest trends in women's fashion</h6>
        </div>
      </div>
      <Shop />
    </div>
  );
}

export default Mens;
