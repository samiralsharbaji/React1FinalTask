import "../Home/Homestyle.css";
import Logo from "../assets/images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaCcAmazonPay,
  FaCcMastercard,
  FaGooglePay,
  FaCcPaypal,
  FaCcApplePay,
  FaCcStripe,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm 7">
            <div className="footerAbout">
              <div className="footerLogo">
                <img src={Logo} alt="" />
              </div>
              <p className="FooterAboutText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="footerPayment">
                <FaCcAmazonPay />
                <FaCcMastercard />
                <FaGooglePay />
                <FaCcPaypal />
                <FaCcApplePay />
                <FaCcStripe />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-5">
            <div className="footerWidget">
              <h6>Quick Links</h6>
              <ul>
                <li>
                  About
                  <a href="#"></a>
                </li>
                <li>
                  Blogs
                  <a href="#"></a>
                </li>
                <li>
                  Contact
                  <a href="#"></a>
                </li>
                <li>
                  FAQ
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footerWidget">
              <h6>Account</h6>
              <ul>
                <li>
                  my Account <a href="#"></a>
                </li>
                <li>
                  Orders Trucking
                  <a href="#"></a>
                </li>
                <li>
                  Checkout
                  <a href="#"></a>
                </li>
                <li>
                  WishList
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="footerNewsLetter">
              <h6>NewsLetter</h6>
              <form action="">
                <label
                  htmlFor="newsletter-email"
                  className="visually-hidden"
                  noValidate
                >
                  email address
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    required
                    aria-required="true"
                    autoComplete="email"
                  />
                  <button className="btn btn-primary form-control">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="footerSocial">
              <a href="#" role="listitem" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" role="listitem" aria-label="X (Twitter)">
                <FaTwitter />
              </a>
              <a href="#" role="listitem" aria-label="YouTube">
                <FaInstagram />
              </a>
              <a href="#" role="listitem" aria-label="Instagram">
                <FaYoutube />
              </a>
              <a href="#" role="listitem" aria-label="Pintrest">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <p className="text-center lead">
        Copyright &copy; 2026 All rights reserved | This template is made with
        React by Eng. Samir
      </p>
    </footer>
  );
}

export default Footer;
