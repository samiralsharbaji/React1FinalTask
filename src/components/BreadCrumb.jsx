import React from "react";

function BreadCrumb() {
  return (
    <div className="BreadCrumbContainer bg-light">
      <nav aria-label="breadcrumb" className="mt-3 ms-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-decoration-none text-muted">
              Home
            </a>
          </li>

          <li className="breadcrumb-item" aria-current="page">
            Women's
          </li>
          <li className="breadcrumb-item" aria-current="page">
            Men's
          </li>
          <li className="breadcrumb-item">
            <a href="/shop" className="text-decoration-none text-muted">
              Shop
            </a>
          </li>
          <li>
            Pages
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                Product Details
                <a
                  href="/Product Details"
                  className="text-decoration-none text-muted"
                >
                  Essential structured blazer
                </a>
              </li>
              <li>
                Shop Cart
                <a href="/Cart" className="text-decoration-none text-muted"></a>
              </li>
              <li>
                Checkout
                <a
                  href="/Checkout"
                  className="text-decoration-none text-muted"
                ></a>
              </li>
              <li>
                Blog Details
                <a href="/Blog" className="text-decoration-none text-muted"></a>
              </li>
            </ol>
          </li>
          <li>
            <a href="/Blog" className="text-decoration-none text-muted">
              Blog
            </a>
          </li>
          <li>
            <a href="/Contact" className="text-decoration-none text-muted">
              Contact
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;
