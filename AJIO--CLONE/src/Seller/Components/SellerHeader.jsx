import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "../CSS/Seller-header.css";

const SellerHeader = () => {

    const navigate = useNavigate();


    // =========================
    // NOTIFICATION DROPDOWN
    // =========================

    const [showNotifications, setShowNotifications] = useState(false);


    // =========================
    // UNREAD NOTIFICATION COUNT
    // =========================

    const [unreadCount, setUnreadCount] = useState(() => {

        const savedCount = localStorage.getItem(
            "sellerUnreadNotifications"
        );

        return savedCount !== null
            ? Number(savedCount)
            : 3;
    });


    // =========================
    // NOTIFICATIONS
    // =========================

    const [notifications, setNotifications] = useState(() => {

        const savedNotifications =
            localStorage.getItem("sellerNotifications");

        if (savedNotifications !== null) {

            return JSON.parse(savedNotifications);

        }

        return [

            {
                id: 1,
                message: "New order received.",
                time: "5 min ago",
                path: "/seller/orders"
            },

            {
                id: 2,
                message: "Product approved successfully.",
                time: "1 hour ago",
                path: "/seller/products"
            },

            {
                id: 3,
                message: "Running Sneakers stock is low.",
                time: "3 hours ago",
                path: "/seller/products"
            }

        ];

    });


    // =========================
    // NOTIFICATION REF
    // =========================

    const notificationRef = useRef(null);


    // =========================
    // CLOSE DROPDOWN
    // WHEN CLICKING OUTSIDE
    // =========================

    useEffect(() => {

        const handleOutsideClick = (event) => {

            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {

                setShowNotifications(false);

            }

        };


        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );


        return () => {

            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );

        };

    }, []);


    // =========================
    // MARK ALL AS READ
    // =========================

    const handleMarkAllRead = () => {

        setUnreadCount(0);

        localStorage.setItem(
            "sellerUnreadNotifications",
            "0"
        );

    };


    // =========================
    // CLEAR ALL NOTIFICATIONS
    // =========================

    const handleClearNotifications = () => {

        setNotifications([]);

        setUnreadCount(0);


        // SAVE EMPTY NOTIFICATION LIST

        localStorage.setItem(
            "sellerNotifications",
            JSON.stringify([])
        );


        // SAVE UNREAD COUNT

        localStorage.setItem(
            "sellerUnreadNotifications",
            "0"
        );

    };


    return (

        <header className="seller-header">


            {/* =========================
                AJIO LOGO
            ========================== */}

            <div className="seller-navbar-left">

                <img
                    src="https://assets-jiocdn.ajio.com/static/img/Ajio-Logo.svg"
                    alt="AJIO"
                    className="seller-navbar-logo"
                />

            </div>


            {/* =========================
                NAVIGATION
            ========================== */}

            <nav className="seller-navbar-menu">


                {/* DASHBOARD */}

                <NavLink
                    to="/seller/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "seller-nav-link active"
                            : "seller-nav-link"
                    }
                >

                    <span className="material-symbols-outlined seller-nav-icon dashboard-icon">
                        home
                    </span>

                    <span>
                        Dashboard
                    </span>

                </NavLink>


                {/* CREATE PRODUCT */}

                <NavLink
                    to="/seller/create-product"
                    className={({ isActive }) =>
                        isActive
                            ? "seller-nav-link active"
                            : "seller-nav-link"
                    }
                >

                    <span className="material-symbols-outlined seller-nav-icon create-icon">
                        add_circle
                    </span>

                    <span>
                        Create Product
                    </span>

                </NavLink>


                {/* PRODUCTS */}

                <NavLink
                    to="/seller/products"
                    className={({ isActive }) =>
                        isActive
                            ? "seller-nav-link active"
                            : "seller-nav-link"
                    }
                >

                    <span className="material-symbols-outlined seller-nav-icon products-icon">
                        inventory_2
                    </span>

                    <span>
                        Products
                    </span>

                </NavLink>


                {/* ORDERS */}

                <NavLink
                    to="/seller/orders"
                    className={({ isActive }) =>
                        isActive
                            ? "seller-nav-link active"
                            : "seller-nav-link"
                    }
                >

                    <span className="material-symbols-outlined seller-nav-icon orders-icon">
                        receipt_long
                    </span>

                    <span>
                        Orders
                    </span>

                </NavLink>


                {/* PROFIT */}

                <NavLink
                    to="/seller/profit"
                    className={({ isActive }) =>
                        isActive
                            ? "seller-nav-link active"
                            : "seller-nav-link"
                    }
                >

                    <span className="material-symbols-outlined seller-nav-icon profit-icon">
                        monitoring
                    </span>

                    <span>
                        Profit
                    </span>

                </NavLink>

            </nav>


            {/* =========================
                RIGHT SIDE
            ========================== */}

            <div className="seller-navbar-right">


                {/* =========================
                    NOTIFICATION
                ========================== */}

                <div
                    className="seller-notification-wrapper"
                    ref={notificationRef}
                >


                    {/* BELL ICON */}

                    <div
                        className="seller-notification-icon-box"
                        onClick={() =>
                            setShowNotifications(
                                !showNotifications
                            )
                        }
                    >

                        <span className="material-symbols-outlined seller-notification">
                            notifications
                        </span>


                        {/* UNREAD COUNT */}

                        {unreadCount > 0 && (

                            <span className="seller-notification-count">

                                {unreadCount}

                            </span>

                        )}

                    </div>


                    {/* =========================
                        NOTIFICATION DROPDOWN
                    ========================== */}

                    {showNotifications && (

                        <div className="seller-notification-dropdown">


                            {/* DROPDOWN HEADER */}

                            <div className="seller-notification-dropdown-header">

                                <h3>
                                    Notifications
                                </h3>


                                {/* MARK ALL AS READ */}

                                {unreadCount > 0 && (

                                    <button
                                        className="seller-mark-read-btn"
                                        onClick={handleMarkAllRead}
                                    >
                                        Mark all as read
                                    </button>

                                )}


                                {/* CLEAR ALL */}

                                {notifications.length > 0 && (

                                    <button
                                        className="seller-clear-notification-btn"
                                        onClick={handleClearNotifications}
                                    >
                                        Clear All
                                    </button>

                                )}

                            </div>


                            {/* =========================
                                NOTIFICATION LIST
                            ========================== */}

                            {notifications.length > 0 ? (

                                notifications.map(
                                    (notification) => (

                                        <div
                                            key={notification.id}
                                            className="seller-notification-item"
                                            onClick={() => {

                                                navigate(
                                                    notification.path
                                                );

                                                setShowNotifications(
                                                    false
                                                );

                                            }}
                                        >

                                            <p>
                                                {notification.message}
                                            </p>

                                            <span>
                                                {notification.time}
                                            </span>

                                        </div>

                                    )
                                )

                            ) : (

                                <p className="seller-no-notifications">

                                    No notifications

                                </p>

                            )}

                        </div>

                    )}

                </div>


                {/* =========================
                    PROFILE
                ========================== */}

                <div
                    className="seller-profile"
                    onClick={() =>
                        navigate("/seller/profile")
                    }
                >

                    <span className="material-symbols-outlined seller-profile-icon">
                        account_circle
                    </span>


                    <div className="seller-profile-text">

                        <span className="seller-profile-name">
                            Rahul Sharma
                        </span>

                        <span className="seller-profile-role">
                            Seller
                        </span>

                    </div>

                </div>

            </div>

        </header>

    );
};

export default SellerHeader;