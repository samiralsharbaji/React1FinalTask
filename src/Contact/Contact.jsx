import "../Contact/ContactStyle.css";
import { FaMapMarked, FaPhoneAlt, FaHeadphones } from "react-icons/fa";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="contactContent"></div>
          <div className="contactForm">
            <h5>Contact info</h5>
            <ul>
              <li>
                <h6>
                  <FaMapMarked />
                  Address
                </h6>
                <p>
                  160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
                </p>
              </li>

              <li>
                <FaPhoneAlt />
                <h6>Phone</h6>
                <p>125-711-811</p>
                <p>125-668-886</p>
              </li>

              <li>
                <FaHeadphones />
                <h6>Support</h6>
                <p>Support.photography@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <h5>Send Message</h5>
          <form
            action="#"
            id="contactFormID"
            className="validated-form"
            noValidate
            aria-labelledby="contact-form-heading"
          >
            <div className="input-group">
              <label htmlFor="contact-name" className="" aria-required>
                Your Name
              </label>
              <span className="text-danger"> * </span>
              <input
                className="form-control"
                type="text"
                name="name"
                id="contactNameID"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="contact-name" aria-required>
                Your Email
              </label>
              <span className="text-danger">*</span>
              <input
                className="form-control"
                type="email"
                name="email"
                id="contactNameID"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="contact-name">Subject</label>
              <input
                className="form-control"
                type="textarea"
                name="message"
                id="contactNameID"
              />
            </div>
            <div className="input-group">
              <label htmlFor="contact-name" aria-required>
                Your Message
              </label>
              <span className="text-danger">*</span>
              <input
                className="form-control"
                type="textarea"
                name="message"
                id="contactNameID"
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-danger">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.30289248983!2d-74.05646583877709!3d41.02757646633131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2zU2FkZGxlIFJpdmVyLCDZhtmK2Ygg2KzZitix2LPZiiAwNzQ1ONiMINin2YTZiNmE2KfZitin2Kog2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2str!4v1775829106373!5m2!1sar!2str"  style={{width:1200, height:600, border:0}} loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
