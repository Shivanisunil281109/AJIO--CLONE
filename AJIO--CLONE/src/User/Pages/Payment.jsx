import { useNavigate } from "react-router";
import React, { useState } from "react";
import "../CSS/Payment.css";

const Payment = () => {

    const navigate = useNavigate();
    // =====================================================
    // PAYMENT MODE STATE
    // =====================================================

    const [selectedMode, setSelectedMode] = useState("Credit/ Debit Card");


    // =====================================================
    // CARD STATES
    // =====================================================

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardMonth, setCardMonth] = useState("");
    const [cardYear, setCardYear] = useState("");
    const [cvv, setCvv] = useState("");


    // =====================================================
    // ERROR STATE
    // =====================================================

    const [error, setError] = useState("");


    // =====================================================
    // UPI STATE
    // =====================================================

    const [upiId, setUpiId] = useState("");


    // =====================================================
    // OTHER PAYMENT STATES
    // =====================================================

    const [selectedBank, setSelectedBank] = useState("");
    const [selectedWallet, setSelectedWallet] = useState("");
    const [selectedEMI, setSelectedEMI] = useState("");


    // =====================================================
    // CARD VALIDATION
    // =====================================================

    const validateCard = () => {

        if (!cardNumber) {
            setError("Please enter card number.");
            return false;
        }

        if (cardNumber.length !== 16) {
            setError("Card number must contain 16 digits.");
            return false;
        }

        if (!cardName.trim()) {
            setError("Please enter name on card.");
            return false;
        }

        if (!cardMonth) {
            setError("Please select expiration month.");
            return false;
        }

        if (!cardYear) {
            setError("Please select expiration year.");
            return false;
        }

        if (!cvv) {
            setError("Please enter CVV.");
            return false;
        }

        if (cvv.length !== 3) {
            setError("CVV must contain 3 digits.");
            return false;
        }

        setError("");

        return true;
    };


    // =====================================================
    // UPI VALIDATION
    // =====================================================

    const validateUPI = () => {

        if (!upiId.trim()) {
            setError("Please enter UPI ID.");
            return false;
        }

        if (!upiId.includes("@")) {
            setError("Please enter a valid UPI ID.");
            return false;
        }

        setError("");

        return true;
    };


    // =====================================================
    // NETBANKING VALIDATION
    // =====================================================

    const validateNetBanking = () => {

        if (!selectedBank) {
            setError("Please select a bank.");
            return false;
        }

        setError("");

        return true;
    };


    // =====================================================
    // WALLET VALIDATION
    // =====================================================

    const validateWallet = () => {

        if (!selectedWallet) {
            setError("Please select a wallet.");
            return false;
        }

        setError("");

        return true;
    };


    // =====================================================
    // EMI VALIDATION
    // =====================================================

    const validateEMI = () => {

        if (!selectedEMI) {
            setError("Please select an EMI plan.");
            return false;
        }

        setError("");

        return true;
    };


    // =====================================================
    // PAY BUTTON HANDLER
    // =====================================================

  const handlePayment = () => {

    setError("");

    let isValid = false;

    if (selectedMode === "Credit/ Debit Card") {
        isValid = validateCard();
    }

    if (selectedMode === "UPI") {
        isValid = validateUPI();
    }

    if (selectedMode === "NetBanking") {
        isValid = validateNetBanking();
    }

    if (selectedMode === "Wallet") {
        isValid = validateWallet();
    }

    if (selectedMode === "EMI") {
        isValid = validateEMI();
    }

    if (selectedMode === "Cash on Delivery") {
        setError("");
        isValid = true;
    }



    // =================================================
    // PAYMENT SUCCESS
    // =================================================
if (isValid) {

    const cartItems =
        JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.setItem(
        "orders",
        JSON.stringify(cartItems)
    );

    navigate("/orders");
}
   
};



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


                        {/* ================= VIEW MORE ================= */}

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


                                {/* =====================================================
                                            PAYMENT SIDEBAR
                                ====================================================== */}

                                <div className="payment-sidebar">


                                    {/* CREDIT / DEBIT CARD */}

                                    <div
                                        className={`payment-tab ${
                                            selectedMode === "Credit/ Debit Card"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedMode("Credit/ Debit Card");
                                            setError("");
                                        }}
                                    >
                                        Credit/ Debit Card
                                    </div>


                                    {/* NETBANKING */}

                                    <div
                                        className={`payment-tab ${
                                            selectedMode === "NetBanking"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedMode("NetBanking");
                                            setError("");
                                        }}
                                    >
                                        NetBanking
                                    </div>


                                    {/* WALLET */}

                                    <div
                                        className={`payment-tab ${
                                            selectedMode === "Wallet"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedMode("Wallet");
                                            setError("");
                                        }}
                                    >
                                        Wallet
                                    </div>


                                    {/* UPI */}

                                    <div
                                        className={`payment-tab ${
                                            selectedMode === "UPI"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedMode("UPI");
                                            setError("");
                                        }}
                                    >
                                        UPI
                                    </div>


                                    {/* EMI */}

                                    <div
                                        className={`payment-tab ${
                                            selectedMode === "EMI"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedMode("EMI");
                                            setError("");
                                        }}
                                    >
                                        EMI
                                    </div>


                                    {/* CASH ON DELIVERY */}

                                    <div
                                        className={`payment-tab ${
                                            selectedMode === "Cash on Delivery"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedMode("Cash on Delivery");
                                            setError("");
                                        }}
                                    >
                                        Cash on Delivery
                                    </div>

                                </div>


                                {/* =====================================================
                                            PAYMENT FORM
                                ====================================================== */}

                                <div className="payment-form">


                                    {/* =================================================
                                                CREDIT / DEBIT CARD
                                    ================================================== */}

                                    {selectedMode === "Credit/ Debit Card" && (

                                        <>

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
                                                    value={cardNumber}
                                                    onChange={(e) =>
                                                        setCardNumber(
                                                            e.target.value
                                                                .replace(/\D/g, "")
                                                                .slice(0, 16)
                                                        )
                                                    }
                                                />

                                            </div>


                                            {/* NAME */}

                                            <div className="payment-form-group">

                                                <label>
                                                    Name on Card <span>*</span>
                                                </label>

                                                <input
                                                    type="text"
                                                    value={cardName}
                                                    onChange={(e) =>
                                                        setCardName(e.target.value)
                                                    }
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

                                                            <select
                                                                value={cardMonth}
                                                                onChange={(e) =>
                                                                    setCardMonth(e.target.value)
                                                                }
                                                            >

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

                                                            <select
                                                                value={cardYear}
                                                                onChange={(e) =>
                                                                    setCardYear(e.target.value)
                                                                }
                                                            >

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
                                                        value={cvv}
                                                        onChange={(e) =>
                                                            setCvv(
                                                                e.target.value
                                                                    .replace(/\D/g, "")
                                                                    .slice(0, 3)
                                                            )
                                                        }
                                                    />

                                                </div>

                                            </div>

                                        </>

                                    )}


                                    {/* =================================================
                                                NETBANKING
                                    ================================================== */}

                                    {selectedMode === "NetBanking" && (

                                        <>

                                            <h3>
                                                Select Your Bank
                                            </h3>

                                            <div className="payment-form-group">

                                                <label>
                                                    Bank <span>*</span>
                                                </label>

                                                <select
                                                    value={selectedBank}
                                                    onChange={(e) =>
                                                        setSelectedBank(e.target.value)
                                                    }
                                                >

                                                    <option
                                                        value=""
                                                        disabled
                                                    >
                                                        Select Bank
                                                    </option>

                                                    <option>
                                                        HDFC Bank
                                                    </option>

                                                    <option>
                                                        ICICI Bank
                                                    </option>

                                                    <option>
                                                        State Bank of India
                                                    </option>

                                                    <option>
                                                        Axis Bank
                                                    </option>

                                                    <option>
                                                        Kotak Mahindra Bank
                                                    </option>

                                                </select>

                                            </div>

                                        </>

                                    )}


                                    {/* =================================================
                                                WALLET
                                    ================================================== */}

                                    {selectedMode === "Wallet" && (

                                        <>

                                            <h3>
                                                Select Wallet
                                            </h3>

                                            <div className="payment-form-group">

                                                <label>
                                                    Wallet <span>*</span>
                                                </label>

                                                <select
                                                    value={selectedWallet}
                                                    onChange={(e) =>
                                                        setSelectedWallet(e.target.value)
                                                    }
                                                >

                                                    <option
                                                        value=""
                                                        disabled
                                                    >
                                                        Select Wallet
                                                    </option>

                                                    <option>
                                                        Paytm
                                                    </option>

                                                    <option>
                                                        PhonePe
                                                    </option>

                                                    <option>
                                                        Amazon Pay
                                                    </option>

                                                    <option>
                                                        Mobikwik
                                                    </option>

                                                </select>

                                            </div>

                                        </>

                                    )}


                                    {/* =================================================
                                                UPI
                                    ================================================== */}

                                    {selectedMode === "UPI" && (

                                        <>

                                            <h3>
                                                Pay using UPI
                                            </h3>

                                            <div className="payment-form-group">

                                                <label>
                                                    UPI ID <span>*</span>
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="example@upi"
                                                    value={upiId}
                                                    onChange={(e) =>
                                                        setUpiId(e.target.value)
                                                    }
                                                />

                                            </div>

                                        </>

                                    )}


                                    {/* =================================================
                                                EMI
                                    ================================================== */}

                                    {selectedMode === "EMI" && (

                                        <>

                                            <h3>
                                                Select EMI Option
                                            </h3>

                                            <div className="payment-form-group">

                                                <label>
                                                    EMI Plan <span>*</span>
                                                </label>

                                                <select
                                                    value={selectedEMI}
                                                    onChange={(e) =>
                                                        setSelectedEMI(e.target.value)
                                                    }
                                                >

                                                    <option
                                                        value=""
                                                        disabled
                                                    >
                                                        Select EMI Plan
                                                    </option>

                                                    <option>
                                                        3 Months EMI
                                                    </option>

                                                    <option>
                                                        6 Months EMI
                                                    </option>

                                                    <option>
                                                        9 Months EMI
                                                    </option>

                                                    <option>
                                                        12 Months EMI
                                                    </option>

                                                </select>

                                            </div>

                                        </>

                                    )}


                                    {/* =================================================
                                                CASH ON DELIVERY
                                    ================================================== */}

                                    {selectedMode === "Cash on Delivery" && (

                                        <>

                                            <h3>
                                                Cash on Delivery
                                            </h3>

                                            <p>
                                                Pay ₹1388.00 when your order
                                                is delivered to you.
                                            </p>

                                        </>

                                    )}


                                    {/* =================================================
                                                ERROR MESSAGE
                                    ================================================== */}

                                    {error && (

                                        <p className="payment-error">
                                            {error}
                                        </p>

                                    )}


                                    {/* =================================================
                                                PAY BUTTON
                                    ================================================== */}

                                    <button
                                        className="payment-pay-btn"
                                        onClick={handlePayment}
                                    >
                                        PAY ₹1388.00 SECURELY
                                    </button>


                                    {/* =================================================
                                                TERMS
                                    ================================================== */}

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


                    {/* =====================================================
                                ORDER SUMMARY
                    ====================================================== */}

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

