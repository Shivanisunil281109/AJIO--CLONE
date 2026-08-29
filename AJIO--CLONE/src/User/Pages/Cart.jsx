
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

                        {/* GIFT BANNER */}

                        <div className="cart-gift-banner">

                            <div className="cart-gift-info">

                                <img
                                    src="https://assets-jiocdn.ajio.com/static/img/assured-gift-box.svg"
                                    alt="Gift"
                                />

                                <h4>
                                    You're Getting Free Gifts Worth <span>₹1495</span>!
                                </h4>

                            </div>

                            <a href="#">
                                View Gifts
                            </a>

                        </div>


                        {/* MY BAG */}

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


                        {/* PRODUCT 1 */}

                        <div className="cart-product-card">

                            <div className="cart-product-image">

                                <img
                                    src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260618/JktH/6a33ef62afd8cf5e737db289/-288Wx360H-443123669-ltpurple-MODEL.jpg"
                                    alt="YOUSTA Women Kurti"
                                />

                            </div>


                            <div className="cart-product-details">

                                <div className="cart-product-top">

                                    <div className="cart-product-info">

                                        <h3>
                                            YOUSTA-Women Embroidered Cotton Straight Kurti
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


                                    <div className="cart-product-price">

                                        <span className="cart-price-box">
                                            Rs. 499.00
                                        </span>

                                    </div>

                                </div>


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


                        {/* PRODUCT 2 */}

                        <div className="cart-product-card">

                            <div className="cart-product-image">

                                <img
                                    src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260312/7q7O/69b28d7daf321a7f921b941a/-288Wx360H-443110691-fuchsia-MODEL.jpg"
                                    alt="AVAASA Anarkali Kurta"
                                />

                            </div>


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


                        {/* ADD FROM WISHLIST */}

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

                        {/* ORDER SUMMARY */}

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


                            <button
                                className="cart-shipping-btn"
                                onClick={() => navigate("/Payment")}
                            >
                                PROCEED TO SHIPPING
                            </button>

                        </div>


                        {/* COUPON */}

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

                                        <span>20%</span> off for new users;
                                        Extra <span>10%</span> off on

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


                        {/* GST */}

                        <div className="cart-gst-section">

                            <h4>
                                Save up to <span>24%</span> with GST benefits
                            </h4>


                            <label className="cart-gst-check">

                                <input type="checkbox" />

                                <span>
                                    Use GST Invoice
                                </span>

                            </label>

                        </div>


                        {/* REFUND */}

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
                NO BOTTOM HORIZONTAL LINE
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

        </div>
    );
};

export default Cart;

