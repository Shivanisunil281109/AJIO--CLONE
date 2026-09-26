import React, { useState } from "react";
import "../CSS/Admin-dashboard.css";

const AdminDashboard = () => {

    // =========================================
    // DASHBOARD STATISTICS
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
// GET SELLER CREATED PRODUCTS
// =========================================

const sellerCreatedProducts =
    JSON.parse(
        localStorage.getItem("sellerCreatedProducts")
    ) || [];


// =========================================
// TOTAL PRODUCTS - DYNAMIC
// =========================================

// AdminProducts.jsx contains 6 default products.
// Add Seller-created products to those 6 products.

const totalProducts =
    6 + sellerCreatedProducts.length;



// =========================================
// TOTAL SELLERS - DYNAMIC
// =========================================

// AdminSellers.jsx currently contains 5 registered sellers.

const totalSellers = 5;


// =========================================
// GET REGISTERED USERS
// =========================================

const registeredUsers =
    JSON.parse(
        localStorage.getItem("registeredUsers")
    ) || [];


// =========================================
// TOTAL USERS - DYNAMIC
// =========================================

const totalUsers = registeredUsers.length;


// =========================================
// SALES FILTER STATE
// =========================================

const [selectedWeek, setSelectedWeek] = useState("thisWeek");





    // =========================================
    // THIS WEEK SALES DATA
    // =========================================

    const thisWeekSales = [
        { day: "Mon", sales: 15000 },
        { day: "Tue", sales: 22000 },
        { day: "Wed", sales: 20000 },
        { day: "Thu", sales: 35000 },
        { day: "Fri", sales: 34000 },
        { day: "Sat", sales: 47000 },
        { day: "Sun", sales: 58000 }
    ];


    // =========================================
    // LAST WEEK SALES DATA
    // =========================================

    const lastWeekSales = [
        { day: "Mon", sales: 12000 },
        { day: "Tue", sales: 18000 },
        { day: "Wed", sales: 26000 },
        { day: "Thu", sales: 23000 },
        { day: "Fri", sales: 30000 },
        { day: "Sat", sales: 39000 },
        { day: "Sun", sales: 42000 }
    ];


    // =========================================
    // SELECT SALES DATA
    // =========================================

    const salesData =
        selectedWeek === "thisWeek"
            ? thisWeekSales
            : lastWeekSales;


    // =========================================
    // CHANGE WEEK FUNCTION
    // =========================================

    const handleWeekChange = () => {

        if (selectedWeek === "thisWeek") {
            setSelectedWeek("lastWeek");
        } else {
            setSelectedWeek("thisWeek");
        }
    };


    // =========================================
    // SALES GRAPH CALCULATION
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


    const salesLinePoints = salesPoints
        .map((point) => `${point.x},${point.y}`)
        .join(" ");


    const salesAreaPoints = `
        20,${chartHeight}
        ${salesLinePoints}
        ${chartWidth - 20},${chartHeight}
    `;


    // =========================================
    // GET SELLER ORDERS FROM LOCAL STORAGE
    // =========================================

    const sellerOrders = JSON.parse(
        localStorage.getItem("sellerOrders")
    ) || [];



// =========================================
// TOTAL SOLD PRODUCTS - DYNAMIC
// =========================================

const totalSoldProducts =
    sellerOrders.filter(
        (order) => order.status === "Delivered"
    ).length;

    // =========================================
    // ORDER STATUS DATA - DYNAMIC
    // =========================================

    const orderStatusData = [
        {
            status: "Delivered",
            count: sellerOrders.filter(
                (order) => order.status === "Delivered"
            ).length
        },
        {
            status: "Processing",
            count: sellerOrders.filter(
                (order) => order.status === "Processing"
            ).length
        },
        {
            status: "Shipped",
            count: sellerOrders.filter(
                (order) => order.status === "Shipped"
            ).length
        },
        {
            status: "Cancelled",
            count: sellerOrders.filter(
                (order) => order.status === "Cancelled"
            ).length
        }
    ];


    // =========================================
    // TOTAL ORDERS
    // =========================================

    const totalStatusOrders = orderStatusData.reduce(
        (total, item) => total + item.count,
        0
    );


    // =========================================
    // AUTOMATIC PERCENTAGES
    // =========================================

    const orderStatusWithPercentage = orderStatusData.map((item) => ({
        ...item,

        percentage:
            totalStatusOrders === 0
                ? "0.0"
                : ((item.count / totalStatusOrders) * 100).toFixed(1)
    }));


    // =========================================
    // DYNAMIC DONUT CHART PERCENTAGES
    // =========================================

    const deliveredPercentage =
        totalStatusOrders === 0
            ? 0
            : (orderStatusData[0].count / totalStatusOrders) * 100;

    const processingPercentage =
        totalStatusOrders === 0
            ? 0
            : (orderStatusData[1].count / totalStatusOrders) * 100;

    const shippedPercentage =
        totalStatusOrders === 0
            ? 0
            : (orderStatusData[2].count / totalStatusOrders) * 100;

    const deliveredEnd = deliveredPercentage;

    const processingEnd =
        deliveredPercentage + processingPercentage;

    const shippedEnd =
        deliveredPercentage +
        processingPercentage +
        shippedPercentage;


    const donutBackground =
        totalStatusOrders === 0
            ? "#e5e7eb"
            : `conic-gradient(
                #22c55e 0% ${deliveredEnd}%,
                #356df3 ${deliveredEnd}% ${processingEnd}%,
                #f59e0b ${processingEnd}% ${shippedEnd}%,
                #ef4444 ${shippedEnd}% 100%
            )`;


    // =========================================
    // GET SELLER ORDER BY ORDER ID
    // =========================================

    const getSellerOrder = (orderId) => {

        return sellerOrders.find(
            (order) => order.id === orderId
        );
    };


    // =========================================
    // FORMAT SELLER DATE FOR ADMIN
    // =========================================

    const formatSellerDate = (dateValue, fallbackDate) => {

        if (!dateValue) {
            return fallbackDate;
        }

        const [year, month, day] = dateValue.split("-");

        const date = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
        );

        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };


    // =========================================
    // CONVERT SELLER AMOUNT TO NUMBER
    // =========================================

    const getSellerAmount = (amount, fallbackAmount) => {

        if (!amount) {
            return fallbackAmount;
        }

        const numericAmount = Number(
            String(amount).replace(/[₹,\s]/g, "")
        );

        return Number.isNaN(numericAmount)
            ? fallbackAmount
            : numericAmount;
    };


    // =========================================
    // ADMIN LATEST ORDER INFORMATION
    // =========================================

    const adminLatestOrders = [
        {
            orderId: "#AJ1245786",
            productName: "Men Casual Shirt",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20251110/hpeH/69120e5e88d6d62ff8da2a5a/urbano_fashion_pink_men_cotton_regular_fit_shirt.jpg",
            customer: "Rohit Joshi",
            seller: "Fashion Studio",
            date: "May 31, 2026",
            amount: 2499,
            status: "Processing"
        },
        {
            orderId: "#AJ1245785",
            productName: "Running Shoes",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230629/T4Ec/649cce75a9b42d15c91b8114/asian_white_low-top_lace-up_running_shoes.jpg",
            customer: "Rahul Patel",
            seller: "Sports Hub",
            date: "May 31, 2026",
            amount: 1799,
            status: "Processing"
        },
        {
            orderId: "#AJ1245784",
            productName: "Smart Watch",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260602/01z6/6a1e4294fcb5bb61d2ffbbf3/noise_black_bluetooth_calling_smartwatch-pulse2_pro_m_bk.jpg",
            customer: "Sneha",
            seller: "Tech World",
            date: "May 30, 2026",
            amount: 2999,
            status: "Shipped"
        },
        {
            orderId: "#AJ1245783",
            productName: "Women Kurta",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260523/mJPl/6a10b6ecfcb5bb61d2e103e5/forkey_maroon_women_embroidered_round-neck_straight_kurta.jpg",
            customer: "Priya",
            seller: "Beauty Glam",
            date: "May 30, 2026",
            amount: 1299,
            status: "Delivered"
        },
        {
            orderId: "#AJ1245782",
            productName: "Slim Fit Jeans",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20251210/xNGA/6939a9498945db77cf242b54/van_heusen_black_men_slim_fit_mid-rise_jeans.jpg",
            customer: "Amit",
            seller: "Denim Store",
            date: "May 29, 2026",
            amount: 2099,
            status: "Cancelled"
        },

        // =========================================
        // NEW ORDER 81
        // =========================================

        {
            orderId: "#AJ1245781",
            productName: "Casual Top",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260430/5IGy/69f38c0dfcb5bb61d294b28a/fyre_rose_mauve_women_regular_fit_top.jpg",
            customer: "Sneha Kapoor",
            seller: "Fashion Studio",
            date: "May 16, 2026",
            amount: 1299,
            status: "Shipped"
        },

        // =========================================
        // NEW ORDER 80
        // =========================================

        {
            orderId: "#AJ1245780",
            productName: "Casual Shirt",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260727/dWuI/6a66fe7f5d467f347a854ba9/dnmx_blue_men_checked_regular_fit_shirt_with_patch_pocket.jpg",
            customer: "Vikram Joshi",
            seller: "Fashion Studio",
            date: "May 15, 2026",
            amount: 899,
            status: "Delivered"
        }
    ];


    // =========================================
    // SYNC ADMIN ORDERS WITH SELLER ORDERS
    // =========================================

    const latestOrders = adminLatestOrders.map((adminOrder) => {

        const sellerOrder =
            getSellerOrder(adminOrder.orderId);

        if (!sellerOrder) {
            return adminOrder;
        }

        return {
            ...adminOrder,

            orderId:
                sellerOrder.id ||
                adminOrder.orderId,

            customer:
                sellerOrder.customer ||
                adminOrder.customer,

            seller:
                sellerOrder.seller ||
                adminOrder.seller,

            productName:
                sellerOrder.productName ||
                adminOrder.productName,

            date: formatSellerDate(
                sellerOrder.dateValue,
                adminOrder.date
            ),

            amount: getSellerAmount(
                sellerOrder.amount,
                adminOrder.amount
            ),

            status:
                sellerOrder.status ||
                adminOrder.status
        };
    });


    return (

        <div className="admin-dashboard-page">

            {/* PAGE HEADING */}

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


                {/* ALL PRODUCTS */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            inventory_2
                        </span>

                        <div className="admin-stat-info">
                            <p>All Products</p>
                            <h2>{totalProducts}</h2>
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


                {/* ALL SELLERS */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            storefront
                        </span>

                        <div className="admin-stat-info">
                       <p>All Sellers</p>
                      <h2>{totalSellers}</h2>
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


                {/* ALL USERS */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            group
                        </span>

                        <div className="admin-stat-info">
                            <p>All Users</p>
                           <h2>{totalUsers}</h2>
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


                {/* TOTAL SOLD PRODUCTS */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            shopping_bag
                        </span>

                        <div className="admin-stat-info">
                             <p>Total Sold Products</p>
                                  <h2>{totalSoldProducts}</h2>
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


                {/* TOTAL ORDERS */}

                <div className="admin-stat-card">

                    <div className="admin-stat-top">

                        <span className="material-symbols-outlined admin-stat-icon">
                            receipt_long
                        </span>

                        <div className="admin-stat-info">
                            <p>Total Orders</p>
                       <h2>{sellerOrders.length}</h2>
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
                ANALYTICS
            ========================================= */}

            <div className="admin-analytics-grid">


                {/* SALES OVERVIEW */}

                <div className="admin-sales-overview">

                    <div className="admin-analytics-heading">

                        <div>

                            <h2>Sales Overview</h2>

                            <p>
                                {selectedWeek === "thisWeek"
                                    ? "This week's sales performance"
                                    : "Last week's sales performance"}
                            </p>

                        </div>


                        <button
                            type="button"
                            onClick={handleWeekChange}
                        >
                            {selectedWeek === "thisWeek"
                                ? "This Week"
                                : "Last Week"}
                        </button>

                    </div>


                    <div className="admin-sales-chart-wrapper">

                        <div className="admin-sales-y-axis">

                            <span>₹60K</span>
                            <span>₹45K</span>
                            <span>₹30K</span>
                            <span>₹15K</span>
                            <span>₹0</span>

                        </div>


                        <div className="admin-sales-chart">

                            <div className="admin-chart-grid-line line-1"></div>
                            <div className="admin-chart-grid-line line-2"></div>
                            <div className="admin-chart-grid-line line-3"></div>
                            <div className="admin-chart-grid-line line-4"></div>
                            <div className="admin-chart-grid-line line-5"></div>


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
                                            className="admin-sales-gradient-start"
                                        />

                                        <stop
                                            offset="100%"
                                            className="admin-sales-gradient-end"
                                        />

                                    </linearGradient>

                                </defs>


                                <polygon
                                    points={salesAreaPoints}
                                    fill="url(#adminSalesGradient)"
                                />


                                <polyline
                                    points={salesLinePoints}
                                    className="admin-sales-line"
                                />


                                {salesPoints.map((point) => (

                                    <circle
                                        key={point.day}
                                        cx={point.x}
                                        cy={point.y}
                                        r="5"
                                        className="admin-sales-point"
                                    />

                                ))}

                            </svg>


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


                {/* ORDER STATUS */}

                <div className="admin-order-status-card">

                    <div className="admin-analytics-heading">

                        <div>
                            <h2>Order Status</h2>
                            <p>Current order distribution</p>
                        </div>

                    </div>


                    <div className="admin-order-status-content">

                        <div className="admin-donut-wrapper">

                            <div
                                className="admin-donut-chart"
                                style={{
                                    background: donutBackground
                                }}
                            >

                                <div className="admin-donut-center">

                                    <strong>
                                        {totalStatusOrders}
                                    </strong>

                                    <span>
                                        Orders
                                    </span>

                                </div>

                            </div>

                        </div>


                        <div className="admin-order-status-list">

                            {orderStatusWithPercentage.map((item) => (

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
                                            {item.count} ({item.percentage}%)
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================
                LATEST ORDERS - ALL SELLERS
            ========================================= */}

            <div className="admin-latest-orders-card">

                <div className="admin-latest-orders-header">

                    <div>
                        <h2>Latest Orders</h2>
                        <p>Recent orders from all sellers</p>
                    </div>

                </div>


                <div className="admin-latest-orders-table-wrapper">

                    <table className="admin-latest-orders-table">

                        <thead>

                            <tr>
                                <th>Product</th>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Seller</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>

                        </thead>


                        <tbody>

                            {latestOrders.map((order) => (

                                <tr key={order.orderId}>

                                    {/* PRODUCT */}

                                    <td>

                                        <div className="admin-latest-product">

                                            <img
                                                src={order.image}
                                                alt={order.productName}
                                                className="admin-latest-product-image"
                                            />

                                            <span>
                                                {order.productName}
                                            </span>

                                        </div>

                                    </td>


                                    {/* ORDER ID */}

                                    <td className="admin-order-id">
                                        {order.orderId}
                                    </td>


                                    {/* CUSTOMER */}

                                    <td>
                                        {order.customer}
                                    </td>


                                    {/* SELLER */}

                                    <td>
                                        {order.seller}
                                    </td>


                                    {/* DATE */}

                                    <td>
                                        {order.date}
                                    </td>


                                    {/* AMOUNT */}

                                    <td className="admin-order-amount">
                                        ₹{order.amount.toLocaleString("en-IN")}
                                    </td>


                                    {/* STATUS */}

                                    <td>

                                        <span
                                            className={`admin-order-badge admin-order-${order.status.toLowerCase()}`}
                                        >
                                            {order.status}
                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;