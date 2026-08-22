import React, { useState } from "react";
import { useParams } from "react-router";
import "../CSS/SingleProduct.css";
import products from "../Data/productData";


const SingleProduct = () => {

    // Get product ID from URL
    const { productId } = useParams();

    // Find selected product
    const product = products.find(
        (item) => item.id === Number(productId)
    );


    // If product is not found
    if (!product) {

        return (
            <div className="product-not-found">

                <h1>
                    Product Not Found
                </h1>

                <p>
                    The product you are looking for does not exist.
                </p>

            </div>
        );

    }


    // ================= SELECTED IMAGE =================

    const [selectedImage, setSelectedImage] = useState(
        product.images?.[0] || product.image
    );


    return (
        <>

            {/* ================= BREADCRUMB ================= */}

            <div className="breadcrumb">

                <a href="/">
                    Home
                </a>

                <span>/</span>

                <a href="/MenProducts">
                    Men
                </a>

                <span>/</span>

                <a href="#">
                    {product.category}
                </a>

                <span>/</span>

                <span className="current-page">
                    {product.name}
                </span>

            </div>


            {/* ================= MAIN PRODUCT PAGE ================= */}

            <main className="single-product-page">

                <div className="single-product-container">


                    {/* ================= THUMBNAILS ================= */}

                    <div className="thumbnail-gallery">

                        {product.images && product.images.length > 0 ? (

                            product.images.map((image, index) => (

                                <img
                                    key={index}
                                    src={image.trim()}
                                    alt={`${product.name} ${index + 1}`}
                                    onClick={() =>
                                        setSelectedImage(image.trim())
                                    }
                                    className={
                                        selectedImage === image.trim()
                                            ? "active-thumbnail"
                                            : ""
                                    }
                                />

                            ))

                        ) : (

                            <img
                                src={product.image}
                                alt={product.name}
                                onClick={() =>
                                    setSelectedImage(product.image)
                                }
                            />

                        )}

                    </div>


                    {/* ================= MAIN IMAGE ================= */}

                    <div className="main-product-image">

                      <img
                       src={product.mainImage}
                        alt={product.name}
                          /> 

                    </div>


                    {/* ================= PRODUCT DETAILS ================= */}

                    <div className="product-details">


                        {/* Brand */}

                        <h2 className="brand-name">
                            {product.brand}
                        </h2>


                        {/* Product Name */}

                        <h1 className="product-title">
                            {product.name}
                        </h1>


                        {/* ================= RATING ================= */}

                        <div className="product-rating">

                            <span className="rating-badge">

                                {product.rating} ★

                            </span>

                            <span className="rating-count">

                                {product.reviews} Ratings

                            </span>

                        </div>


                        {/* ================= PRICE ================= */}

                        <div className="price-section">

                            <h2 className="current-price">
                                {product.price}
                            </h2>


                            <div className="mrp-row">

                                <span className="mrp-text">
                                    MRP
                                </span>

                                <span className="old-price">
                                    {product.oldPrice}
                                </span>

                                <span className="discount">
                                    {product.discount}
                                </span>

                            </div>


                            <p className="tax-text">
                                Price inclusive of all taxes
                            </p>

                        </div>


                        {/* ================= OFFER ================= */}

                        <div className="offer-box">

                            <div className="offer-left">

                                <span className="offer-tag">
                                    Offer
                                </span>

                                <p>
                                    Use Code
                                </p>

                                <h4>
                                    THEREALPR IMDEAL
                                </h4>

                                <a href="#">
                                    T&C ↗
                                </a>

                            </div>


                            <div className="offer-right">

                                <h4>

                                    Get it for{" "}

                                    <span>

                                        {product.offer.replace(
                                            "Offer Price: ",
                                            ""
                                        )}

                                    </span>

                                </h4>


                                <p>
                                    Special offer available on app
                                </p>


                                <a href="#">
                                    View All Products &gt;
                                </a>

                            </div>

                        </div>


                        {/* ================= COLOR ================= */}

                        <div className="more-colors">

                            <a href="#">
                                +4 More
                            </a>

                        </div>


                        <p className="selected-color">

                            {product.color}

                        </p>


                        {/* Color Selector */}

                        <div className="color-selector">

                            <span className="arrow">
                                &#10094;
                            </span>

                            <div
                                className="color active"
                                title={product.color}
                            ></div>

                            <div
                                className="color maroon"
                                title="Maroon"
                            ></div>

                            <div
                                className="color grey"
                                title="Grey"
                            ></div>

                            <div
                                className="color beige"
                                title="Beige"
                            ></div>

                            <div
                                className="color black"
                                title="Black"
                            ></div>

                            <span className="arrow">
                                &#10095;
                            </span>

                        </div>


                        {/* ================= SIZE ================= */}

                        <div className="size-section">

                            <p className="size-title">

                                Select Size{" "}

                                <span>
                                    (UNI)
                                </span>

                            </p>


                            <div className="size-buttons">

                                {product.sizes.map((size) => (

                                    <button
                                        key={size}
                                    >
                                        {size}
                                    </button>

                                ))}

                            </div>


                            <a
                                href="#"
                                className="size-chart"
                            >
                                Check Size Chart &gt;
                            </a>

                        </div>


                        {/* ================= DELIVERY ================= */}

                        <div className="delivery-box">

                            <div className="delivery-icon">

                                <i className="fa-solid fa-location-dot"></i>

                            </div>


                            <div className="delivery-text">

                                Select your size to know your estimated
                                delivery date.

                            </div>

                        </div>


                        {/* ================= ADD TO BAG ================= */}

                        <div className="add-to-bag">

                            <i className="fa-solid fa-bag-shopping"></i>

                            <span>
                                ADD TO BAG
                            </span>

                        </div>


                        <p className="bag-text">

                            HANDPICKED STYLES | ASSURED QUALITY

                        </p>


                        {/* ================= WISHLIST ================= */}

                        <div className="wishlist-btn">

                            <i className="fa-regular fa-heart"></i>

                            <span>
                                SAVE TO WISHLIST
                            </span>

                        </div>


                        {/* ================= PRODUCT DETAILS ================= */}

                        <div className="product-details-section">

                            <h2>
                                Product Details
                            </h2>


                            <div className="details-grid">


                                <div className="detail-item">

                                    <h4>
                                        Primary Color
                                    </h4>

                                    <p>
                                        {product.color}
                                    </p>

                                </div>


                                <div className="detail-item">

                                    <h4>
                                        Fit
                                    </h4>

                                    <p>
                                        {product.fit}
                                    </p>

                                </div>


                                <div className="detail-item">

                                    <h4>
                                        Package Contains
                                    </h4>

                                    <p>
                                        {product.packageContains}
                                    </p>

                                </div>


                                <div className="detail-item">

                                    <h4>
                                        Wash Care
                                    </h4>

                                    <p>
                                        {product.washCare}
                                    </p>

                                </div>


                                <div className="detail-item">

                                    <h4>
                                        Transparency
                                    </h4>

                                    <p>
                                        {product.transparency}
                                    </p>

                                </div>


                                <div className="detail-item">

                                    <h4>
                                        Size worn by Model
                                    </h4>

                                    <p>
                                        {product.sizeWorn}
                                    </p>

                                </div>


                                <div className="detail-item">

                                    <h4>
                                        Mood
                                    </h4>

                                    <p>
                                        {product.mood}
                                    </p>

                                </div>


                                <div className="detail-item">

                                    <h4>
                                        Fabric Composition
                                    </h4>

                                    <p>
                                        {product.fabric}
                                    </p>

                                </div>

                            </div>


                            <a
                                href="#"
                                className="about-brand"
                            >
                                • About {product.brand}
                            </a>


                            <a
                                href="#"
                                className="more-details"
                            >
                                More Details ▼
                            </a>

                        </div>

                    </div>

                </div>


                {/* ================= RATINGS ================= */}

                <section className="ratings-section">

                    <h2 className="ratings-title">
                        Ratings
                    </h2>


                    <div className="ratings-container">


                        {/* Rating Summary */}

                        <div className="rating-summary">

                            <h1>

                                {product.rating}

                                <span>
                                    ★
                                </span>

                            </h1>

                            <p>
                                {product.reviews} Customers
                            </p>

                        </div>


                        {/* Rating Distribution */}

                        <div className="rating-distribution">

                            <h3>
                                Rating Distribution
                            </h3>


                            {[
                                ["5 ★", "fill5", "30%"],
                                ["4 ★", "fill4", "20%"],
                                ["3 ★", "fill3", "9%"],
                                ["2 ★", "fill2", "8%"],
                                ["1 ★", "fill1", "30%"]
                            ].map(
                                ([rating, fill, percentage]) => (

                                    <div
                                        className="rating-row"
                                        key={rating}
                                    >

                                        <span>
                                            {rating}
                                        </span>


                                        <div className="bar">

                                            <div
                                                className={`fill ${fill}`}
                                            ></div>

                                        </div>


                                        <span>
                                            {percentage}
                                        </span>

                                    </div>

                                )
                            )}

                        </div>


                        {/* ================= CUSTOMER OPINION ================= */}

                        <div className="customer-opinion">

                            <h3>
                                Customer Opinion
                            </h3>


                            <div className="opinion-wrapper">


                                {/* Product Fit */}

                                <div className="opinion-column">

                                    <h4>
                                        How was the Product fit?
                                    </h4>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill fit1"></div>
                                        </div>

                                        <span>
                                            Perfect (57%)
                                        </span>

                                    </div>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill fit2"></div>
                                        </div>

                                        <span>
                                            Loose (26%)
                                        </span>

                                    </div>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill fit3"></div>
                                        </div>

                                        <span>
                                            Tight (3%)
                                        </span>

                                    </div>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill fit4"></div>
                                        </div>

                                        <span>
                                            Too Loose (3%)
                                        </span>

                                    </div>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill fit5"></div>
                                        </div>

                                        <span>
                                            Too Tight (7%)
                                        </span>

                                    </div>

                                </div>


                                {/* Product Quality */}

                                <div className="opinion-column">

                                    <h4>
                                        How was the Product Quality?
                                    </h4>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill quality1"></div>
                                        </div>

                                        <span>
                                            Excellent (21%)
                                        </span>

                                    </div>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill quality2"></div>
                                        </div>

                                        <span>
                                            Very Good (27%)
                                        </span>

                                    </div>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill quality3"></div>
                                        </div>

                                        <span>
                                            Average (21%)
                                        </span>

                                    </div>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill quality4"></div>
                                        </div>

                                        <span>
                                            Bad (12%)
                                        </span>

                                    </div>


                                    <div className="rating-row">

                                        <div className="bar">
                                            <div className="fill quality5"></div>
                                        </div>

                                        <span>
                                            Very Bad (18%)
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

        </>
    );
};


export default SingleProduct;