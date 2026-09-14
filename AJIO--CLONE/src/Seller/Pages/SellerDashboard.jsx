import React from "react";
import { useNavigate } from "react-router";
import "../CSS/Seller-dashboard.css";

const SellerDashboard = () => {

    // =========================
    // NAVIGATION
    // =========================

    const navigate = useNavigate();


    // =========================
    // TOTAL PRODUCTS
    // =========================

    const createdProducts =
        JSON.parse(
            localStorage.getItem("sellerCreatedProducts")
        ) || [];

    const totalProducts = 7 + createdProducts.length;


    // =========================
    // TOTAL ORDERS
    // =========================

    const sellerOrders =
        JSON.parse(
            localStorage.getItem("sellerOrders")
        ) || [];

    const totalOrders = sellerOrders.length;


    // =========================
    // SOLD PRODUCTS
    // =========================

    const soldProducts = sellerOrders.filter(
        (order) => order.status === "Delivered"
    ).length;


    // =========================
    // TOTAL REVENUE
    // =========================

    const totalRevenue = sellerOrders
        .filter(
            (order) => order.status === "Delivered"
        )
        .reduce((total, order) => {

            const amount = Number(
                String(order.amount)
                    .replace("₹", "")
                    .replace(/,/g, "")
                    .trim()
            );

            return total + amount;

        }, 0);


    // =========================
    // LATEST ORDERS
    // =========================

    const latestOrders = sellerOrders.slice(0, 5);


    // =========================
    // TOP SELLING PRODUCTS
    // =========================

    const topSellingProducts = [

        {
            id: 1,
            name: "Men Solid Shirt",
            sold: 120,
            price: "₹999",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260511/tg0D/6a01bba414d0c21719d110d7/buda_jeans_co_black_men_regular_fit_polo-neck_t-shirt.jpg"
        },

        {
            id: 2,
            name: "Women Printed Kurta",
            sold: 98,
            price: "₹899",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260511/BLIR/6a01c69f14d0c21719d2899a/svaraa_orange_women_printed_2-piece_straight_kurta_set.jpg"
        },

        {
            id: 3,
            name: "Men Slim Fit Jeans",
            sold: 85,
            price: "₹1,499",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230623/AA8r/6495d398a9b42d15c9cb61ed/produkt_by_jack_%26_jones_grey_men_lightly_washed_slim_fit_jeans.jpg"
        },

        {
            id: 4,
            name: "Women Casual Top",
            sold: 72,
            price: "₹699",
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250720/EXXc/687cc85f6034bf77f0df551c/revangi_lavender_women_regular_fit_top.jpg"
        }

    ];


    // =========================
    // ORDER STATUS CLASS
    // =========================

    const getStatusClass = (status) => {

        if (status === "Processing") {
            return "seller-dashboard-status-processing";
        }

        if (status === "Shipped") {
            return "seller-dashboard-status-shipped";
        }

        if (status === "Delivered") {
            return "seller-dashboard-status-delivered";
        }

        if (status === "Cancelled") {
            return "seller-dashboard-status-cancelled";
        }

        return "";
    };


    return (

        <div className="seller-dashboard-page">

            {/* =========================
                DASHBOARD CARDS
            ========================== */}

            <section className="seller-dashboard-content">

                <h2 className="seller-dashboard-page-title">
                    Seller Dashboard
                </h2>


                <div className="seller-dashboard-cards">

                    {/* TOTAL PRODUCTS */}

                    <div className="seller-dashboard-card">

                        <h4>
                            Total Products
                        </h4>

                        <h2>
                            {totalProducts}
                        </h2>

                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/seller/products");
                            }}
                        >
                            View all products
                        </a>

                    </div>


                    {/* SOLD PRODUCTS */}

                    <div className="seller-dashboard-card">

                        <h4>
                            Sold Products
                        </h4>

                        <h2>
                            {soldProducts}
                        </h2>

                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/seller/products");
                            }}
                        >
                            View sold products
                        </a>

                    </div>


                    {/* TOTAL ORDERS */}

                    <div className="seller-dashboard-card">

                        <h4>
                            Total Orders
                        </h4>

                        <h2>
                            {totalOrders}
                        </h2>

                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/seller/orders");
                            }}
                        >
                            View all orders
                        </a>

                    </div>


                    {/* TOTAL REVENUE */}

                    <div className="seller-dashboard-card">

                        <h4>
                            Total Revenue
                        </h4>

                        <h2>
                            ₹{totalRevenue.toLocaleString("en-IN")}
                        </h2>

                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/seller/profit");
                            }}
                        >
                            View all payments
                        </a>

                    </div>

                </div>

            </section>


            {/* =========================
                LATEST ORDERS + PRODUCTS
            ========================== */}

            <section
                className="
                    seller-dashboard-content
                    seller-dashboard-lower-section
                "
            >

                <div className="seller-dashboard-bottom">


                    {/* =========================
                        LATEST ORDERS
                    ========================== */}

                    <div className="seller-dashboard-orders-panel">

                        <div className="seller-dashboard-panel-header">

                            <h3>
                                Latest Orders
                            </h3>

                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/seller/orders");
                                }}
                            >
                                View All
                            </a>

                        </div>


                        <table className="seller-dashboard-orders-table">

                            <tbody>

                                {latestOrders.map((order) => (

                                    <tr key={order.id}>

                                        <td>
                                            {order.id}
                                        </td>

                                        <td>
                                            {order.customer}
                                        </td>

                                        <td>
                                            {order.amount}
                                        </td>

                                        <td
                                            className={
                                                getStatusClass(
                                                    order.status
                                                )
                                            }
                                        >
                                            {order.status}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>


                    {/* =========================
                        TOP SELLING PRODUCTS
                    ========================== */}

                    <div className="seller-dashboard-products-panel">

                        <div className="seller-dashboard-panel-header">

                            <h3>
                                Top Selling Products
                            </h3>

                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/seller/products");
                                }}
                            >
                                View All
                            </a>

                        </div>


                        {topSellingProducts.map((product) => (

                            <div
                                className="seller-dashboard-product-item"
                                key={product.id}
                            >

                                <img
                                    className="seller-dashboard-product-image"
                                    src={product.image}
                                    alt={product.name}
                                />


                                <div className="seller-dashboard-product-info">

                                    <h4>
                                        {product.name}
                                    </h4>

                                </div>


                                <div className="seller-dashboard-sold-info">

                                    <span>
                                        {product.sold}
                                    </span>

                                    <small>
                                        Sold
                                    </small>

                                </div>


                                <span className="seller-dashboard-product-price">
                                    {product.price}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>

    );
};

export default SellerDashboard;