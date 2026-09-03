import React, { useEffect, useState } from "react";
import "../CSS/Orders.css";

const Orders = () => {

    const [cartItems, setCartItems] = useState([]);
    const [orderData, setOrderData] = useState({});

    // =====================================================
    // GET ORDER ITEMS
    // =====================================================

    useEffect(() => {

        const savedOrder =
            JSON.parse(localStorage.getItem("orders")) || {};

        setOrderData(savedOrder);
        setCartItems(savedOrder.products || []);

    }, []);


    // =====================================================
    // CUSTOMER RATING STATE
    // =====================================================

    const [rating, setRating] = useState(null);
    const [ratingMessage, setRatingMessage] = useState("");


    // =====================================================
    // RATING HANDLER
    // =====================================================

    const handleRating = (value) => {

        setRating(value);
        setRatingMessage("");

    };


    // =====================================================
    // SUBMIT RATING
    // =====================================================

    const handleSubmitRating = () => {

        if (!rating) {

            setRatingMessage(
                "Please select a rating."
            );

            return;
        }

        setRatingMessage(
            `Thank you for rating AJIO ${rating}/10.`
        );

    };


    // =====================================================
    // CONTINUE SHOPPING
    // =====================================================

    const handleContinueShopping = () => {

        window.location.href = "/products";

    };


    return (

        <div className="orders-page">


            {/* =====================================================
                        ORDER SUCCESS BAR
            ====================================================== */}

            <section className="order-success">

                <div className="success-container">

                    <div className="success-message">

                        <p>

                            Thank you{" "}

                            <strong>
                                Shivani Sonawane
                            </strong>

                            , for placing an order with us.

                            Your order{" "}

                            <span className="order-id">

                                {orderData.orderId}

                            </span>{" "}

                            is confirmed.

                        </p>


                        <p className="delivery-text">

                            We expect to deliver your order by{" "}

                            <strong>
                                {orderData.deliveryDate}
                            </strong>

                        </p>

                    </div>


                    <div className="shopping-btn">

                        <button
                            onClick={handleContinueShopping}
                        >
                            CONTINUE SHOPPING
                        </button>

                    </div>

                </div>

            </section>


            {/* =====================================================
                        ORDER SUMMARY TITLE
            ====================================================== */}

            <main>

                <div className="order-info">

                    <h2>
                        Order Summary
                    </h2>

                </div>


                {/* =====================================================
                            MAIN ORDER LAYOUT
                ====================================================== */}

                <div className="order-main">


                    {/* =================================================
                                LEFT SIDE
                    ================================================== */}

                    <div className="order-left">


                        {/* =================================================
                                    DYNAMIC ORDER PRODUCTS
                        ================================================== */}

                        {cartItems.map((item) => (

                            <div
                                className="order-product-card"
                                key={item.id}
                            >


                                {/* PRODUCT IMAGE */}

                                <div className="product-image">

                                    <img
                                        src={
                                            item.mainImage ||
                                            item.image
                                        }
                                        alt={item.name}
                                    />


                                    <p className="delivery-date">

                                        Expected Delivery :{" "}

                                        {orderData.deliveryDate}

                                    </p>

                                </div>


                                {/* PRODUCT DETAILS */}

                                <div className="order-product-details">

                                    <div className="product-info">

                                        <h3>
                                            {item.name}
                                        </h3>


                                        <p className="size">

                                            Size :{" "}

                                            <strong>
                                                {item.selectedSize || "M"}
                                            </strong>

                                        </p>


                                        <p className="size">

                                            Qty :{" "}

                                            <strong>
                                                {Number(item.quantity) || 1}
                                            </strong>

                                        </p>

                                    </div>


                                    {/* PRICE */}

                                    <div className="price-section">

                                        <p className="old-price">

                                            {item.oldPrice || item.price}

                                        </p>


                                        <p className="discount">

                                            {item.discount}

                                        </p>


                                        <h4>

                                            {item.price}

                                        </h4>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* =====================================================
                                RIGHT SIDE
                    ====================================================== */}

                    <div className="cart-right">


                        {/* WHAT HAPPENS NEXT */}

                        <div className="info-card">

                            <h3>
                                What Happens Next
                            </h3>

                            <p>

                                Your order has been confirmed
                                and is being processed.

                            </p>

                            <p>

                                You'll receive updates via SMS
                                and email as your order moves
                                through different stages.

                            </p>

                        </div>


                        {/* YOU HAVE EARNED */}

                        <div className="info-card">

                            <h3>
                                You Have Earned
                            </h3>

                            <div className="earned-box">

                                <span className="earned-points">

                                    138 AJIO Points

                                </span>

                            </div>

                            <p>

                                AJIO Points will be credited
                                after successful delivery.

                            </p>

                        </div>


                        {/* ORDER DETAILS */}

                        <div className="info-card">

                            <h3>
                                Order Details
                            </h3>


                            <div className="detail-row">

                                <span>
                                    Order ID
                                </span>

                                <span>
                                    {orderData.orderId}
                                </span>

                            </div>


                            <div className="detail-row">

                                <span>
                                    Order Date
                                </span>

                                <span>
                                    {orderData.orderDate}
                                </span>

                            </div>


                            <div className="detail-row">

                                <span>
                                    Payment Mode
                                </span>

                                <span>
                                    {orderData.paymentMode}
                                </span>

                            </div>


                            <div className="detail-row">

                                <span>
                                    Delivery Address
                                </span>

                                <span className="address">

                                    Shivani Sonawane
                                    <br />

                                    Opposite Central Bank of India,
                                    <br />

                                    Usar, Tal. Alibag,
                                    <br />

                                    Dist. Raigad - 402203,
                                    <br />

                                    Maharashtra

                                </span>

                            </div>


                            <div className="detail-row">

                                <span>
                                    Mobile Number
                                </span>

                                <span>
                                    +91 91680 77927
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                            CUSTOMER RATING
                ====================================================== */}

                <section className="customer-rating">

                    <h2>
                        Loving AJIO?
                    </h2>

                    <p>

                        Based on your shopping experience,
                        <br />

                        how likely are you to recommend AJIO
                        to Friends and Family?

                    </p>


                    <div className="rating-numbers">

                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                            (number) => (

                                <button
                                    key={number}
                                    className={
                                        rating === number
                                            ? "selected-rating"
                                            : ""
                                    }
                                    onClick={() =>
                                        handleRating(number)
                                    }
                                >
                                    {number}
                                </button>

                            )
                        )}

                    </div>


                    {ratingMessage && (

                        <p className="rating-message">

                            {ratingMessage}

                        </p>

                    )}


                    <button
                        className="submit-rating"
                        onClick={handleSubmitRating}
                    >
                        SUBMIT & CONTINUE
                    </button>

                </section>

            </main>

        </div>

    );

};


export default Orders;
