import React from "react";
import { useNavigate } from "react-router";
import "../CSS/Cart.css";

const Cart = () => {
    const navigate = useNavigate();

    return (
        <div className="cart-page">

            {/* =====================================================
                HEADER
                Only Checkout Steps
            ===================================================== */}

            <header className="cart-page-header">

                <div className="cart-checkout-header">

                    {/* BAG */}

                    <div className="cart-step cart-step-active">

                        <i className="fa-solid fa-bag-shopping"></i>

                        <span>
                            Bag
                        </span>

                    </div>


                    {/* LINE */}

                    <div className="cart-step-line"></div>


                    {/* DELIVERY */}

                    <div className="cart-step">

                        <i className="fa-solid fa-location-dot"></i>

                        <span>
                            Delivery Details
                        </span>

                    </div>


                    {/* LINE */}

                    <div className="cart-step-line"></div>


                    {/* PAYMENT */}

                    <div className="cart-step">

                        <i className="fa-solid fa-indian-rupee-sign"></i>

                        <span>
                            Payment
                        </span>

                    </div>

                </div>

            </header>


            {/* =====================================================
                MAIN
            ===================================================== */}

            <main>

                <section className="cart-page-container">


                    {/* =================================================
                        LEFT SIDE
                    ================================================= */}

                    <div className="cart-left-section">


                        {/* =================================================
                            GIFT BANNER
                        ================================================= */}

                        <div className="cart-gift-banner">

                            <div className="cart-gift-info">

                                <img
                                    src="https://assets-jiocdn.ajio.com/static/img/assured-gift-box.svg"
                                    alt="Gift"
                                />

                                <h4>
                                    You're Getting Free Gifts Worth ₹1495!
                                </h4>

                            </div>


                            <a href="#">
                                View Gifts
                            </a>

                        </div>


                        {/* =================================================
                            MY BAG
                        ================================================= */}

                        <div className="cart-bag-section">

                            <div className="cart-bag-header">

                                <h2>

                                    My Bag

                                    <span>
                                        (2 Items)
                                    </span>

                                </h2>


                                <a
                                    href="#"
                                    className="cart-wishlist-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate("/Wishlist");
                                    }}
                                >
                                    + Add from Wishlist
                                </a>

                            </div>

                        </div>


                        {/* =================================================
                            PRODUCT 1
                        ================================================= */}

                        <div className="cart-product-card">


                            {/* PRODUCT IMAGE */}

                            <div className="cart-product-image">

                                <img
                                    src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260618/JktH/6a33ef62afd8cf5e737db289/-288Wx360H-443123669-ltpurple-MODEL.jpg"
                                    alt="YOUSTA Women Kurti"
                                />

                            </div>


                            {/* PRODUCT DETAILS */}

                            <div className="cart-product-details">

                                <div className="cart-product-top">


                                    <div className="cart-product-info">

                                        <h3>
                                            YOUSTA-Women Embroidered Cotton Straight Kurti
                                        </h3>


                                        {/* SIZE & QUANTITY */}

                                        <div className="cart-product-options">

                                            <span>
                                                Size
                                            </span>

                                            <select defaultValue="M">

                                             
                                        <option value="S">
                                                    S
                                                </option>


                                                <option value="M">
                                                    M
                                                </option>

                                                <option value="L">
                                                    L
                                                </option>

                                            </select>


                                            <span>
                                                Qty
                                            </span>

                                            <select defaultValue="1">

                                                <option value="1">
                                                    1
                                                </option>

                                                <option value="2">
                                                    2
                                                </option>

                                                 <option value="1">
                                                    3
                                                </option> 

                                            </select>

                                        </div>

                                    </div>


                                    {/* PRICE */}

                                    <div className="cart-product-price">

                                        <span className="cart-price-box">
                                            Rs. 499.00
                                        </span>

                                    </div>

                                </div>


                                {/* BOTTOM */}

                                <div className="cart-product-bottom">

                                    <div></div>

                                    <div className="cart-product-actions">

                                        <a href="#">
                                            Delete
                                        </a>


                                        <a href="#">

                                            <i className="fa-regular fa-heart"></i>

                                            Move to Wishlist

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            PRODUCT 2
                        ================================================= */}

                        <div className="cart-product-card">


                            {/* PRODUCT IMAGE */}

                            <div className="cart-product-image">

                                <img
                                    src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260312/7q7O/69b28d7daf321a7f921b941a/-288Wx360H-443110691-fuchsia-MODEL.jpg"
                                    alt="AVAASA Anarkali Kurta"
                                />

                            </div>


                            {/* PRODUCT DETAILS */}

                            <div className="cart-product-details">

                                <div className="cart-product-top">


                                    <div className="cart-product-info">

                                        <h3>
                                            AVAASA MIX N' MATCH Women Embroidered Anarkali Kurta
                                        </h3>


                                        <div className="cart-product-options">

                                            <span>
                                                Size
                                            </span>

                                            <select defaultValue="M">

                                            
                                      <option value="S">
                                                    S
                                                </option>

                                                <option value="M">
                                                    M
                                                </option>

                                                 <option value="L">
                                                    L
                                                </option>

                                            </select>


                                            <span>
                                                Qty
                                            </span>

                                            <select defaultValue="1">

                                                <option value="1">
                                                    1
                                                </option>

                                                <option value="2">
                                                    2
                                                </option>

                                                <option value="3">
                                                    3
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    {/* PRODUCT RIGHT */}

                                    <div className="cart-product-right">

                                        <div className="cart-saving">

                                            Savings :

                                            <span>
                                                Rs. 1,104.00
                                            </span>

                                        </div>


                                        <div className="cart-old-price">
                                            Rs.1,699.00 (65%)
                                        </div>


                                        <div className="cart-price-box">
                                            Rs. 595.00
                                        </div>


                                        <div className="cart-product-actions">

                                            <a href="#">
                                                Delete
                                            </a>


                                            <a href="#">

                                                <i className="fa-regular fa-heart"></i>

                                                Move to Wishlist

                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            ADD FROM WISHLIST
                        ================================================= */}

                        <div className="cart-wishlist-bottom">

                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/Wishlist");
                                }}
                            >
                                + Add from Wishlist
                            </a>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT SIDE
                    ================================================= */}

                    <div className="cart-right-section">


                        {/* =================================================
                            ORDER SUMMARY
                        ================================================= */}

                        <div className="cart-order-summary">

                            <h3>
                                Order Details
                            </h3>


                            <div className="cart-price-row">

                                <span>
                                    Bag total
                                </span>

                                <span>
                                    ₹2,198.00
                                </span>

                            </div>


                            <div className="cart-price-row">

                                <span>
                                    Bag discount
                                </span>

                                <span className="cart-discount">
                                    -₹1,104.00
                                </span>

                            </div>


                            <div className="cart-price-row">

                                <span>

                                    Convenience Fee

                                    <a href="#">
                                        What's this?
                                    </a>

                                </span>

                                <span></span>

                            </div>


                            <div className="cart-price-row">

                                <span>
                                    Delivery Fee
                                </span>

                                <span>

                                    <span className="cart-free">
                                        Free
                                    </span>

                                    <del>
                                        ₹49.00
                                    </del>

                                </span>

                            </div>


                            <div className="cart-price-row">

                                <span>
                                    Platform Fee
                                </span>

                                <span>
                                    ₹23.00
                                </span>

                            </div>


                            {/* TOTAL */}

                            <div className="cart-total-section">

                                <div className="cart-total-row">

                                    <span>
                                        Order Total
                                    </span>

                                    <span>
                                        ₹1,117.00
                                    </span>

                                </div>

                            </div>


                            {/* SHIPPING BUTTON */}

                            <button
                                className="cart-shipping-btn"
                                onClick={() => navigate("/Payment")}
                            >
                                PROCEED TO SHIPPING
                            </button>

                        </div>


                        {/* =================================================
                            COUPON
                        ================================================= */}

                        <div className="cart-coupon-box">

                            <h3>
                                Apply Coupon
                            </h3>


                            <div className="cart-coupon-input">

                                <input
                                    type="text"
                                    placeholder="Enter coupon code"
                                />

                                <button>
                                    APPLY
                                </button>

                            </div>


                            <h4>
                                Applicable Coupons
                            </h4>


                            <div className="cart-coupon-item">

                                <input
                                    type="radio"
                                    name="coupon"
                                />


                                <div className="cart-coupon-details">

                                    <p className="cart-coupon-saving">

                                        Savings :

                                        <span>
                                            ₹218.80
                                        </span>

                                    </p>


                                    <h5>
                                        NEW20
                                    </h5>


                                    <p className="cart-offer">
                                        20% off for new users;
                                        Extra 10% off on
                                    </p>

                                    <p className="cart-offer">
                                        app
                                    </p>


                                    <a href="#">
                                        View T & C
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            GST
                        ================================================= */}

                        <div className="cart-gst-section">

                            <h4>
                                Save up to 24% with GST benefits
                            </h4>


                            <label className="cart-gst-check">

                                <input type="checkbox" />

                                <span>
                                    Use GST Invoice
                                </span>

                            </label>

                        </div>


                        {/* =================================================
                            REFUND
                        ================================================= */}

                        <div className="cart-refund-section">

                            <h4>
                                Return/Refund policy
                            </h4>


                            <p>
                                In case of return, we ensure quick
                                <br />
                                refunds Full amount will be refunded
                                <br />
                                excluding Convenience Fee.
                            </p>


                            <a href="#">
                                Read Policy
                            </a>

                        </div>

                    </div>

                </section>

            </main>


            {/* =====================================================
                SERVICE STRIP
            ===================================================== */}

            <section className="cart-service-strip">

                <div className="cart-service-box">

                    <i className="fa-solid fa-shield-halved"></i>

                    <span>
                        SECURE PAYMENTS
                    </span>

                </div>


                <div className="cart-service-box">

                    <i className="fa-solid fa-indian-rupee-sign"></i>

                    <span>
                        CASH ON DELIVERY
                    </span>

                </div>


                <div className="cart-service-box">

                    <i className="fa-solid fa-certificate"></i>

                    <span>
                        ASSURED QUALITY
                    </span>

                </div>


                <div className="cart-service-box">

                    <i className="fa-solid fa-rotate-left"></i>

                    <span>
                        EASY RETURNS
                    </span>

                </div>

            </section>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <footer className="cart-footer">


                {/* FOOTER TOP */}

                <div className="cart-footer-top">

                    <div className="cart-feature">

                        <i className="fa-solid fa-bag-shopping"></i>

                        <h4>
                            EASY EXCHANGE
                        </h4>

                    </div>


                    <div className="cart-feature">

                        <i className="fa-solid fa-hand-holding-heart"></i>

                        <h4>
                            100% HANDPICKED
                        </h4>

                    </div>


                    <div className="cart-feature">

                        <i className="fa-solid fa-circle-check"></i>

                        <h4>
                            ASSURED QUALITY
                        </h4>

                    </div>

                </div>


                {/* FOOTER BOTTOM */}

                <div className="cart-footer-bottom">


                    {/* AJIO */}

                    <div className="cart-footer-column">

                        <h3>
                            AJIO
                        </h3>

                        <ul>

                            <li>
                                <a href="#">
                                    Who We Are
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Join Our Team
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    We Respect Your Privacy
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Fees & Payments
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Returns & Refunds Policy
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Promotions Terms & Conditions
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* HELP */}

                    <div className="cart-footer-column">

                        <h3>
                            HELP
                        </h3>

                        <ul>

                            <li>
                                <a href="#">
                                    Track Your Order
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Frequently Asked Questions
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Returns
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Cancellations
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Payments
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Customer Care
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    How Do I Redeem My Coupon
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* SHOP BY */}

                    <div className="cart-footer-column">

                        <h3>
                            SHOP BY
                        </h3>

                        <ul>

                            <li>
                                <a href="#">
                                    Men
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Women
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Kids
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Indie
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Stores
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    New Arrivals
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Brand Directory
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* FOLLOW US */}

                    <div className="cart-footer-column">

                        <h3>
                            FOLLOW US
                        </h3>

                        <ul>

                            <li>
                                <a href="#">
                                    Facebook
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Instagram - AJIOlife
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Instagram - AJIO LUXE
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Twitter
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Pinterest
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </footer>

        </div>
    );
};

export default Cart;