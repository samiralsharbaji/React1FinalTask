import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {FaInstagram} from "react-icons/fa";
import insta1 from "../Home/images/insta1.jpg";
import insta2 from "../Home/images/insta2.jpg";
import insta3 from "../Home/images/insta3.jpg";
import insta4 from "../Home/images/insta4.jpg";
import insta5 from "../Home/images/insta5.jpg";
import "../Home/Homestyle.css";

function Instagram() {
    return(


      <div className="containerGallery mt-5">
        <div className="gallery-item">
          <img src={insta1} alt="Instagram 1" className="gallery-img" />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon"  style={{ color: '#E1306C' }} />
          </div>
        </div>

        <div className="gallery-item">
          <img src={insta2} alt="Instagram 2" className="gallery-img"  style={{ color: '#E1306C' }} />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon"  style={{ color: '#E1306C' }} />
          </div>
        </div>

        <div className="gallery-item">
          <img src={insta3} alt="Instagram 3" className="gallery-img" style={{ color: '#E1306C' }}  />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon"  style={{ color: '#E1306C' }} />
          </div>
        </div>

        <div className="gallery-item">
          <img src={insta4} alt="Instagram 4" className="gallery-img" />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon"  style={{ color: '#E1306C' }} />
          </div>
        </div>
        <div className="gallery-item">
          <img src={insta5} alt="Instagram 5" className="gallery-img" />
          <div className="gallery-overlay">
            <FaInstagram className="insta-icon" style={{ color: '#E1306C' }}  />
          </div>
        </div>


      </div>

    );
};

export default Instagram;