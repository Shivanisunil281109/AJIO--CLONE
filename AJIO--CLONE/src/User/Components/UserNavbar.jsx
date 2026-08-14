import React from "react";
import "../CSS/UserNavbar.css";

const UserNavbar = () => {
    return (
        <header className="header">

            {/* ================= TOP NAVBAR ================= */}
            <div className="top-navbar">

                <a href="/login">
                    Sign In / Join AJIO
                </a>

                <a href="#">
                    Customer Care
                </a>

                <button>
                    Visit AJIOLUXE
                </button>

            </div>


            {/* ================= MAIN NAVBAR ================= */}
            <nav className="navbar">

                {/* LOGO */}
                <div className="logo">
                    <img
                        src="https://assets-jiocdn.ajio.com/static/img/Ajio-Logo.svg"
                        alt="AJIO Logo"
                    />
                </div>


                {/* NAV LINKS */}
                <div className="nav-links">

                    <div className="menu-item">
                        <a href="/products">
                            MEN
                        </a>
                    </div>

                    <div className="menu-item">
                        <a href="/women">
                            WOMEN
                        </a>
                    </div>

                    <div className="menu-item">
                        <a href="/kids">
                            KIDS
                        </a>
                    </div>

                    <div className="menu-item">
                        <a href="/beauty">
                            BEAUTY
                        </a>
                    </div>

                    <div className="menu-item">
                        <a href="/home-kitchen">
                            HOME & KITCHEN
                        </a>
                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div className="nav-right">

                    {/* SEARCH */}
                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="Search AJIO"
                        />

                        <span className="material-symbols-outlined search-icon">
                            search
                        </span>

                    </div>


                    {/* WISHLIST */}
                    <div className="wishlist-icon">

                        <img
                            src="https://cdn.pixelbin.io/v2/dry-wildflower-b77541/original/svg/wishlistIcon.svg"
                            alt="wishlist"
                        />

                    </div>


                    {/* BAG */}
                    <div className="icon-circle">

                        <span className="material-symbols-outlined">
                            local_mall
                        </span>

                    </div>

                </div>

            </nav>

        </header>
    );
};

export default UserNavbar;