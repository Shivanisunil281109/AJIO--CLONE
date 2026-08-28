import React, { useState } from "react";
import { Link } from "react-router";

import "../CSS/Wishlist.css";

const Wishlist = () => {

    // ================= WISHLIST DATA =================

    const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem("wishlist")) || []
    );


// ================= REMOVE FROM WISHLIST =================

const handleRemove = (productId) => {

    const updatedWishlist = wishlist.filter(
        (product) => product.id !== productId
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
    );

};












    return (
        <main className="wishlist-page">

            <section className="wishlist-container">

                <h1>My Wishlist</h1>


                {/* ================= EMPTY WISHLIST ================= */}

                {wishlist.length === 0 ? (

                    <>
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
                    </>

                ) : (


                    /* ================= WISHLIST PRODUCTS ================= */

                    <div className="wishlist-products">

                        {wishlist.map((product) => (

                            <div
                                className="wishlist-product-card"
                                key={product.id}
                            >

                                {/* PRODUCT IMAGE */}

                                <img
                                    src={
                                        product.mainImage ||
                                        product.image
                                    }
                                    alt={product.name}
                                />


                                {/* PRODUCT INFORMATION */}

                                <div className="wishlist-product-info">

                                    <h3>
                                        {product.brand}
                                    </h3>

                                    <p>
                                        {product.name}
                                    </p>

                                    <h4>
                                        {product.price}
                                    </h4>




                           <button
                            className="wishlist-remove-btn"
                            onClick={() => handleRemove(product.id)}
                                >
                                REMOVE
                              </button>





                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>

        </main>
    );
};

export default Wishlist;