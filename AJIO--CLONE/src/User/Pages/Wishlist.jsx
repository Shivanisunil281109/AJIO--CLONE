import React, { useState } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";

import "../CSS/Wishlist.css";

const Wishlist = () => {

    const dispatch = useDispatch();

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

        dispatch(
    showToast({
        message: "Product removed from Wishlist ❤️",
        type: "success"
    })
    
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

                        <Link
                            to="/"
                            className="continue-btn"
                        >
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

                                {/* ================= PRODUCT IMAGE ================= */}

                                <img
                                    src={
                                        product.mainImage ||
                                        product.image
                                    }
                                    alt={product.name}
                                />


                                {/* ================= PRODUCT INFORMATION ================= */}

                                <div className="wishlist-product-info">


                                    {/* BRAND NAME */}

                                    <h3 className="wishlist-brand">
                                        {product.brand}
                                    </h3>


                                    {/* PRODUCT NAME */}

                                    <p className="wishlist-product-name">
                                        {product.name}
                                    </p>


                                    {/* ================= PRICE DETAILS ================= */}

                                    <div className="wishlist-price-row">


                                        {/* CURRENT PRICE */}

                                        <span className="wishlist-current-price">
                                            ₹{String(product.price).replace("₹", "")}
                                        </span>


                                        {/* OLD PRICE */}

                                        {product.oldPrice && (

                                            <span className="wishlist-old-price">
                                                ₹{String(product.oldPrice).replace("₹", "")}
                                            </span>

                                        )}


                                        {/* DISCOUNT / OFFER */}

                                        {product.discount && (

                                            <span className="wishlist-discount">
                                                {product.discount}
                                            </span>

                                        )}

                                    </div>


                                    {/* ================= REMOVE BUTTON ================= */}

                                    <button
                                        className="wishlist-remove-btn"
                                        onClick={() =>
                                            handleRemove(product.id)
                                        }
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