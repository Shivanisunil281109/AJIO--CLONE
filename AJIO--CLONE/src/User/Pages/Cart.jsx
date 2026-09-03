import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../CSS/Cart.css";

const Cart = () => {

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);


    // =====================================================
    // CONVERT PRICE INTO NUMBER
    // Handles values like:
    // 499
    // "499"
    // "₹499"
    // "₹1,299"
    // =====================================================

    const getPrice = (price) => {

        if (typeof price === "number") {
            return price;
        }

        if (!price) {
            return 0;
        }

        return Number(
            String(price).replace(/[₹,\s]/g, "")
        ) || 0;
    };


    // =====================================================
    // LOAD CART
    // =====================================================

    useEffect(() => {

        const savedCart =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCartItems(savedCart);

    }, []);


    // =====================================================
    // BAG TOTAL
    // =====================================================

    const bagTotal = cartItems.reduce(
        (total, item) => {

            const price = getPrice(item.price);

            const quantity =
                Number(item.quantity) || 1;

            return total + (price * quantity);

        },
        0
    );


    // =====================================================
    // BAG DISCOUNT
    // oldPrice - price
    // =====================================================

    const bagDiscount = cartItems.reduce(
        (total, item) => {

            const price = getPrice(item.price);

            const oldPrice = getPrice(item.oldPrice);

            const quantity =
                Number(item.quantity) || 1;

            const discount =
                Math.max(oldPrice - price, 0);

            return total + (discount * quantity);

        },
        0
    );


    // =====================================================
    // DELIVERY FEE
    // =====================================================

    const deliveryFee = 0;


    // =====================================================
    // PLATFORM FEE
    // =====================================================

    const platformFee =
        cartItems.length > 0 ? 23 : 0;


    // =====================================================
    // ORDER TOTAL
    // =====================================================
    // IMPORTANT:
    // bagTotal already contains the current/selling price.
    // Therefore bagDiscount must NOT be subtracted again.
    // =====================================================

    const orderTotal =
        bagTotal +
        deliveryFee +
        platformFee;


    // =====================================================
    // DELETE PRODUCT
    // =====================================================

    const handleDelete = (id) => {

        const updatedCart =
            cartItems.filter(
                (item) => item.id !== id
            );

        setCartItems(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

    };


    // =====================================================
    // SIZE CHANGE
    // =====================================================

    const handleSizeChange = (
        productId,
        newSize
    ) => {

        const updatedCart =
            cartItems.map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        selectedSize: newSize
                    }
                    : item
            );

        setCartItems(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

    };


    // =====================================================
    // QUANTITY CHANGE
    // =====================================================

    const handleQuantityChange = (
        productId,
        newQuantity
    ) => {

        const updatedCart =
            cartItems.map((cartItem) =>
                cartItem.id === productId
                    ? {
                        ...cartItem,
                        quantity: newQuantity
                    }
                    : cartItem
            );

        setCartItems(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

    };


    // =====================================================
    // FORMAT CURRENCY
    // =====================================================

    const formatPrice = (amount) => {

        return `₹${Number(amount).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };


    return (

        <div className="cart-page">


            {/* =====================================================
                HEADER
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
                                    You're Getting Free Gifts Worth{" "}
                                    <span>₹1495</span>!
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
                                        ({cartItems.length} Items)
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
                            DYNAMIC CART PRODUCTS
                        ================================================= */}

                        {cartItems.map((item) => (

                            <div
                                className="cart-product-card"
                                key={item.id}
                            >


                                {/* PRODUCT IMAGE */}

                                <div className="cart-product-image">

                                    <img
                                        src={
                                            item.mainImage ||
                                            item.image
                                        }
                                        alt={item.name}
                                    />

                                </div>


                                {/* PRODUCT DETAILS */}

                                <div className="cart-product-details">

                                    <div className="cart-product-top">


                                        {/* PRODUCT INFO */}

                                        <div className="cart-product-info">

                                            <h3>
                                                {item.name}
                                            </h3>


                                            <div className="cart-product-options">


                                                {/* SIZE */}

                                                <span>
                                                    Size
                                                </span>


                                                <select
                                                    value={
                                                        item.selectedSize ||
                                                        "M"
                                                    }
                                                    onChange={(e) =>
                                                        handleSizeChange(
                                                            item.id,
                                                            e.target.value
                                                        )
                                                    }
                                                >

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


                                                {/* QUANTITY */}

                                                <span>
                                                    Qty
                                                </span>


                                                <select
                                                    value={
                                                        item.quantity || 1
                                                    }
                                                    onChange={(e) =>
                                                        handleQuantityChange(
                                                            item.id,
                                                            Number(e.target.value)
                                                        )
                                                    }
                                                >

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


                                            {/* PRODUCT PRICE */}

                                            <div className="cart-price-box">

                                                {formatPrice(
                                                    getPrice(item.price)
                                                )}

                                            </div>


                                            {/* ACTIONS */}

                                            <div className="cart-product-actions">


                                                {/* DELETE */}

                                                <a
                                                    href="#"
                                                    onClick={(e) => {

                                                        e.preventDefault();

                                                        handleDelete(item.id);

                                                    }}
                                                >
                                                    Delete
                                                </a>


                                                {/* WISHLIST */}

                                                <a href="#">

                                                    <i className="fa-regular fa-heart"></i>

                                                    Move to Wishlist

                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}


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


                            {/* BAG TOTAL */}

                            <div className="cart-price-row">

                                <span>
                                    Bag total
                                </span>

                                <span>
                                    {formatPrice(bagTotal)}
                                </span>

                            </div>


                            {/* BAG DISCOUNT */}

                            <div className="cart-price-row">

                                <span>
                                    Bag discount
                                </span>

                                <span className="cart-discount">
                                    -{formatPrice(bagDiscount)}
                                </span>

                            </div>


                            {/* CONVENIENCE FEE */}

                            <div className="cart-price-row">

                                <span className="cart-convenience-fee">

                                    Convenience Fee

                                    <a href="#">
                                        What's this?
                                    </a>

                                </span>

                            </div>


                            {/* DELIVERY FEE */}

                            <div className="cart-price-row">

                                <span>
                                    Delivery Fee
                                </span>

                                <span className="cart-delivery-fee">

                                    <span className="cart-free">
                                        Free
                                    </span>

                                    <del>
                                        ₹49.00
                                    </del>

                                </span>

                            </div>


                            {/* PLATFORM FEE */}

                            <div className="cart-price-row">

                                <span>
                                    Platform Fee
                                </span>

                                <span>
                                    {formatPrice(platformFee)}
                                </span>

                            </div>


                            {/* =================================================
                                ORDER TOTAL
                            ================================================= */}

                            <div className="cart-total-section">

                                <div className="cart-total-row">

                                    <span>
                                        Order Total
                                    </span>

                                    <span>
                                        {formatPrice(orderTotal)}
                                    </span>

                                </div>

                            </div>


                            {/* PROCEED BUTTON */}

                            <button
                                className="cart-shipping-btn"
                                onClick={() =>
                                    navigate("/Payment")
                                }
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

                                        <span>
                                            20%
                                        </span>{" "}
                                        off for new users;
                                        Extra{" "}
                                        <span>
                                            10%
                                        </span>{" "}
                                        off on

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

                                Save up to{" "}
                                <span>
                                    24%
                                </span>{" "}
                                with GST benefits

                            </h4>


                            <label className="cart-gst-check">

                                <input
                                    type="checkbox"
                                />

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

        </div>

    );

};


export default Cart;
