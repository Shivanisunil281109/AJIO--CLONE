import React from "react";
import "../CSS/SellerFooter.css";

const SellerFooter = () => {
  return (
    <footer className="seller-footer">

      {/* TOP FEATURES */}
      <div className="seller-footer-features">

        <div className="seller-footer-feature-item">
          <span className="material-symbols-outlined">
            inventory_2
          </span>

          <p>EASY PRODUCT MANAGEMENT</p>
        </div>


        <div className="seller-footer-feature-item">
          <span className="material-symbols-outlined">
            verified
          </span>

          <p>TRUSTED SELLER PLATFORM</p>
        </div>


        <div className="seller-footer-feature-item">
          <span className="material-symbols-outlined">
            monitoring
          </span>

          <p>TRACK YOUR BUSINESS</p>
        </div>

      </div>


      {/* MAIN FOOTER */}
      <div className="seller-footer-main">

        <div className="seller-footer-grid">


          {/* AJIO SELLER */}
          <div className="seller-footer-column">

            <h3>AJIO SELLER</h3>

            <a href="/seller/dashboard">
              Seller Dashboard
            </a>

            <a href="/seller/create-product">
              Create Product
            </a>

            <a href="/seller/products">
              Manage Products
            </a>

            <a href="/seller/orders">
              Seller Orders
            </a>

            <a href="/seller/profit">
              Profit Overview
            </a>

          </div>


          {/* SELLER HELP */}
          <div className="seller-footer-column">

            <h3>SELLER HELP</h3>

            <a href="#">
              Seller Support
            </a>

            <a href="#">
              Frequently Asked Questions
            </a>

            <a href="#">
              Product Guidelines
            </a>

            <a href="#">
              Order Management
            </a>

            <a href="#">
              Payment Information
            </a>

          </div>


          {/* BUSINESS */}
          <div className="seller-footer-column">

            <h3>BUSINESS</h3>

            <a href="/seller/profile">
              Seller Profile
            </a>

            <a href="#">
              Terms & Conditions
            </a>

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Seller Policies
            </a>

            <a href="#">
              Grow Your Business
            </a>

          </div>


          {/* CONTACT */}
          <div className="seller-footer-column">

            <h3>CONNECT WITH AJIO</h3>

            <a href="#">
              Contact Support
            </a>

            <a href="#">
              AJIO Business
            </a>

            <a href="#">
              Facebook
            </a>

            <a href="#">
              Instagram
            </a>

            <a href="#">
              LinkedIn
            </a>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="seller-footer-bottom">

          <p>
            © 2026 AJIO Seller. All Rights Reserved.
          </p>

          <p>
            Empowering sellers to grow their business with AJIO.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default SellerFooter;