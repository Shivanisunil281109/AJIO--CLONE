import React, { useState } from "react";
import "../CSS/SellerProfit.css";


const SellerProfit = () => {

    const [selectedPeriod, setSelectedPeriod] = useState("This Month");


    const profitData = {

        "This Month": {
            revenue: "₹1,25,430",
            expenses: "₹45,230",
            netProfit: "₹80,200",
            profitMargin: "64.02%",
            revenueGrowth: "+12.5%",
            expensesGrowth: "-8.3%",
            profitGrowth: "+15.7%",
            marginGrowth: "+4.2%",

            graph: [
                {
                    month: "Jan",
                    value: "₹15K",
                    height: "10%"
                },
                {
                    month: "Feb",
                    value: "₹50K",
                    height: "33%"
                },
                {
                    month: "Mar",
                    value: "₹95K",
                    height: "63%"
                },
                {
                    month: "Apr",
                    value: "₹70K",
                    height: "47%"
                },
                {
                    month: "May",
                    value: "₹95K",
                    height: "63%"
                },
                {
                    month: "Jun",
                    value: "₹140K",
                    height: "93%"
                }
            ],

            topProducts: [
                {
                    name: "Men Solid Shirt",
                    price: "₹40,430",
                    percent: "32%",
                    dotClass: "black"
                },
                {
                    name: "Women Printed Kurta",
                    price: "₹28,750",
                    percent: "23%",
                    dotClass: "blue"
                },
                {
                    name: "Men Slim Fit Jeans",
                    price: "₹22,300",
                    percent: "18%",
                    dotClass: "lightblue"
                },
                {
                    name: "Women Casual Top",
                    price: "₹16,250",
                    percent: "13%",
                    dotClass: "sky"
                },
                {
                    name: "Others",
                    price: "₹17,700",
                    percent: "14%",
                    dotClass: "gray"
                }
            ]
        },


        "Last Month": {
            revenue: "₹1,10,000",
            expenses: "₹42,500",
            netProfit: "₹67,500",
            profitMargin: "61.36%",
            revenueGrowth: "+8.4%",
            expensesGrowth: "-5.2%",
            profitGrowth: "+10.1%",
            marginGrowth: "+2.8%",

            graph: [
                {
                    month: "Week 1",
                    value: "₹18K",
                    height: "20%"
                },
                {
                    month: "Week 2",
                    value: "₹32K",
                    height: "35%"
                },
                {
                    month: "Week 3",
                    value: "₹27K",
                    height: "30%"
                },
                {
                    month: "Week 4",
                    value: "₹33K",
                    height: "37%"
                }
            ],

            topProducts: [
                {
                    name: "Women Printed Kurta",
                    price: "₹30,500",
                    percent: "28%",
                    dotClass: "black"
                },
                {
                    name: "Men Solid Shirt",
                    price: "₹25,300",
                    percent: "23%",
                    dotClass: "blue"
                },
                {
                    name: "Men Slim Fit Jeans",
                    price: "₹20,900",
                    percent: "19%",
                    dotClass: "lightblue"
                },
                {
                    name: "Women Casual Top",
                    price: "₹17,600",
                    percent: "16%",
                    dotClass: "sky"
                },
                {
                    name: "Others",
                    price: "₹15,700",
                    percent: "14%",
                    dotClass: "gray"
                }
            ]
        },


        "Last 3 Months": {
            revenue: "₹3,45,800",
            expenses: "₹1,28,400",
            netProfit: "₹2,17,400",
            profitMargin: "62.87%",
            revenueGrowth: "+18.6%",
            expensesGrowth: "-6.5%",
            profitGrowth: "+21.3%",
            marginGrowth: "+5.1%",

            graph: [
                {
                    month: "Apr",
                    value: "₹95K",
                    height: "63%"
                },
                {
                    month: "May",
                    value: "₹110K",
                    height: "73%"
                },
                {
                    month: "Jun",
                    value: "₹140K",
                    height: "93%"
                }
            ],

            topProducts: [
                {
                    name: "Men Solid Shirt",
                    price: "₹95,200",
                    percent: "28%",
                    dotClass: "black"
                },
                {
                    name: "Women Printed Kurta",
                    price: "₹79,500",
                    percent: "23%",
                    dotClass: "blue"
                },
                {
                    name: "Men Slim Fit Jeans",
                    price: "₹65,700",
                    percent: "19%",
                    dotClass: "lightblue"
                },
                {
                    name: "Women Casual Top",
                    price: "₹55,300",
                    percent: "16%",
                    dotClass: "sky"
                },
                {
                    name: "Others",
                    price: "₹50,100",
                    percent: "14%",
                    dotClass: "gray"
                }
            ]
        },


        "This Year": {
            revenue: "₹12,80,500",
            expenses: "₹4,75,300",
            netProfit: "₹8,05,200",
            profitMargin: "62.88%",
            revenueGrowth: "+24.8%",
            expensesGrowth: "-9.4%",
            profitGrowth: "+28.2%",
            marginGrowth: "+6.7%",

            graph: [
                {
                    month: "Jan",
                    value: "₹75K",
                    height: "50%"
                },
                {
                    month: "Feb",
                    value: "₹90K",
                    height: "60%"
                },
                {
                    month: "Mar",
                    value: "₹95K",
                    height: "63%"
                },
                {
                    month: "Apr",
                    value: "₹110K",
                    height: "73%"
                },
                {
                    month: "May",
                    value: "₹120K",
                    height: "80%"
                },
                {
                    month: "Jun",
                    value: "₹140K",
                    height: "93%"
                }
            ],

            topProducts: [
                {
                    name: "Men Solid Shirt",
                    price: "₹3,85,000",
                    percent: "30%",
                    dotClass: "black"
                },
                {
                    name: "Women Printed Kurta",
                    price: "₹2,95,000",
                    percent: "23%",
                    dotClass: "blue"
                },
                {
                    name: "Men Slim Fit Jeans",
                    price: "₹2,30,500",
                    percent: "18%",
                    dotClass: "lightblue"
                },
                {
                    name: "Women Casual Top",
                    price: "₹1,66,500",
                    percent: "13%",
                    dotClass: "sky"
                },
                {
                    name: "Others",
                    price: "₹2,03,500",
                    percent: "16%",
                    dotClass: "gray"
                }
            ]
        }
    };


    const currentProfit = profitData[selectedPeriod];


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

                    <select
                        value={selectedPeriod}
                        onChange={(e) =>
                            setSelectedPeriod(e.target.value)
                        }
                    >

                        <option value="This Month">
                            This Month
                        </option>

                        <option value="Last Month">
                            Last Month
                        </option>

                        <option value="Last 3 Months">
                            Last 3 Months
                        </option>

                        <option value="This Year">
                            This Year
                        </option>

                    </select>

                </div>

            </div>


            {/* ==========================================
                PROFIT CARDS
            ========================================== */}

            <div className="profit-cards">


                {/* TOTAL REVENUE */}

                <div className="profit-card">

                    <h4>
                        Total Revenue
                    </h4>

                    <h2>
                        {currentProfit.revenue}
                    </h2>

                    <p className="growth positive">

                        <span className="material-symbols-outlined">
                            trending_up
                        </span>

                        {currentProfit.revenueGrowth}

                    </p>

                </div>


                {/* TOTAL EXPENSES */}

                <div className="profit-card">

                    <h4>
                        Total Expenses
                    </h4>

                    <h2>
                        {currentProfit.expenses}
                    </h2>

                    <p className="growth negative">

                        <span className="material-symbols-outlined">
                            trending_down
                        </span>

                        {currentProfit.expensesGrowth}

                    </p>

                </div>


                {/* NET PROFIT */}

                <div className="profit-card">

                    <h4>
                        Net Profit
                    </h4>

                    <h2>
                        {currentProfit.netProfit}
                    </h2>

                    <p className="growth positive">

                        <span className="material-symbols-outlined">
                            trending_up
                        </span>

                        {currentProfit.profitGrowth}

                    </p>

                </div>


                {/* PROFIT MARGIN */}

                <div className="profit-card">

                    <h4>
                        Profit Margin
                    </h4>

                    <h2>
                        {currentProfit.profitMargin}
                    </h2>

                    <p className="growth positive">

                        <span className="material-symbols-outlined">
                            trending_up
                        </span>

                        {currentProfit.marginGrowth}

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

                    <h3>
                        Revenue Overview
                    </h3>


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


                            {/* DYNAMIC REVENUE BARS */}

                            <div className="revenue-bars">

                                {currentProfit.graph.map(
                                    (item, index) => (

                                        <div
                                            className="revenue-bar-item"
                                            key={index}
                                        >

                                            <span
                                                className="revenue-value"
                                                style={{
                                                    bottom: `calc(${item.height} + 8px)`
                                                }}
                                            >
                                                {item.value}
                                            </span>


                                            <div
                                                className="revenue-bar"
                                                style={{
                                                    height: item.height
                                                }}
                                            ></div>


                                            <span className="revenue-month">
                                                {item.month}
                                            </span>

                                        </div>

                                    )
                                )}

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


                        {/* DYNAMIC PRODUCT LIST */}

                        <div className="product-list">

                            {currentProfit.topProducts.map(
                                (product, index) => (

                                    <div
                                        className="product-item"
                                        key={index}
                                    >

                                        <span
                                            className={`dot ${product.dotClass}`}
                                        ></span>


                                        <span className="name">
                                            {product.name}
                                        </span>


                                        <span className="price">
                                            {product.price} ({product.percent})
                                        </span>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </div>

            </div>









{/* ==========================================
    PRODUCT PROFIT DETAILS
========================================== */}

<div className="product-profit-details-card">

    <h3>
        Product Profit Details
    </h3>

    <div className="product-profit-details-grid">


        <div className="product-profit-detail-item">

            <div className="product-profit-detail-icon">
                <span className="material-symbols-outlined">
                    payments
                </span>
            </div>

            <div>
                <p>
                    Total Profit
                </p>

                <h4>
                    ₹20,000
                </h4>
            </div>

        </div>


        <div className="product-profit-detail-item">

            <div className="product-profit-detail-icon">
                <span className="material-symbols-outlined">
                    sell
                </span>
            </div>

            <div>
                <p>
                    Product Selling Price
                </p>

                <h4>
                    ₹12,000
                </h4>
            </div>

        </div>


        <div className="product-profit-detail-item">

            <div className="product-profit-detail-icon">
                <span className="material-symbols-outlined">
                    inventory
                </span>
            </div>

            <div>
                <p>
                    MFG Price
                </p>

                <h4>
                    ₹10,000
                </h4>
            </div>

        </div>


    </div>

</div>






        </section>
    );
};

export default SellerProfit;