import React, { useState } from "react";
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

    <a href="#">MEN</a>

    {/* Mega Menu */}
    <div className="mega-menu">

        {/* Top Tabs */}
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


        {/* Categories Page */}
        <div className="categories-page">

            <div className="menu-content">

                {/* Column 1 */}
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


                {/* Column 2 */}
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


                {/* Column 3 */}
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


                {/* Column 4 */}
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


                {/* Column 5 */}
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