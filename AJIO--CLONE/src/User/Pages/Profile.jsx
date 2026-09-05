import React, { useEffect, useState } from "react";
import "../CSS/Profile.css";

const Profile = () => {
    const [firstName, setFirstName] = useState("Shivani");
    const [lastName, setLastName] = useState("Sonawane");
    const [email, setEmail] = useState("shivaniesonawane@gmail.com");
    const [mobile, setMobile] = useState("+91 9168077927");
    const [gender, setGender] = useState("Female");
    const [dob, setDob] = useState("2003-09-18");

    const [message, setMessage] = useState("");

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // ===========================
    // ADDRESS BOOK
    // ===========================

    const [showAddressBook, setShowAddressBook] = useState(false);
    const [editingAddress, setEditingAddress] = useState(false);

    // ===========================
    // PAYMENTS
    // ===========================

    const [showPayments, setShowPayments] = useState(false);

    // ===========================
    // SAVED CARD
    // ===========================

    const [savedCard, setSavedCard] = useState(null);
    const [showCardForm, setShowCardForm] = useState(false);

    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cardMessage, setCardMessage] = useState("");

    const [address, setAddress] = useState({
        name: "Shivani Sonawane",
        mobile: "9168077927",
        pincode: "402203",
        locality: "Alibag",
        building: "House No.246",
        landmark: "Opposite Central Bank of India Usar",
        city: "RAIGARHMH",
        state: "MAHARASHTRA",
        addressType: "Home",
        isDefault: true
    });

    const [addressMessage, setAddressMessage] = useState("");

    // ===========================
    // LOAD DATA
    // ===========================

    useEffect(() => {
        const savedProfile =
            JSON.parse(localStorage.getItem("profile")) || null;

        if (savedProfile) {
            setFirstName(savedProfile.firstName || "");
            setLastName(savedProfile.lastName || "");
            setEmail(savedProfile.email || "");
            setMobile(savedProfile.mobile || "");
            setGender(savedProfile.gender || "Female");
            setDob(savedProfile.dob || "");
        }

        // LOAD SAVED ADDRESS
        const savedAddress =
            JSON.parse(localStorage.getItem("address")) || null;

        if (savedAddress) {
            setAddress({
                name: savedAddress.name || "",
                mobile: savedAddress.mobile || "",
                pincode: savedAddress.pincode || "",
                locality:
                    savedAddress.locality ||
                    savedAddress.address ||
                    "",
                building: savedAddress.building || "",
                landmark: savedAddress.landmark || "",
                city: savedAddress.city || "",
                state: savedAddress.state || "",
                addressType:
                    savedAddress.addressType || "Home",
                isDefault:
                    savedAddress.isDefault !== undefined
                        ? savedAddress.isDefault
                        : true
            });
        }

        // LOAD SAVED CARD
        const savedCardData =
            JSON.parse(localStorage.getItem("savedCard")) || null;

        if (savedCardData) {
            setSavedCard(savedCardData);
        }
    }, []);

    // ===========================
    // SAVE PROFILE
    // ===========================

    const handleSaveChanges = (e) => {
        e.preventDefault();

        const profileData = {
            firstName,
            lastName,
            email,
            mobile,
            gender,
            dob
        };

        localStorage.setItem(
            "profile",
            JSON.stringify(profileData)
        );

        setMessage("Profile information saved successfully.");
    };

    // ===========================
    // UPDATE PASSWORD
    // ===========================

    const handleUpdatePassword = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            setMessage("Please fill all password fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage(
                "New password and confirm password do not match."
            );
            return;
        }

        localStorage.setItem("password", newPassword);

        setMessage("Password updated successfully.");

        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    // ===========================
    // SAVE ADDRESS
    // ===========================

    const handleSaveAddress = (e) => {
        e.preventDefault();

        localStorage.setItem(
            "address",
            JSON.stringify(address)
        );

        setAddressMessage("Address saved successfully.");

        setEditingAddress(false);
    };

    // ===========================
    // ADDRESS INPUT CHANGE
    // ===========================

    const handleAddressChange = (e) => {
        const { name, value } = e.target;

        setAddress((previousAddress) => ({
            ...previousAddress,
            [name]: value
        }));
    };

    // ===========================
    // CARD NUMBER CHANGE
    // ===========================

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");

        // Maximum 16 digits
        value = value.substring(0, 16);

        // Add space after every 4 digits
        value = value.replace(/(.{4})/g, "$1 ").trim();

        setCardNumber(value);
    };

    // ===========================
    // EXPIRY DATE CHANGE
    // ===========================

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");

        // Maximum 4 digits
        value = value.substring(0, 4);

        if (value.length >= 3) {
            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);
        }

        setExpiryDate(value);
    };

    // ===========================
    // SAVE CARD
    // ===========================

    const handleSaveCard = (e) => {
        e.preventDefault();

        const cleanCardNumber =
            cardNumber.replace(/\s/g, "");

        if (!cardHolderName.trim()) {
            setCardMessage(
                "Please enter card holder name."
            );
            return;
        }

        if (cleanCardNumber.length !== 16) {
            setCardMessage(
                "Please enter a valid 16-digit card number."
            );
            return;
        }

        if (expiryDate.length !== 5) {
            setCardMessage(
                "Please enter a valid expiry date."
            );
            return;
        }

        const cardData = {
            cardHolderName: cardHolderName.trim(),
            cardNumber: cleanCardNumber,
            expiryDate
        };

        localStorage.setItem(
            "savedCard",
            JSON.stringify(cardData)
        );

        setSavedCard(cardData);

        setCardMessage("Card saved successfully.");

        setShowCardForm(false);

        setCardHolderName("");
        setCardNumber("");
        setExpiryDate("");
    };

    // ===========================
    // DELETE CARD
    // ===========================

    const handleDeleteCard = () => {
        localStorage.removeItem("savedCard");

        setSavedCard(null);

        setCardMessage(
            "Saved card deleted successfully."
        );
    };

    // ===========================
    // LOGOUT
    // ===========================

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <main>

            {/* =====================================================
                PROFILE CONTAINER
            ===================================================== */}

            <section className="profile-container">

                {/* =====================================================
                    SIDEBAR
                ===================================================== */}

                <div className="profile-sidebar">

                    <h2>My Account</h2>

                    {/* ===========================
                        ORDERS & CREDITS
                    =========================== */}

                    <div className="sidebar-section">

                        <h3>Orders & Credits</h3>

                        <ul>

                            <li>
                                <a href="/orders">
                                    Orders and Refunds
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    AJIO Wallet
                                    <span className="new-badge">
                                        New
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Invite Friends & Earn
                                    <span className="new-badge">
                                        New
                                    </span>
                                </a>

                                <p className="invite-text">
                                    Earn ₹100 AJIO Cash for every friend you invite
                                </p>
                            </li>

                            <li>
                                <a href="#">
                                    My Rewards
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Customer Care
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* ===========================
                        PROFILE
                    =========================== */}

                    <div className="sidebar-section">

                        <h3>Profile</h3>

                        <ul>

                            {/* PERSONAL INFORMATION */}

                            <li
                                className={
                                    !showAddressBook && !showPayments
                                        ? "active"
                                        : ""
                                }
                            >
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();

                                        setShowAddressBook(false);
                                        setEditingAddress(false);
                                        setShowPayments(false);
                                    }}
                                >
                                    Personal Information
                                </a>
                            </li>

                            {/* ADDRESS BOOK */}

                            <li
                                className={
                                    showAddressBook
                                        ? "active"
                                        : ""
                                }
                            >
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();

                                        setShowAddressBook(true);
                                        setEditingAddress(false);
                                        setShowPayments(false);
                                    }}
                                >
                                    Address Book
                                </a>
                            </li>

                            {/* PAYMENTS */}

                            <li
                                className={
                                    showPayments
                                        ? "active"
                                        : ""
                                }
                            >
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();

                                        setShowPayments(true);
                                        setShowAddressBook(false);
                                        setEditingAddress(false);
                                    }}
                                >
                                    Payments
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* =====================================================
                        AJIO LUXE
                    ===================================================== */}

                    <div className="luxe-card">

                        <h3>AJIO LUXE</h3>

                        <p>
                            Your access to luxury
                        </p>

                        <a href="#">
                            EXPLORE
                        </a>

                    </div>

                    {/* =====================================================
                        LOGOUT
                    ===================================================== */}

                    <div className="logout-section">

                        <button
                            type="button"
                            onClick={handleLogout}
                        >

                            <span className="material-symbols-outlined">
                                logout
                            </span>

                            Logout

                        </button>

                    </div>

                </div>

                {/* =====================================================
                    MAIN CONTENT
                ===================================================== */}

                <div className="profile-content">

                    {/* =====================================================
                        PAYMENTS PAGE
                    ===================================================== */}

                    {showPayments ? (

                        <div className="payments-page">

                            <h2 className="payments-title">
                                Payments
                            </h2>

                            <p className="payments-subtitle">
                                View and edit your payment Modes
                            </p>

                            <div className="payments-divider"></div>

                            <div className="saved-card-section">

                                <h3>
                                    My Saved Card
                                </h3>

                                {/* =================================================
                                    SAVED CARD
                                ================================================= */}

                                {savedCard ? (

                                    <div className="saved-card-content">

                                        <div className="saved-card-box">

                                            <div className="saved-card-top">

                                                <span>
                                                    Card
                                                </span>

                                                <span>
                                                    💳
                                                </span>

                                            </div>

                                            <div className="saved-card-number">

                                                **** **** ****{" "}
                                                {savedCard.cardNumber.slice(-4)}

                                            </div>

                                            <div className="saved-card-bottom">

                                                <div>

                                                    <small>
                                                        CARD HOLDER
                                                    </small>

                                                    <strong>
                                                        {savedCard.cardHolderName}
                                                    </strong>

                                                </div>

                                                <div>

                                                    <small>
                                                        EXPIRY
                                                    </small>

                                                    <strong>
                                                        {savedCard.expiryDate}
                                                    </strong>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="saved-card-actions">

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setShowCardForm(true);
                                                    setCardMessage("");
                                                    setCardHolderName(
                                                        savedCard.cardHolderName
                                                    );
                                                    setCardNumber(
                                                        savedCard.cardNumber.replace(
                                                            /(.{4})/g,
                                                            "$1 "
                                                        ).trim()
                                                    );
                                                    setExpiryDate(
                                                        savedCard.expiryDate
                                                    );
                                                }}
                                            >
                                                Edit Card
                                            </button>

                                            <button
                                                type="button"
                                                onClick={handleDeleteCard}
                                            >
                                                Delete Card
                                            </button>

                                        </div>

                                    </div>

                                ) : (

                                    <div className="saved-card-content">

                                        <button
                                            type="button"
                                            className="add-card-button"
                                            onClick={() => {
                                                setShowCardForm(true);
                                                setCardMessage("");
                                            }}
                                        >
                                            + Add New Card
                                        </button>

                                    </div>

                                )}

                                {/* =================================================
                                    ADD / EDIT CARD FORM
                                ================================================= */}

                                {showCardForm && (

                                    <div className="card-form-box">

                                        <div className="card-form-header">

                                            <h3>
                                                {savedCard
                                                    ? "Edit Card"
                                                    : "Add New Card"}
                                            </h3>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setShowCardForm(false);
                                                    setCardMessage("");
                                                }}
                                            >
                                                ×
                                            </button>

                                        </div>

                                        <form onSubmit={handleSaveCard}>

                                            {/* CARD HOLDER */}

                                            <div className="card-form-group">

                                                <label>
                                                    Card Holder Name *
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter card holder name"
                                                    value={cardHolderName}
                                                    onChange={(e) =>
                                                        setCardHolderName(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                            </div>

                                            {/* CARD NUMBER */}

                                            <div className="card-form-group">

                                                <label>
                                                    Card Number *
                                                </label>

                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    placeholder="1234 5678 9012 3456"
                                                    value={cardNumber}
                                                    onChange={
                                                        handleCardNumberChange
                                                    }
                                                    maxLength={19}
                                                    required
                                                />

                                            </div>

                                            {/* EXPIRY */}

                                            <div className="card-form-group">

                                                <label>
                                                    Expiry Date *
                                                </label>

                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    placeholder="MM/YY"
                                                    value={expiryDate}
                                                    onChange={
                                                        handleExpiryChange
                                                    }
                                                    maxLength={5}
                                                    required
                                                />

                                            </div>

                                            {/* MESSAGE */}

                                            {cardMessage && (
                                                <p className="card-message">
                                                    {cardMessage}
                                                </p>
                                            )}

                                            {/* BUTTONS */}

                                            <div className="card-form-buttons">

                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setShowCardForm(false);
                                                        setCardMessage("");
                                                    }}
                                                >
                                                    CANCEL
                                                </button>

                                                <button
                                                    type="submit"
                                                >
                                                    SAVE CARD
                                                </button>

                                            </div>

                                        </form>

                                    </div>

                                )}

                                {/* SUCCESS MESSAGE */}

                                {!showCardForm && cardMessage && (
                                    <p className="card-message">
                                        {cardMessage}
                                    </p>
                                )}

                            </div>

                        </div>

                    ) : showAddressBook ? (

                        /* =====================================================
                           ADDRESS BOOK PAGE
                        ===================================================== */

                        <div className="address-book">

                            {/* ADDRESS BOOK HEADING */}

                            <h2 className="address-book-title">
                                Address Book
                            </h2>

                            <p className="address-book-subtitle">
                                Save all your addresses for a faster checkout experience
                            </p>

                            {/* =================================================
                                EDIT ADDRESS FORM
                            ================================================= */}

                            {editingAddress ? (

                                <div className="address-edit-box">

                                    <div className="address-edit-header">

                                        <h3>
                                            Edit Address Details
                                        </h3>

                                        <button
                                            type="button"
                                            className="address-close-btn"
                                            onClick={() => {
                                                setEditingAddress(false);
                                                setAddressMessage("");
                                            }}
                                        >
                                            ×
                                        </button>

                                    </div>

                                    <form onSubmit={handleSaveAddress}>

                                        {/* NAME + MOBILE */}

                                        <div className="address-form-row">

                                            <div className="address-form-group">

                                                <label>
                                                    Name *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={address.name}
                                                    onChange={handleAddressChange}
                                                    required
                                                />

                                            </div>

                                            <div className="address-form-group">

                                                <label>
                                                    Mobile *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="mobile"
                                                    value={address.mobile}
                                                    onChange={handleAddressChange}
                                                    required
                                                />

                                            </div>

                                        </div>

                                        {/* PINCODE + LOCALITY */}

                                        <div className="address-form-row">

                                            <div className="address-form-group">

                                                <label>
                                                    Pin Code *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="pincode"
                                                    value={address.pincode}
                                                    onChange={handleAddressChange}
                                                    required
                                                />

                                            </div>

                                            <div className="address-form-group">

                                                <label>
                                                    Locality / Area / Street *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="locality"
                                                    value={address.locality}
                                                    onChange={handleAddressChange}
                                                    required
                                                />

                                            </div>

                                        </div>

                                        {/* BUILDING + LANDMARK */}

                                        <div className="address-form-row">

                                            <div className="address-form-group">

                                                <label>
                                                    Flat number / Building Name *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="building"
                                                    value={address.building}
                                                    onChange={handleAddressChange}
                                                    required
                                                />

                                            </div>

                                            <div className="address-form-group">

                                                <label>
                                                    Landmark *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="landmark"
                                                    value={address.landmark}
                                                    onChange={handleAddressChange}
                                                    required
                                                />

                                            </div>

                                        </div>

                                        {/* CITY + STATE */}

                                        <div className="address-form-row address-last-form-row">

                                            <div className="address-form-group">

                                                <label>
                                                    District / City *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={address.city}
                                                    onChange={handleAddressChange}
                                                    required
                                                />

                                            </div>

                                            <div className="address-form-group">

                                                <label>
                                                    State *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="state"
                                                    value={address.state}
                                                    onChange={handleAddressChange}
                                                    required
                                                />

                                            </div>

                                        </div>

                                        {/* ADDRESS TYPE */}

                                        <div className="address-type-section">

                                            <label className="address-type-title">
                                                Address Type
                                            </label>

                                            <div className="address-type-options">

                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="addressType"
                                                        value="Home"
                                                        checked={
                                                            address.addressType ===
                                                            "Home"
                                                        }
                                                        onChange={
                                                            handleAddressChange
                                                        }
                                                    />

                                                    Home
                                                </label>

                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="addressType"
                                                        value="Work"
                                                        checked={
                                                            address.addressType ===
                                                            "Work"
                                                        }
                                                        onChange={
                                                            handleAddressChange
                                                        }
                                                    />

                                                    Work
                                                </label>

                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="addressType"
                                                        value="Others"
                                                        checked={
                                                            address.addressType ===
                                                            "Others"
                                                        }
                                                        onChange={
                                                            handleAddressChange
                                                        }
                                                    />

                                                    Others
                                                </label>

                                            </div>

                                        </div>

                                        {/* DEFAULT ADDRESS */}

                                        <label className="default-address-checkbox">

                                            <input
                                                type="checkbox"
                                                checked={address.isDefault}
                                                onChange={(e) =>
                                                    setAddress({
                                                        ...address,
                                                        isDefault:
                                                            e.target.checked
                                                    })
                                                }
                                            />

                                            Make as default Address

                                        </label>

                                        {/* MESSAGE */}

                                        {addressMessage && (
                                            <p className="address-edit-message">
                                                {addressMessage}
                                            </p>
                                        )}

                                        {/* BUTTONS */}

                                        <div className="address-form-buttons">

                                            <button
                                                type="button"
                                                className="address-cancel-btn"
                                                onClick={() => {
                                                    setEditingAddress(false);
                                                    setAddressMessage("");
                                                }}
                                            >
                                                CANCEL
                                            </button>

                                            <button
                                                type="submit"
                                                className="address-save-btn"
                                            >
                                                SAVE ADDRESS
                                            </button>

                                        </div>

                                    </form>

                                </div>

                            ) : (

                                <>
                                    {/* =================================================
                                        ADDRESS CARD
                                    ================================================= */}

                                    <div className="address-list">

                                        {/* ADD NEW ADDRESS */}

                                        <button
                                            type="button"
                                            className="add-address-card"
                                            onClick={() => {
                                                setEditingAddress(true);
                                                setAddressMessage("");
                                            }}
                                        >

                                            <div className="add-address-plus">
                                                +
                                            </div>

                                            Add new address

                                        </button>

                                        {/* SAVED ADDRESS */}

                                        <div className="saved-address-card">

                                            <div className="saved-address-header">

                                                <strong>
                                                    {address.name ||
                                                        "Shivani Sonawane"}
                                                </strong>

                                                {address.isDefault && (
                                                    <span className="address-type-badge">
                                                        {address.addressType || "HOME"}
                                                    </span>
                                                )}

                                            </div>

                                            {address.isDefault && (
                                                <div className="default-address-text">
                                                    Default
                                                </div>
                                            )}

                                            <div className="saved-address-details">

                                                {address.building && (
                                                    <>
                                                        {address.building}
                                                        <br />
                                                    </>
                                                )}

                                                {address.locality && (
                                                    <>
                                                        {address.locality}
                                                        <br />
                                                    </>
                                                )}

                                                {address.landmark && (
                                                    <>
                                                        {address.landmark}
                                                        <br />
                                                    </>
                                                )}

                                                {address.city && (
                                                    <>
                                                        {address.city},{" "}
                                                    </>
                                                )}

                                                {address.state && (
                                                    <>
                                                        {address.state}
                                                    </>
                                                )}

                                                {address.pincode && (
                                                    <>
                                                        {" - "}
                                                        {address.pincode}
                                                    </>
                                                )}

                                            </div>

                                            {address.mobile && (
                                                <p className="saved-address-phone">
                                                    Phone:{" "}
                                                    {address.mobile}
                                                </p>
                                            )}

                                            {/* EDIT / DELETE */}

                                            <div className="address-actions">

                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setEditingAddress(true);
                                                        setAddressMessage("");
                                                    }}
                                                >
                                                    ✎ Edit
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => {

                                                        localStorage.removeItem(
                                                            "address"
                                                        );

                                                        setAddress({
                                                            name: "",
                                                            mobile: "",
                                                            pincode: "",
                                                            locality: "",
                                                            building: "",
                                                            landmark: "",
                                                            city: "",
                                                            state: "",
                                                            addressType:
                                                                "Home",
                                                            isDefault:
                                                                false
                                                        });

                                                        setAddressMessage(
                                                            "Address deleted successfully."
                                                        );

                                                    }}
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                            {/* ADDRESS SELECTED */}

                                            {address.isDefault && (
                                                <span className="address-selected">
                                                    Address Selected
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                    {/* SUCCESS / DELETE MESSAGE */}

                                    {addressMessage && (
                                        <p className="address-message">
                                            {addressMessage}
                                        </p>
                                    )}

                                </>

                            )}

                        </div>

                    ) : (

                        /* =====================================================
                           PERSONAL INFORMATION PAGE
                        ===================================================== */

                        <div className="personal-information">

                            <h2>
                                Personal Information
                            </h2>

                            {/* PERSONAL INFORMATION FORM */}

                            <form onSubmit={handleSaveChanges}>

                                {/* Row 1 */}

                                <div className="form-row">

                                    <div className="form-group">

                                        <label>
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(
                                                    e.target.value
                                                )
                                            }
                                        />

                                    </div>

                                    <div className="form-group">

                                        <label>
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(
                                                    e.target.value
                                                )
                                            }
                                        />

                                    </div>

                                </div>

                                {/* Row 2 */}

                                <div className="form-row">

                                    <div className="form-group">

                                        <label>
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(
                                                    e.target.value
                                                )
                                            }
                                        />

                                    </div>

                                    <div className="form-group">

                                        <label>
                                            Mobile Number
                                        </label>

                                        <input
                                            type="text"
                                            value={mobile}
                                            onChange={(e) =>
                                                setMobile(
                                                    e.target.value
                                                )
                                            }
                                        />

                                    </div>

                                </div>

                                {/* Gender */}

                                <div className="form-group gender-group">

                                    <label>
                                        Gender
                                    </label>

                                    <div className="gender-options">

                                        <label>

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                                checked={
                                                    gender === "Male"
                                                }
                                                onChange={(e) =>
                                                    setGender(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            Male

                                        </label>

                                        <label>

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                                checked={
                                                    gender === "Female"
                                                }
                                                onChange={(e) =>
                                                    setGender(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            Female

                                        </label>

                                        <label>

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Other"
                                                checked={
                                                    gender === "Other"
                                                }
                                                onChange={(e) =>
                                                    setGender(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            Other

                                        </label>

                                    </div>

                                </div>

                                {/* Date of Birth */}

                                <div className="form-group dob-group">

                                    <label>
                                        Date of Birth
                                    </label>

                                    <input
                                        type="date"
                                        value={dob}
                                        onChange={(e) =>
                                            setDob(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                                {/* Save Changes */}

                                <div className="save-btn">

                                    <button type="submit">
                                        SAVE CHANGES
                                    </button>

                                </div>

                            </form>

                            {/* Profile Message */}

                            {message && (
                                <p className="profile-message">
                                    {message}
                                </p>
                            )}

                            <hr className="profile-divider" />

                            {/* =================================================
                                CHANGE PASSWORD
                            ================================================= */}

                            <h2 className="password-heading">
                                Change Password
                            </h2>

                            <div className="password-row">

                                {/* Current Password */}

                                <div className="password-group">

                                    <label>
                                        Current Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter current password"
                                        value={currentPassword}
                                        onChange={(e) =>
                                            setCurrentPassword(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                                {/* New Password */}

                                <div className="password-group">

                                    <label>
                                        New Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) =>
                                            setNewPassword(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                                {/* Confirm Password */}

                                <div className="password-group">

                                    <label>
                                        Confirm New Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                                {/* Update Password */}

                                <button
                                    type="button"
                                    className="update-btn"
                                    onClick={
                                        handleUpdatePassword
                                    }
                                >
                                    UPDATE PASSWORD
                                </button>

                                <div className="clear"></div>

                            </div>

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
};

export default Profile;
