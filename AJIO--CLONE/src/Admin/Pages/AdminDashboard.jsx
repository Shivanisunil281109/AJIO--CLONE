import React, { useState } from "react";
import "../CSS/Admin-dashboard.css";

const AdminDashboard = () => {

    // =========================================
    // DASHBOARD STATISTICS DATA
    // =========================================

    const [dashboardStats] = useState(() => {

        const savedStats = localStorage.getItem("adminDashboardStats");

        if (savedStats) {
            return JSON.parse(savedStats);
        }

        const defaultStats = {
            allProducts: 152,
            allSellers: 25,
            allUsers: 1250,
            soldProducts: 98,
            totalOrders: 245
        };

        localStorage.setItem(
            "adminDashboardStats",
            JSON.stringify(defaultStats)
        );

        return defaultStats;
    });


    // =========================================
    // SALES OVERVIEW DATA
    // =========================================

    const salesData = [
        { day: "Mon", sales: 15000 },
        { day: "Tue", sales: 22000 },
        { day: "Wed", sales: 20000 },
        { day: "Thu", sales: 35000 },
        { day: "Fri", sales: 34000 },
        { day: "Sat", sales: 47000 },
        { day: "Sun", sales: 58000 }
    ];


    // =========================================
    // DYNAMIC SALES GRAPH CALCULATION
    // =========================================

    const chartWidth = 700;
    const chartHeight = 240;
    const maxSales = 60000;

    const salesPoints = salesData.map((item, index) => {

        const x =
            20 +
            (index * (chartWidth - 40)) /
            (salesData.length - 1);

        const y =
            chartHeight -
            (item.sales / maxSales) * 220;

        return {
            ...item,
            x,
            y
        };
    });


    // =========================================
    // CREATE LINE POINTS
    // =========================================

    const salesLinePoints = salesPoints
        .map((point) => `${point.x},${point.y}`)
        .join(" ");


    // =========================================
    // CREATE AREA POINTS
    // =========================================

    const salesAreaPoints = `
        20,${chartHeight}
        ${salesLinePoints}
        ${chartWidth - 20},${chartHeight}
    `;


    // =========================================
    // ORDER STATUS DATA
    // =========================================

    const orderStatusData = [
        {
            status: "Delivered",
            count: 125,
            percentage: "51.0%"
        },
        {
            status: "Processing",
            count: 55,
            percentage: "22.4%"
        },
        {
            status: "Shipped",
            count: 45,
            percentage: "18.4%"
        },
        {
            status: "Cancelled",
            count: 20,
            percentage: "8.2%"
        }
    ];


    return (

        <div className="admin-dashboard-page">

            {/* =========================================
                PAGE HEADING
            ========================================= */}

            <div className="admin-dashboard-heading">

                <h1>Admin Dashboard</h1>

                <p>
                    Welcome back! Here's what's happening with your AJIO store today.
                </p>

            </div>


            {/* =========================================
                DASHBOARD CARDS
            ========================================= */}

            <div className="admin-stats-grid">


                {/* =====================================
                    ALL PRODUCTS
                ===================================== */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            inventory_2
                        </span>

                        <div className="admin-stat-info">

                            <p>All Products</p>

                            <h2>
                                {dashboardStats.allProducts}
                            </h2>

                        </div>

                    </div>


                    <div className="admin-stat-growth">
                        ↑ 5.3%
                    </div>

                    <div className="admin-stat-period">
                        vs previous week
                    </div>


                    <svg
                        className="admin-mini-chart"
                        viewBox="0 0 200 55"
                        preserveAspectRatio="none"
                    >

                        <polyline
                            points="5,48 30,44 55,36 80,33 105,26 130,18 155,11 195,6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle
                            cx="195"
                            cy="6"
                            r="3.5"
                            fill="currentColor"
                        />

                    </svg>

                </div>


                {/* =====================================
                    ALL SELLERS
                ===================================== */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            storefront
                        </span>

                        <div className="admin-stat-info">

                            <p>All Sellers</p>

                            <h2>
                                {dashboardStats.allSellers}
                            </h2>

                        </div>

                    </div>


                    <div className="admin-stat-growth">
                        ↑ 8.7%
                    </div>

                    <div className="admin-stat-period">
                        vs previous week
                    </div>


                    <svg
                        className="admin-mini-chart"
                        viewBox="0 0 200 55"
                        preserveAspectRatio="none"
                    >

                        <polyline
                            points="5,46 30,35 55,39 80,21 105,14 130,20 155,11 195,5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle
                            cx="195"
                            cy="5"
                            r="3.5"
                            fill="currentColor"
                        />

                    </svg>

                </div>


                {/* =====================================
                    ALL USERS
                ===================================== */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            group
                        </span>

                        <div className="admin-stat-info">

                            <p>All Users</p>

                            <h2>
                                {dashboardStats.allUsers.toLocaleString()}
                            </h2>

                        </div>

                    </div>


                    <div className="admin-stat-growth">
                        ↑ 20.5%
                    </div>

                    <div className="admin-stat-period">
                        vs previous week
                    </div>


                    <svg
                        className="admin-mini-chart"
                        viewBox="0 0 200 55"
                        preserveAspectRatio="none"
                    >

                        <polyline
                            points="5,49 30,42 55,31 80,20 105,26 130,14 155,8 195,3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle
                            cx="195"
                            cy="3"
                            r="3.5"
                            fill="currentColor"
                        />

                    </svg>

                </div>


                {/* =====================================
                    TOTAL SOLD PRODUCTS
                ===================================== */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            shopping_bag
                        </span>

                        <div className="admin-stat-info">

                            <p>Total Sold Products</p>

                            <h2>
                                {dashboardStats.soldProducts}
                            </h2>

                        </div>

                    </div>


                    <div className="admin-stat-growth">
                        ↑ 14.2%
                    </div>

                    <div className="admin-stat-period">
                        vs previous week
                    </div>


                    <svg
                        className="admin-mini-chart"
                        viewBox="0 0 200 55"
                        preserveAspectRatio="none"
                    >

                        <polyline
                            points="5,46 30,42 55,28 80,35 105,18 130,21 155,12 195,5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle
                            cx="195"
                            cy="5"
                            r="3.5"
                            fill="currentColor"
                        />

                    </svg>

                </div>


                {/* =====================================
                    TOTAL ORDERS
                ===================================== */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            receipt_long
                        </span>

                        <div className="admin-stat-info">

                            <p>Total Orders</p>

                            <h2>
                                {dashboardStats.totalOrders}
                            </h2>

                        </div>

                    </div>


                    <div className="admin-stat-growth">
                        ↑ 12.4%
                    </div>

                    <div className="admin-stat-period">
                        vs previous week
                    </div>


                    <svg
                        className="admin-mini-chart"
                        viewBox="0 0 200 55"
                        preserveAspectRatio="none"
                    >

                        <polyline
                            points="5,48 30,40 55,34 80,27 105,31 130,18 155,12 195,6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle
                            cx="195"
                            cy="6"
                            r="3.5"
                            fill="currentColor"
                        />

                    </svg>

                </div>

            </div>


            {/* =========================================
                ANALYTICS SECTION
            ========================================= */}

            <div className="admin-analytics-grid">


                {/* =====================================
                    SALES OVERVIEW
                ===================================== */}

                <div className="admin-sales-overview">

                    <div className="admin-analytics-heading">

                        <div>
                            <h2>Sales Overview</h2>
                            <p>Weekly sales performance</p>
                        </div>

                        <button type="button">
                            This Week
                        </button>

                    </div>


                    <div className="admin-sales-chart-wrapper">

                        {/* Y AXIS */}

                        <div className="admin-sales-y-axis">

                            <span>₹60K</span>
                            <span>₹45K</span>
                            <span>₹30K</span>
                            <span>₹15K</span>
                            <span>₹0</span>

                        </div>


                        <div className="admin-sales-chart">

                            {/* GRID LINES */}

                            <div className="admin-chart-grid-line line-1"></div>
                            <div className="admin-chart-grid-line line-2"></div>
                            <div className="admin-chart-grid-line line-3"></div>
                            <div className="admin-chart-grid-line line-4"></div>
                            <div className="admin-chart-grid-line line-5"></div>


                            {/* =================================
                                DYNAMIC SALES GRAPH
                            ================================= */}

                            <svg
                                viewBox="0 0 700 260"
                                preserveAspectRatio="none"
                                className="admin-main-sales-svg"
                            >

                                <defs>

                                    <linearGradient
                                        id="adminSalesGradient"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >

                                        <stop
                                            offset="0%"
                                            stopColor="#356df3"
                                            stopOpacity="0.28"
                                        />

                                        <stop
                                            offset="100%"
                                            stopColor="#356df3"
                                            stopOpacity="0.02"
                                        />

                                    </linearGradient>

                                </defs>


                                {/* DYNAMIC AREA */}

                                <polygon
                                    points={salesAreaPoints}
                                    fill="url(#adminSalesGradient)"
                                />


                                {/* DYNAMIC LINE */}

                                <polyline
                                    points={salesLinePoints}
                                    fill="none"
                                    stroke="#356df3"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />


                                {/* DYNAMIC DATA POINTS */}

                                {salesPoints.map((point) => (

                                    <circle
                                        key={point.day}
                                        cx={point.x}
                                        cy={point.y}
                                        r="5"
                                        fill="#356df3"
                                    />

                                ))}

                            </svg>


                            {/* DAYS */}

                            <div className="admin-sales-days">

                                {salesData.map((item) => (

                                    <span key={item.day}>
                                        {item.day}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    ORDER STATUS
                ===================================== */}

                <div className="admin-order-status-card">

                    <div className="admin-analytics-heading">

                        <div>
                            <h2>Order Status</h2>
                            <p>Current order distribution</p>
                        </div>

                    </div>


                    <div className="admin-order-status-content">


                        {/* DONUT CHART */}

                        <div className="admin-donut-wrapper">

                            <div className="admin-donut-chart">

                                <div className="admin-donut-center">

                                    <strong>
                                        {dashboardStats.totalOrders}
                                    </strong>

                                    <span>
                                        Orders
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* STATUS LIST */}

                        <div className="admin-order-status-list">

                            {orderStatusData.map((item) => (

                                <div
                                    className="admin-order-status-item"
                                    key={item.status}
                                >

                                    <span
                                        className={`admin-status-dot ${item.status.toLowerCase()}`}
                                    ></span>


                                    <div className="admin-status-details">

                                        <strong>
                                            {item.status}
                                        </strong>

                                        <span>
                                            {item.count} ({item.percentage})
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;