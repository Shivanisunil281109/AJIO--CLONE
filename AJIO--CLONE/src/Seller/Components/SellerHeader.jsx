import React from "react";
import { NavLink, useNavigate } from "react-router";
import "../CSS/Seller-header.css";

const SellerHeader = () => {

    const navigate = useNavigate();

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

                {/* NOTIFICATION */}

                <span className="material-symbols-outlined seller-notification">
                    notifications
                </span>


                {/* PROFILE */}

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