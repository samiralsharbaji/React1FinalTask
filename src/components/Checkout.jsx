import { FaTag } from "react-icons/fa";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "50px" }}
    >
      {/* قسم الكوبون */}
      <div className="alert alert-light border mb-4">
        <FaTag className="me-2" />
        <span className="fs-6 me-2">
          Have a coupon?
          <a href="#" className="ms-1 text-danger">
            Click here
          </a>
          <span className="ms-1">to enter your code.</span>
        </span>
      </div>

      <div className="row">
        {/* قسم بيانات الفوترة */}
        <div className="col-md-8">
          <h3 className="mb-4">Billing Details</h3>
          <hr />

          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">
                First Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Last Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" required />
            </div>

            <div className="col-12">
              <label className="form-label">
                Country <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Egypt"
                required
              />
            </div>

            <div className="col-12">
              <label className="form-label">
                Street Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Apartment, suite, unit (optional)"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Town/City <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                State/Province <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" required />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Postcode/ZIP <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Phone <span className="text-danger">*</span>
              </label>
              <input type="tel" className="form-control" required />
            </div>

            <div className="col-12">
              <label className="form-label">
                Email Address <span className="text-danger">*</span>
              </label>
              <input type="email" className="form-control" required />
            </div>

            {/* إنشاء حساب جديد */}
            <div className="col-12 mt-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="createAccount">
                  Create an account?
                </label>
              </div>
            </div>

            <div className="col-12 mt-3">
              <label className="form-label">Order notes (optional)</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>

        {/* قسم ملخص الطلب (الجهة اليمنى) */}
        <div className="col-md-4">
          <div className="card p-4 bg-light border-0">
            <h4 className="mb-4">Your Order</h4>
            {/* عرض المنتجات */}
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between mb-2"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <strong>${item.price * item.quantity}</strong>
                  </div>
                ))}

                <hr />

                {/* الإجمالي النهائي */}
                <div className="d-flex justify-content-between mb-3">
                  <span>Total</span>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </>
            )}
          </div>
          <hr />
          {/* طريقة الدفع */}
          <h5>
            Payment Method <span className="text-danger">*</span>
          </h5>
          <div className="ms-2">
            <input type="radio" name="payment" />
            <label className="ms-2 mb-2" htmlFor="">
              Credit Card
            </label>
          </div>
          <div className="ms-2">
            <input type="radio" name="payment" />
            <label className="ms-2 mb-2" htmlFor="">
              PayPal
            </label>
          </div>
          <div className="ms-2">
            <input type="radio" name="payment" />
            <label className="ms-2 mb-2" htmlFor="">
              Cheque
            </label>
          </div>
          <div className="ms-2">
            <input type="radio" name="payment" />
            <label className="ms-2 mb-2" htmlFor="">
              Bank Transfer
            </label>
          </div>
          <button className="btn btn-danger w-100 fw-bold py-3">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
