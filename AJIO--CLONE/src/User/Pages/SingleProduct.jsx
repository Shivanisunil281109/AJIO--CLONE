import React from "react";
import "../CSS/SingleProduct.css";

const SingleProduct = () => {
    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <a href="/MenProducts">Men</a>
                <span>/</span>
                <a href="#">Western Wear</a>
                <span>/</span>
                <a href="#">Shirts</a>
                <span>/</span>
                <span className="current-page">
                    Men Checked Regular Fit Shirt with Patch Pocket
                </span>
            </div>

            {/* Main Product Section */}
            <main className="single-product-page">

                <div className="single-product-container">

                    {/* Thumbnail Gallery */}
                    <div className="thumbnail-gallery">

                        <img
                            src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260526/Nn9M/6a15a4e6fcb5bb61d2ea6d13/-78Wx98H-703275479-pink-MODEL.jpg"
                            alt="Thumbnail 1"
                        />

                        <img
                            src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260526/gxEw/6a15a4e6fcb5bb61d2ea6c7d/-78Wx98H-703275479-pink-MODEL2.jpg"
                            alt="Thumbnail 2"
                        />

                        <img
                            src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260526/Ou5O/6a15a4e6fcb5bb61d2ea6c80/-78Wx98H-703275479-pink-MODEL4.jpg"
                            alt="Thumbnail 3"
                        />

                        <img
                            src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260526/veVw/6a15a4e6fcb5bb61d2ea6c7f/-78Wx98H-703275479-pink-MODEL3.jpg"
                            alt="Thumbnail 4"
                        />

                        <img
                            src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260526/T0Fw/6a15a4e6fcb5bb61d2ea6c85/-78Wx98H-703275479-pink-MODEL5.jpg"
                            alt="Thumbnail 5"
                        />

                    </div>


                    {/* Main Product Image */}
                    <div className="main-product-image">

                        <img
                            src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260526/Ou5O/6a15a4e6fcb5bb61d2ea6c91/-473Wx593H-703275479-pink-MODEL4.jpg"
                            alt="Main Product"
                        />

                    </div>


                    {/* Product Details */}
                    <div className="product-details">

                        <h2 className="brand-name">
                            BUDA JEANS CO
                        </h2>

                        <h1 className="product-title">
                            Men Checked Regular Fit Shirt with Patch Pocket
                        </h1>

                        {/* Rating */}
                        <div className="product-rating">
                            <span className="rating-badge">
                                2.6 ★
                            </span>

                            <span className="rating-count">
                                110 Ratings
                            </span>
                        </div>


                        {/* Price */}
                        <div className="price-section">

                            <h2 className="current-price">
                                ₹494
                            </h2>

                            <div className="mrp-row">

                                <span className="mrp-text">
                                    MRP
                                </span>

                                <span className="old-price">
                                    ₹2,599
                                </span>

                                <span className="discount">
                                    (81% OFF)
                                </span>

                            </div>

                            <p className="tax-text">
                                Price inclusive of all taxes
                            </p>

                        </div>


                        {/* Offer */}
                        <div className="offer-box">

                            <div className="offer-left">

                                <span className="offer-tag">
                                    Offer
                                </span>

                                <p>Use Code</p>

                                <h4>THEREALPR IMDEAL</h4>

                                <a href="#">
                                    T&C ↗
                                </a>

                            </div>


                            <div className="offer-right">

                                <h4>
                                    Get it for <span>₹432</span>
                                </h4>

                                <p>
                                    400 off on 3190 only on app
                                </p>

                                <a href="#">
                                    View All Products &gt;
                                </a>

                            </div>

                        </div>


                        {/* More Colors */}
                        <div className="more-colors">
                            <a href="#">+4 More</a>
                        </div>

                        <p className="selected-color">
                            Pink
                        </p>


                        {/* Color Selector */}
                        <div className="color-selector">

                            <span className="arrow">
                                &#10094;
                            </span>

                            <div className="color active pink"></div>
                            <div className="color maroon"></div>
                            <div className="color grey"></div>
                            <div className="color beige"></div>
                            <div className="color black"></div>

                            <span className="arrow">
                                &#10095;
                            </span>

                        </div>


                        {/* Size */}
                        <div className="size-section">

                            <p className="size-title">
                                Select Size <span>(UNI)</span>
                            </p>

                            <div className="size-buttons">

                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>XXL</button>

                            </div>

                            <a href="#" className="size-chart">
                                Check Size Chart &gt;
                            </a>

                        </div>


                        {/* Delivery */}
                        <div className="delivery-box">

                            <div className="delivery-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <div className="delivery-text">
                                Select your size to know your estimated
                                delivery date.
                            </div>

                        </div>


                        {/* Add To Bag */}
                        <div className="add-to-bag">

                            <i className="fa-solid fa-bag-shopping"></i>

                            <span>
                                ADD TO BAG
                            </span>

                        </div>

                        <p className="bag-text">
                            HANDPICKED STYLES | ASSURED QUALITY
                        </p>


                        {/* Wishlist */}
                        <div className="wishlist-btn">

                            <i className="fa-regular fa-heart"></i>

                            <span>
                                SAVE TO WISHLIST
                            </span>

                        </div>


                        {/* Product Details */}
                        <div className="product-details-section">

                            <h2>
                                Product Details
                            </h2>

                            <div className="details-grid">

                                <div className="detail-item">
                                    <h4>Primary Color</h4>
                                    <p>Pink</p>
                                </div>

                                <div className="detail-item">
                                    <h4>Fit</h4>
                                    <p>Slim Fit</p>
                                </div>

                                <div className="detail-item">
                                    <h4>Package Contains</h4>
                                    <p>Package contains: 1 shirt</p>
                                </div>

                                <div className="detail-item">
                                    <h4>Wash Care</h4>
                                    <p>Machine wash cold</p>
                                </div>

                                <div className="detail-item">
                                    <h4>Transparency</h4>
                                    <p>Opaque</p>
                                </div>

                                <div className="detail-item">
                                    <h4>Size worn by Model</h4>
                                    <p>M</p>
                                </div>

                                <div className="detail-item">
                                    <h4>Mood</h4>
                                    <p>Classic</p>
                                </div>

                                <div className="detail-item">
                                    <h4>Fabric Composition</h4>
                                    <p>100% Cotton</p>
                                </div>

                            </div>

                            <a href="#" className="about-brand">
                                • About MUFTI
                            </a>

                            <a href="#" className="more-details">
                                More Details ▼
                            </a>

                        </div>

                    </div>

                </div>


                {/* Ratings */}
                <section className="ratings-section">

                    <h2 className="ratings-title">
                        Ratings
                    </h2>

                    <div className="ratings-container">

                        <div className="rating-summary">

                            <h1>
                                3.1 <span>★</span>
                            </h1>

                            <p>
                                62 Customers
                            </p>

                        </div>


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
                            ].map(([rating, fill, percentage]) => (

                                <div className="rating-row" key={rating}>

                                    <span>{rating}</span>

                                    <div className="bar">
                                        <div className={`fill ${fill}`}></div>
                                    </div>

                                    <span>{percentage}</span>

                                </div>

                            ))}

                        </div>


                        {/* Customer Opinion */}
                        <div className="customer-opinion">

                            <h3>
                                Customer Opinion
                            </h3>

                            <div className="opinion-wrapper">

                                <div className="opinion-column">

                                    <h4>
                                        How was the Product fit?
                                    </h4>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill fit1"></div>
                                        </div>
                                        <span>Perfect (57%)</span>
                                    </div>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill fit2"></div>
                                        </div>
                                        <span>Loose (26%)</span>
                                    </div>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill fit3"></div>
                                        </div>
                                        <span>Tight (3%)</span>
                                    </div>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill fit4"></div>
                                        </div>
                                        <span>Too Loose (3%)</span>
                                    </div>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill fit5"></div>
                                        </div>
                                        <span>Too Tight (7%)</span>
                                    </div>

                                </div>


                                <div className="opinion-column">

                                    <h4>
                                        How was the Product Quality?
                                    </h4>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill quality1"></div>
                                        </div>
                                        <span>Excellent (21%)</span>
                                    </div>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill quality2"></div>
                                        </div>
                                        <span>Very Good (27%)</span>
                                    </div>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill quality3"></div>
                                        </div>
                                        <span>Average (21%)</span>
                                    </div>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill quality4"></div>
                                        </div>
                                        <span>Bad (12%)</span>
                                    </div>

                                    <div className="rating-row">
                                        <div className="bar">
                                            <div className="fill quality5"></div>
                                        </div>
                                        <span>Very Bad (18%)</span>
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