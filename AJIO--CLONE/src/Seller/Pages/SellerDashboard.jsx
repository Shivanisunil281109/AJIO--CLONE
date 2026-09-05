import React from "react";
import "../CSS/Seller-dashboard.css";

const SellerDashboard = () => {
    return (
        <div className="seller-dashboard">

            {/* =========================
                DASHBOARD CARDS
            ========================== */}

            <section className="dashboard-content">

                <h2 className="page-title">Dashboard</h2>

                <div className="dashboard-cards">

                    <div className="card">
                        <h4>Total Products</h4>
                        <h2>152</h2>
                        <a href="#">View all products</a>
                    </div>

                    <div className="card">
                        <h4>Sold Products</h4>
                        <h2>98</h2>
                        <a href="#">View sold products</a>
                    </div>

                    <div className="card">
                        <h4>Total Orders</h4>
                        <h2>245</h2>
                        <a href="#">View all orders</a>
                    </div>

                    <div className="card">
                        <h4>Total Revenue</h4>
                        <h2>₹1,25,430</h2>
                        <a href="#">View all payments</a>
                    </div>

                </div>

            </section>


            {/* =========================
                LATEST ORDERS + PRODUCTS
            ========================== */}

            <section className="dashboard-content">

                <div className="dashboard-bottom">

                    {/* =========================
                        LATEST ORDERS
                    ========================== */}

                    <div className="orders-panel">

                        <div className="panel-header">
                            <h3>Latest Orders</h3>
                            <a href="#">View All</a>
                        </div>

                        <table className="orders-table">

                            <tbody>

                                <tr>
                                    <td>#ORD12345</td>
                                    <td>Soniya Datarkar</td>
                                    <td>₹1,499</td>
                                    <td className="seller-status-processing">
                                        Processing
                                    </td>
                                </tr>

                                <tr>
                                    <td>#ORD12344</td>
                                    <td>Neha Patel</td>
                                    <td>₹999</td>
                                    <td className="seller-status-shipped">
                                        Shipped
                                    </td>
                                </tr>

                                <tr>
                                    <td>#ORD12343</td>
                                    <td>Amit Verma</td>
                                    <td>₹2,299</td>
                                    <td className="seller-status-delivered">
                                        Delivered
                                    </td>
                                </tr>

                                <tr>
                                    <td>#ORD12342</td>
                                    <td>Pooja Singh</td>
                                    <td>₹1,199</td>
                                    <td className="seller-status-processing">
                                        Processing
                                    </td>
                                </tr>

                                <tr>
                                    <td>#ORD12341</td>
                                    <td>Karan Mehta</td>
                                    <td>₹799</td>
                                    <td className="seller-status-cancelled">
                                        Cancelled
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>


                    {/* =========================
                        TOP SELLING PRODUCTS
                    ========================== */}

                    <div className="products-panel">

                        <div className="panel-header">
                            <h3>Top Selling Products</h3>
                            <a href="#">View All</a>
                        </div>


                        {/* Product 1 */}

                        <div className="product-item">

                            <img
                                src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260511/tg0D/6a01bba414d0c21719d110d7/buda_jeans_co_black_men_regular_fit_polo-neck_t-shirt.jpg"
                                alt="Men Solid Shirt"
                            />

                            <div className="product-info">
                                <h4>Men Solid Shirt</h4>
                            </div>

                            <div className="sold-info">
                                <span>120</span>
                                <small>Sold</small>
                            </div>

                            <span className="price">
                                ₹999
                            </span>

                        </div>


                        {/* Product 2 */}

                        <div className="product-item">

                            <img
                                src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260511/BLIR/6a01c69f14d0c21719d2899a/svaraa_orange_women_printed_2-piece_straight_kurta_set.jpg"
                                alt="Women Printed Kurta"
                            />

                            <div className="product-info">
                                <h4>Women Printed Kurta</h4>
                            </div>

                            <div className="sold-info">
                                <span>98</span>
                                <small>Sold</small>
                            </div>

                            <span className="price">
                                ₹899
                            </span>

                        </div>


                        {/* Product 3 */}

                        <div className="product-item">

                            <img
                                src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20230623/AA8r/6495d398a9b42d15c9cb61ed/produkt_by_jack_%26_jones_grey_men_lightly_washed_slim_fit_jeans.jpg"
                                alt="Men Slim Fit Jeans"
                            />

                            <div className="product-info">
                                <h4>Men Slim Fit Jeans</h4>
                            </div>

                            <div className="sold-info">
                                <span>85</span>
                                <small>Sold</small>
                            </div>

                            <span className="price">
                                ₹1,499
                            </span>

                        </div>


                        {/* Product 4 */}

                        <div className="product-item">

                            <img
                                src="https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250720/EXXc/687cc85f6034bf77f0df551c/revangi_lavender_women_regular_fit_top.jpg"
                                alt="Women Casual Top"
                            />

                            <div className="product-info">
                                <h4>Women Casual Top</h4>
                            </div>

                            <div className="sold-info">
                                <span>72</span>
                                <small>Sold</small>
                            </div>

                            <span className="price">
                                ₹699
                            </span>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default SellerDashboard;