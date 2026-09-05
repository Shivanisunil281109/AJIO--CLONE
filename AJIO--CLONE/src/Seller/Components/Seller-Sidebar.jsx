import React from "react";
import { Link, useLocation } from "react-router";
import "../CSS/Seller-sidebar.css";




const SellerSidebar = () => {
    const location = useLocation();

    return (
        <aside className="sidebar">

            {/* ==========================
                LOGO
            =========================== */}

            <div className="sidebar-logo">
                <img
                    src="https://assets-jiocdn.ajio.com/static/img/Ajio-Logo.svg"
                    alt="AJIO Logo"
                />
            </div>


            {/* ==========================
                SELLER NAME
            =========================== */}

            <div className="seller-title">
                AJIO Seller
            </div>


            {/* ==========================
                SIDEBAR MENU
            =========================== */}

            <ul className="sidebar-menu">

                {/* Dashboard */}

                <li className={location.pathname === "/seller/dashboard" ? "active" : ""}>

                    <Link to="/seller/dashboard">

                        <span className="material-symbols-outlined">
                            home
                        </span>

                        Dashboard

                    </Link>

                </li>


                {/* Create Product */}

                <li className={location.pathname === "/seller/create-product" ? "active" : ""}>

                    <Link to="/seller/create-product">

                        <span className="material-symbols-outlined">
                            add_box
                        </span>

                        Create Product

                    </Link>

                </li>


                {/* Products */}

                <li className={location.pathname === "/seller/products" ? "active" : ""}>

                    <Link to="/seller/products">

                        <span className="material-symbols-outlined">
                            inventory_2
                        </span>

                        Products

                    </Link>

                </li>


                {/* Orders */}

                <li className={location.pathname === "/seller/orders" ? "active" : ""}>

                    <Link to="/seller/orders">

                        <span className="material-symbols-outlined">
                            receipt_long
                        </span>

                        Orders

                    </Link>

                </li>


                {/* Returns */}

                <li className={location.pathname === "/seller/returns" ? "active" : ""}>

                    <Link to="/seller/returns">

                        <span className="material-symbols-outlined">
                            assignment_return
                        </span>

                        Returns

                    </Link>

                </li>


                {/* Payments */}

                <li className={location.pathname === "/seller/payments" ? "active" : ""}>

                    <Link to="/seller/payments">

                        <span className="material-symbols-outlined">
                            payments
                        </span>

                        Payments

                    </Link>

                </li>


                {/* Profit */}

                <li className={location.pathname === "/seller/profit" ? "active" : ""}>

                    <Link to="/seller/profit">

                        <span className="material-symbols-outlined">
                            monitoring
                        </span>

                        Profit

                    </Link>

                </li>


                {/* Settings */}

                <li className={location.pathname === "/seller/profile" ? "active" : ""}>

                    <Link to="/seller/profile">

                        <span className="material-symbols-outlined">
                            settings
                        </span>

                        Settings

                    </Link>

                </li>

            </ul>


            {/* ==========================
                LOGOUT
            =========================== */}

            <div className="sidebar-logout">

                <Link to="/login">

                    <span className="material-symbols-outlined">
                        logout
                    </span>

                    Logout

                </Link>

            </div>

        </aside>
    );
};

export default SellerSidebar;