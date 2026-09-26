import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "../CSS/UserNavbar.css";


const UserNavbar = () => {

    // ================= CART COUNT =================

    const [cartCount, setCartCount] = useState(() => {

        const savedCart =
            JSON.parse(localStorage.getItem("cart")) || [];

        return savedCart.length;

    });


    // ================= UPDATE CART COUNT =================

    useEffect(() => {

        const updateCartCount = () => {

            const savedCart =
                JSON.parse(localStorage.getItem("cart")) || [];

            setCartCount(savedCart.length);

        };


        // Update when Local Storage changes from another tab
        window.addEventListener(
            "storage",
            updateCartCount
        );


        // Update immediately when cart changes in same tab
        window.addEventListener(
            "cartUpdated",
            updateCartCount
        );


        return () => {

            window.removeEventListener(
                "storage",
                updateCartCount
            );

            window.removeEventListener(
                "cartUpdated",
                updateCartCount
            );

        };

    }, []);


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


                {/* ================= NAV LINKS ================= */}

                <div className="nav-links">


                    {/* ================= MEN ================= */}

                    <div className="menu-item">

                        <a href="#">
                            MEN
                        </a>


                        {/* ================= MEGA MENU ================= */}

                        <div className="mega-menu">


                            {/* TOP TABS */}

                            <div className="menu-tabs">

                                <div className="tab">
                                    Shop By
                                </div>

                                <div className="tab active">
                                    Categories
                                </div>

                                <div className="tab">
                                    Brands
                                </div>

                            </div>


                            {/* ================= CATEGORIES PAGE ================= */}

                            <div className="categories-page">

                                <div className="menu-content">


                                    {/* COLUMN 1 */}

                                    <div className="column">

                                        <h3>CLOTHING</h3>
                                        <h3>FOOTWEAR</h3>
                                        <h3>ACCESSORIES</h3>
                                        <h3>ALL THAT'S NEW</h3>

                                        <p>Clothing</p>
                                        <p>Footwear</p>
                                        <p>Accessories</p>

                                        <h3>AJIO GLOBAL</h3>
                                        <h3>PLUS SIZE</h3>
                                        <h3>NIGHT & LOUNGEWEAR</h3>
                                        <h3>GROOMING</h3>

                                    </div>


                                    {/* COLUMN 2 */}

                                    <div className="column">

                                        <h3>WINTER WEAR</h3>

                                        <p>Blazers & Waistcoats</p>
                                        <p>Jackets & Coats</p>
                                        <p>Sweaters & Cardigans</p>
                                        <p>Sweatshirts & Hoodies</p>

                                        <br />

                                        <h3>WESTERN WEAR</h3>

                                        <p>Jeans</p>
                                        <p>Shirts</p>
                                        <p>Shorts & 3/4ths</p>
                                        <p>Suit Sets</p>
                                        <p>Track Pants</p>
                                        <p>Tracksuits</p>
                                        <p>Trousers & Pants</p>
                                        <p>T-Shirts</p>

                                    </div>


                                    {/* COLUMN 3 */}

                                    <div className="column">

                                        <h3>FOOTWEAR</h3>

                                        <p>Boots</p>
                                        <p>Casual Shoes</p>
                                        <p>Flip Flops & Slippers</p>
                                        <p>Formal Shoes</p>
                                        <p>Sandals</p>
                                        <p>Sneakers</p>
                                        <p>Sports Shoes</p>

                                        <br />

                                        <h3>ETHNIC WEAR</h3>

                                        <p>Ethnic Jackets</p>
                                        <p>Ethnic Suit Sets</p>
                                        <p>Kurtas</p>
                                        <p>Pyjamas & Churidars</p>
                                        <p>Sherwani Sets</p>
                                        <p>Stoles</p>

                                    </div>


                                    {/* COLUMN 4 */}

                                    <div className="column">

                                        <h3>ACCESSORIES</h3>

                                        <p>Backpacks</p>
                                        <p>Belts</p>
                                        <p>Caps & Hats</p>
                                        <p>Luggage & Trolley Bags</p>
                                        <p>Perfumes & Colognes</p>
                                        <p>Socks</p>
                                        <p>Sunglasses</p>
                                        <p>Wallets</p>
                                        <p>Watches</p>

                                        <br />

                                        <h3>INNERWEAR</h3>

                                        <p>Boxers</p>
                                        <p>Briefs</p>
                                        <p>Pyjamas</p>
                                        <p>Thermal Wear</p>
                                        <p>Trunks</p>

                                    </div>


                                    {/* COLUMN 5 */}

                                    <div className="column">

                                        <h3>FASHION JEWELLERY</h3>

                                        <p>Bracelets & Kadas</p>
                                        <p>Chains</p>
                                        <p>Cufflinks & Tiepins</p>
                                        <p>Earrings</p>
                                        <p>Rings</p>

                                        <br />

                                        <h3>GADGETS</h3>

                                        <p>Smart Wearables</p>
                                        <p>Fitness Gadgets</p>
                                        <p>Headphones</p>
                                        <p>Speakers</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= WOMEN ================= */}

                    <div className="menu-item">

                        <a href="/women">
                            WOMEN
                        </a>

                    </div>


                    {/* ================= KIDS ================= */}

                    <div className="menu-item">

                        <a href="/kids">
                            KIDS
                        </a>

                    </div>


                    {/* ================= BEAUTY ================= */}

                    <div className="menu-item">

                        <a href="/beauty">
                            BEAUTY
                        </a>

                    </div>


                    {/* ================= HOME & KITCHEN ================= */}

                    <div className="menu-item">

                        <a href="/home-kitchen">
                            HOME & KITCHEN
                        </a>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div className="nav-right">


                    {/* ================= SEARCH ================= */}

                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="Search AJIO"
                        />

                        <span className="material-symbols-outlined search-icon">
                            search
                        </span>

                    </div>


                    {/* ================= WISHLIST ================= */}

                    <div className="wishlist-icon">

                        <Link to="/wishlist">

                            <img
                                src="https://cdn.pixelbin.io/v2/dry-wildflower-b77541/original/svg/wishlistIcon.svg"
                                alt="wishlist"
                            />

                        </Link>

                    </div>


                    {/* ================= BAG ================= */}

                    <div className="icon-circle">

                        <Link to="/Cart">

                            <span className="material-symbols-outlined">
                                local_mall
                            </span>


                            {/* CART PRODUCT COUNT */}

                            {cartCount > 0 && (

                                <span className="cart-count">
                                    {cartCount}
                                </span>

                            )}

                        </Link>

                    </div>


                </div>

            </nav>

        </header>

    );

};

export default UserNavbar;