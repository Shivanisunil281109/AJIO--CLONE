import React, { useState } from "react";
import "../CSS/Orders.css";

const Orders = () => {

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
            setRatingMessage("Please select a rating.");
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
                                FN4461305956
                            </span>{" "}

                            is confirmed.

                        </p>


                        <p className="delivery-text">

                            We expect to deliver your order by{" "}

                            <strong>
                                18 July
                            </strong>
                            .

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
                                    ORDER PRODUCT 1
                        ================================================== */}

                        <div className="order-product-card">


                            {/* PRODUCT IMAGE */}

                            <div className="product-image">

                                <img
                                    src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260618/JktH/6a33ef62afd8cf5e737db289/-288Wx360H-443123669-ltpurple-MODEL.jpg"
                                    alt="YOUSTA Women Embroidered Cotton Straight Kurti"
                                />


                                <p className="delivery-date">

                                    Expected Delivery : 18 July

                                </p>

                            </div>


                            {/* PRODUCT DETAILS */}

                            <div className="order-product-details">


                                <div className="product-info">

                                    <h3>

                                        YOUSTA-Women Embroidered
                                        Cotton Straight Kurti

                                    </h3>


                                    <p className="size">

                                        Size : <strong>M</strong>

                                    </p>

                                </div>


                                {/* PRICE */}

                                <div className="price-section">

                                    <p className="old-price">

                                        ₹799.00

                                    </p>


                                    <p className="discount">

                                        (38%) OFF

                                    </p>


                                    <h4>

                                        ₹499.00

                                    </h4>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                                    ORDER PRODUCT 2
                        ================================================== */}

                        <div className="order-product-card">


                            {/* PRODUCT IMAGE */}

                            <div className="product-image">

                                <img
                                    src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260312/7q7O/69b28d7daf321a7f921b941a/-288Wx360H-443110691-fuchsia-MODEL.jpg"
                                    alt="AVAASA MIX N MATCH Women Embroidered Anarkali Kurta"
                                />


                                <p className="delivery-date">

                                    Expected Delivery : 18 July

                                </p>

                            </div>


                            {/* PRODUCT DETAILS */}

                            <div className="order-product-details">


                                <div className="product-info">

                                    <h3>

                                        AVAASA MIX N' MATCH Women
                                        Embroidered Anarkali Kurta

                                    </h3>


                                    <p className="size">

                                        Size : <strong>M</strong>

                                    </p>

                                </div>


                                {/* PRICE */}

                                <div className="price-section">

                                    <p className="old-price">

                                        ₹1,699.00

                                    </p>


                                    <p className="discount">

                                        (65%) OFF

                                    </p>


                                    <h4>

                                        ₹595.00

                                    </h4>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                                    CUSTOMER RATING
                        ================================================== */}

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


                            {/* RATING NUMBERS */}

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


                            {/* RATING ERROR / SUCCESS */}

                            {ratingMessage && (

                                <p className="rating-message">

                                    {ratingMessage}

                                </p>

                            )}


                            {/* SUBMIT */}

                            <button
                                className="submit-rating"
                                onClick={handleSubmitRating}
                            >

                                SUBMIT & CONTINUE

                            </button>

                        </section>

                    </div>


                    {/* =====================================================
                                RIGHT SIDE
                    ====================================================== */}

                    <div className="cart-right">


                        {/* =================================================
                                    WHAT HAPPENS NEXT
                        ================================================== */}

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


                        {/* =================================================
                                    YOU HAVE EARNED
                        ================================================== */}

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


                        {/* =================================================
                                    ORDER DETAILS
                        ================================================== */}

                        <div className="info-card">

                            <h3>
                                Order Details
                            </h3>


                            {/* ORDER ID */}

                            <div className="detail-row">

                                <span>
                                    Order ID
                                </span>

                                <span>
                                    FN4461305956
                                </span>

                            </div>


                            {/* ORDER DATE */}

                            <div className="detail-row">

                                <span>
                                    Order Date
                                </span>

                                <span>
                                    18 July 2026
                                </span>

                            </div>


                            {/* PAYMENT MODE */}

                            <div className="detail-row">

                                <span>
                                    Payment Mode
                                </span>

                                <span>
                                    Credit Card
                                </span>

                            </div>


                            {/* DELIVERY ADDRESS */}

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


                            {/* MOBILE NUMBER */}

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

            </main>

        </div>
    );
};


export default Orders;