import React from "react";
import "../CSS/SellerProfit.css";

const SellerProfit = () => {
    return (
        <section className="dashboard-content seller-profit-page">

            {/* ==========================================
                PROFIT HEADER
            ========================================== */}

            <div className="profit-header">

                <h1 className="page-title">
                    Profit Overview
                </h1>

                <div className="month-filter">
                    <select>
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>Last 3 Months</option>
                        <option>This Year</option>
                    </select>
                </div>

            </div>


            {/* ==========================================
                PROFIT CARDS
            ========================================== */}

            <div className="profit-cards">

                {/* TOTAL REVENUE */}

                <div className="profit-card">

                    <h4>Total Revenue</h4>

                    <h2>₹1,25,430</h2>

                    <p className="growth positive">

                        <span className="material-symbols-outlined">
                            trending_up
                        </span>

                        +12.5%

                    </p>

                </div>


                {/* TOTAL EXPENSES */}

                <div className="profit-card">

                    <h4>Total Expenses</h4>

                    <h2>₹45,230</h2>

                    <p className="growth negative">

                        <span className="material-symbols-outlined">
                            trending_down
                        </span>

                        - 8.3%

                    </p>

                </div>


                {/* NET PROFIT */}

                <div className="profit-card">

                    <h4>Net Profit</h4>

                    <h2>₹80,200</h2>

                    <p className="growth positive">

                        <span className="material-symbols-outlined">
                            trending_up
                        </span>

                        +15.7%

                    </p>

                </div>


                {/* PROFIT MARGIN */}

                <div className="profit-card">

                    <h4>Profit Margin</h4>

                    <h2>64.02%</h2>

                    <p className="growth positive">

                        <span className="material-symbols-outlined">
                            trending_up
                        </span>

                        +4.2%

                    </p>

                </div>

            </div>


            {/* ==========================================
                BOTTOM SECTION
            ========================================== */}

            <div className="profit-bottom">


                {/* ==========================================
                    REVENUE OVERVIEW
                ========================================== */}

                <div className="revenue-card">

                    <h3>Revenue Overview</h3>

                    <div className="revenue-bar-chart">


                        {/* Y AXIS */}

                        <div className="revenue-y-axis">

                            <span>150K</span>
                            <span>125K</span>
                            <span>100K</span>
                            <span>75K</span>
                            <span>50K</span>
                            <span>25K</span>
                            <span>0</span>

                        </div>


                        {/* BAR GRAPH AREA */}

                        <div className="revenue-bars-area">


                            {/* HORIZONTAL GRID LINES */}

                            <div className="revenue-grid-lines">

                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>

                            </div>


                            {/* BARS */}

                            <div className="revenue-bars">


                                {/* JANUARY */}

                                <div className="revenue-bar-item">

                                    <span
                                        className="revenue-value"
                                        style={{
                                            bottom: "calc(10% + 8px)"
                                        }}
                                    >
                                        ₹15K
                                    </span>

                                    <div
                                        className="revenue-bar"
                                        style={{
                                            height: "10%"
                                        }}
                                    ></div>

                                    <span className="revenue-month">
                                        Jan
                                    </span>

                                </div>


                                {/* FEBRUARY */}

                                <div className="revenue-bar-item">

                                    <span
                                        className="revenue-value"
                                        style={{
                                            bottom: "calc(33% + 8px)"
                                        }}
                                    >
                                        ₹50K
                                    </span>

                                    <div
                                        className="revenue-bar"
                                        style={{
                                            height: "33%"
                                        }}
                                    ></div>

                                    <span className="revenue-month">
                                        Feb
                                    </span>

                                </div>


                                {/* MARCH */}

                                <div className="revenue-bar-item">

                                    <span
                                        className="revenue-value"
                                        style={{
                                            bottom: "calc(63% + 8px)"
                                        }}
                                    >
                                        ₹95K
                                    </span>

                                    <div
                                        className="revenue-bar"
                                        style={{
                                            height: "63%"
                                        }}
                                    ></div>

                                    <span className="revenue-month">
                                        Mar
                                    </span>

                                </div>


                                {/* APRIL */}

                                <div className="revenue-bar-item">

                                    <span
                                        className="revenue-value"
                                        style={{
                                            bottom: "calc(47% + 8px)"
                                        }}
                                    >
                                        ₹70K
                                    </span>

                                    <div
                                        className="revenue-bar"
                                        style={{
                                            height: "47%"
                                        }}
                                    ></div>

                                    <span className="revenue-month">
                                        Apr
                                    </span>

                                </div>


                                {/* MAY */}

                                <div className="revenue-bar-item">

                                    <span
                                        className="revenue-value"
                                        style={{
                                            bottom: "calc(63% + 8px)"
                                        }}
                                    >
                                        ₹95K
                                    </span>

                                    <div
                                        className="revenue-bar"
                                        style={{
                                            height: "63%"
                                        }}
                                    ></div>

                                    <span className="revenue-month">
                                        May
                                    </span>

                                </div>


                                {/* JUNE */}

                                <div className="revenue-bar-item">

                                    <span
                                        className="revenue-value"
                                        style={{
                                            bottom: "calc(93% + 8px)"
                                        }}
                                    >
                                        ₹140K
                                    </span>

                                    <div
                                        className="revenue-bar"
                                        style={{
                                            height: "93%"
                                        }}
                                    ></div>

                                    <span className="revenue-month">
                                        Jun
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ==========================================
                    TOP SELLING PRODUCTS
                ========================================== */}

                <div className="top-products-card">

                    <h3>
                        Top Selling Products
                    </h3>


                    <div className="products-content">


                        {/* PIE CHART */}

                        <div className="pie-chart"></div>


                        {/* PRODUCT LIST */}

                        <div className="product-list">


                            {/* PRODUCT 1 */}

                            <div className="product-item">

                                <span className="dot black"></span>

                                <span className="name">
                                    Men Solid Shirt
                                </span>

                                <span className="price">
                                    ₹40,430 (32%)
                                </span>

                            </div>


                            {/* PRODUCT 2 */}

                            <div className="product-item">

                                <span className="dot blue"></span>

                                <span className="name">
                                    Women Printed Kurta
                                </span>

                                <span className="price">
                                    ₹28,750 (23%)
                                </span>

                            </div>


                            {/* PRODUCT 3 */}

                            <div className="product-item">

                                <span className="dot lightblue"></span>

                                <span className="name">
                                    Men Slim Fit Jeans
                                </span>

                                <span className="price">
                                    ₹22,300 (18%)
                                </span>

                            </div>


                            {/* PRODUCT 4 */}

                            <div className="product-item">

                                <span className="dot sky"></span>

                                <span className="name">
                                    Women Casual Top
                                </span>

                                <span className="price">
                                    ₹16,250 (13%)
                                </span>

                            </div>


                            {/* PRODUCT 5 */}

                            <div className="product-item">

                                <span className="dot gray"></span>

                                <span className="name">
                                    Others
                                </span>

                                <span className="price">
                                    ₹17,700 (14%)
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SellerProfit;