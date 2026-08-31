import React, { useState } from "react";
import "../CSS/Payment.css";

const Payment = () => {

const [selectedMode, setSelectedMode] = useState("Credit/ Debit Card");



    return (
        <div className="payment-page">

            {/* =====================================================
                        PAYMENT FEATURES
                    Payment Page Only
                    Logo Removed
                    Footer Removed
            ====================================================== */}

            <div className="payment-feature-header">

                <div className="payment-feature-item">
                    <i className="fa-regular fa-circle-check"></i>
                    <span>SECURE PAYMENTS</span>
                </div>

                <div className="payment-feature-item">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <span>CASH ON DELIVERY</span>
                </div>

                <div className="payment-feature-item">
                    <i className="fa-solid fa-award"></i>
                    <span>ASSURED QUALITY</span>
                </div>

                <div className="payment-feature-item">
                    <i className="fa-solid fa-rotate-left"></i>
                    <span>EASY RETURNS</span>
                </div>

            </div>


            {/* =====================================================
                        MAIN PAYMENT AREA
            ====================================================== */}

            <main className="payment-main">

                <section className="payment-top">

                    {/* ================= LEFT SIDE ================= */}

                    <div className="payment-left">

                        {/* ================= BANK OFFERS ================= */}

                        <div className="offers-box">

                            {/* AU OFFER */}

                            <div className="offer-item">

                                <div className="offer-logo">
                                    <img
                                        src="https://assets-jiocdn.ajio.com/cms/LUXE/MOBILE/au%20bank%20luxe-logo.jpg"
                                        alt="AU Bank"
                                    />
                                </div>

                                <div className="offer-text">

                                    <p>
                                        Get 10% Instant Discount of up to
                                        Rs.1000 on a minimum transaction
                                        value of Rs 3000 using AU Credit
                                        Cards.
                                    </p>

                                    <a
                                        href="#"
                                        className="payment-tc-link"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        T&C

                                        <img
                                            src="https://assets-jiocdn.ajio.com/static/peassets/public/icons/open-new-tab-icon.svg"
                                            alt=""
                                        />
                                    </a>

                                </div>

                            </div>


                            {/* HSBC OFFER */}

                            <div className="offer-item">

                                <div className="offer-logo">
                                    <img
                                        src="https://assets-jiocdn.ajio.com/cms/AJIO/MOBILE/HSBC-71x21-NP.jpg"
                                        alt="HSBC"
                                    />
                                </div>

                                <div className="offer-text">

                                    <p>
                                        Get 12% Instant Discount of up to
                                        Rs.1000 on a minimum transaction
                                        value of Rs 3000 using HSBC
                                        Credit and Debit Cards.
                                    </p>

                                    <a
                                        href="#"
                                        className="payment-tc-link"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        T&C

                                        <img
                                            src="https://assets-jiocdn.ajio.com/static/peassets/public/icons/open-new-tab-icon.svg"
                                            alt=""
                                        />
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* VIEW MORE */}

                        <a
                            href="#"
                            className="payment-view-more"
                            onClick={(e) => e.preventDefault()}
                        >
                            View 20 More
                        </a>


                        {/* ================= REDEEM ================= */}

                        <div className="payment-redeem-section">

                            <div className="payment-redeem-title">
                                <h3>
                                    Select Redeem Option
                                </h3>
                            </div>

                            <div className="payment-otp-text">
                                Verify OTP to use redemption options
                            </div>

                            <div className="payment-otp-btn">
                                <button>
                                    Verify with OTP
                                </button>
                            </div>

                        </div>


                        {/* ================= GIFT CARD ================= */}

                        <div className="payment-gift-card-section">

                            <div className="payment-gift-left">

                                <img
                                    src="https://assets-jiocdn.ajio.com/static/peassets/public/icons/giftCard.svg"
                                    alt="Gift Card"
                                />

                                <div className="payment-gift-text">

                                    <h4>
                                        Have a Gift Card?
                                    </h4>

                                    <p>
                                        Add it to AJIO Wallet to pay
                                        for your orders
                                    </p>

                                </div>

                            </div>


                            <div className="payment-gift-right">

                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Add Gift Card
                                </a>

                            </div>

                        </div>


                        {/* ================= PAYMENT MODE ================= */}

                        <div className="payment-mode-section">

                            <h2 className="payment-heading">
                                Select Payment Mode
                            </h2>


                            <div className="payment-container">

                                {/* PAYMENT SIDEBAR */}

                                <div className="payment-sidebar">



                                    <div
    className={`payment-tab ${
        selectedMode === "Credit/ Debit Card" ? "active" : ""
    }`}
    onClick={() => setSelectedMode("Credit/ Debit Card")}
>
    Credit/ Debit Card
</div>


                                   <div
    className={`payment-tab ${
        selectedMode === "NetBanking" ? "active" : ""
    }`}
    onClick={() => setSelectedMode("NetBanking")}
>
    NetBanking
</div>




                                    <div
    className={`payment-tab ${
        selectedMode === "Wallet" ? "active" : ""
    }`}
    onClick={() => setSelectedMode("Wallet")}
>
    Wallet
</div>


                                    <div
    className={`payment-tab ${
        selectedMode === "UPI" ? "active" : ""
    }`}
    onClick={() => setSelectedMode("UPI")}
>
    UPI
</div>


<div
    className={`payment-tab ${
        selectedMode === "EMI" ? "active" : ""
    }`}
    onClick={() => setSelectedMode("EMI")}
>
    EMI
</div>



      <div
    className={`payment-tab ${
        selectedMode === "Cash on Delivery" ? "active" : ""
    }`}
    onClick={() => setSelectedMode("Cash on Delivery")}
>
    Cash on Delivery
</div>  

</div>


                                {/* PAYMENT FORM */}

                                <div className="payment-form">


                                    <h3>
                                        Add New Card
                                    </h3>


                                    {/* CARD NUMBER */}

                                    <div className="payment-form-group">

                                        <label>
                                            Card Number <span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                        />

                                    </div>


                                    {/* NAME */}

                                    <div className="payment-form-group">

                                        <label>
                                            Name on Card <span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                        />

                                    </div>


                                    {/* EXPIRY + CVV */}

                                    <div className="payment-card-bottom">

                                        {/* EXPIRY */}

                                        <div className="payment-expiry">

                                            <label>
                                                Expiration Date <span>*</span>
                                            </label>

                                            <div className="payment-expiry-select">

                                                <div className="payment-expiry-month">

                                                    <select defaultValue="">

                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Month
                                                        </option>

                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                        <option>April</option>
                                                        <option>May</option>
                                                        <option>June</option>
                                                        <option>July</option>
                                                        <option>August</option>
                                                        <option>September</option>
                                                        <option>October</option>
                                                        <option>November</option>
                                                        <option>December</option>

                                                    </select>

                                                </div>


                                                <div className="payment-expiry-year">

                                                    <select defaultValue="">

                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Year
                                                        </option>

                                                        <option>2026</option>
                                                        <option>2027</option>
                                                        <option>2028</option>
                                                        <option>2029</option>
                                                        <option>2030</option>

                                                    </select>

                                                </div>

                                            </div>

                                        </div>


                                        {/* CVV */}

                                        <div className="payment-cvv">

                                            <label>
                                                CVV <span>*</span>
                                            </label>

                                            <input
                                                type="password"
                                                maxLength="3"
                                            />

                                        </div>

                                    </div>


                                    {/* PAY BUTTON */}

                                    <button className="payment-pay-btn">
                                        PAY ₹1388.00 SECURELY
                                    </button>


                                    {/* TERMS */}

                                    <p className="payment-note">

                                        By placing this order, you agree
                                        to AJIO's{" "}

                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            T&C
                                        </a>

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= ORDER SUMMARY ================= */}

                    <div className="payment-order-summary">

                        <h2>
                            Order Summary
                        </h2>

                        <div className="payment-summary-row">

                            <span>
                                Bag total
                            </span>

                            <span>
                                ₹ 2198.00
                            </span>

                        </div>


                        <div className="payment-summary-row">

                            <span>
                                Bag Discount
                            </span>

                            <span className="payment-discount">
                                - ₹ 833.00
                            </span>

                        </div>


                        <div className="payment-summary-row">

                            <span>

                                Convenience Fee{" "}

                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    What's this?
                                </a>

                            </span>

                            <span></span>

                        </div>


                        <div className="payment-summary-row payment-sub-row">

                            <span>
                                Delivery Fee
                            </span>

                            <span>

                                <span className="payment-free">
                                    Free
                                </span>

                                <del>
                                    ₹49
                                </del>

                            </span>

                        </div>


                        <div className="payment-summary-row payment-sub-row">

                            <span>
                                Platform Fee
                            </span>

                            <span>
                                ₹23
                            </span>

                        </div>


                        <hr />


                        <div className="payment-summary-row payment-total">

                            <span>
                                Order Total
                            </span>

                            <span>
                                ₹1388.00
                            </span>

                        </div>


                        <div className="payment-summary-row payment-payable">

                            <span>
                                Amount Payable
                            </span>

                            <span>
                                ₹1388.00
                            </span>

                        </div>

                    </div>

                </section>

            </main>

        </div>
    );
};

export default Payment;