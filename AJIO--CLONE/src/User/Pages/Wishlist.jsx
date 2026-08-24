import React from "react";
import { Link } from "react-router";

import "../CSS/Wishlist.css";

const Wishlist = () => {
    return (
        <main className="wishlist-page">

            <section className="wishlist-container">

                <h1>My Wishlist</h1>

                <p className="wishlist-empty">
                    Your Wishlist is empty!!
                </p>

                <p className="wishlist-info">
                    ADD A FEW PRODUCTS AND THEN EXPLORE THE COOLEST WAY
                    TO SHOP CLOTHES ONLINE!
                </p>

                <Link to="/" className="continue-btn">
                    CONTINUE SHOPPING
                </Link>

            </section>

        </main>
    );
};

export default Wishlist;

