import React, { useState } from "react";
import "../CSS/SellerOrders.css";

const SellerOrders = () => {

    // =========================
    // FILTER STATES
    // =========================

    const [selectedStatus, setSelectedStatus] = useState("All Orders");
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    // =========================
    // VIEW ORDER STATE
    // =========================

    const [selectedOrder, setSelectedOrder] = useState(null);
    const [updatedStatus, setUpdatedStatus] = useState("");


    // =========================
    // ORDERS DATA
    // =========================

  const [orders, setOrders] = useState(() => {

    const savedOrders =
        JSON.parse(localStorage.getItem("sellerOrders"));

    if (savedOrders) {
        return savedOrders;
    }

    return [
        {
            id: "#ORD12345",
            customer: "Soniya Datarkar",
            date: "18 May 2026",
            dateValue: "2026-05-18",
            amount: "₹1,499",
            payment: "COD",
            status: "Processing"
        },
        {
            id: "#ORD12344",
            customer: "Neha Patel",
            date: "18 May 2026",
            dateValue: "2026-05-18",
            amount: "₹999",
            payment: "Online",
            status: "Shipped"
        },
        {
            id: "#ORD12343",
            customer: "Amit Verma",
            date: "17 May 2026",
            dateValue: "2026-05-17",
            amount: "₹2,299",
            payment: "Online",
            status: "Delivered"
        },
        {
            id: "#ORD12342",
            customer: "Pooja Singh",
            date: "17 May 2026",
            dateValue: "2026-05-17",
            amount: "₹1,199",
            payment: "COD",
            status: "Processing"
        },
        {
            id: "#ORD12341",
            customer: "Karan Mehta",
            date: "16 May 2026",
            dateValue: "2026-05-16",
            amount: "₹799",
            payment: "Online",
            status: "Cancelled"
        },
        {
            id: "#ORD12340",
            customer: "Sneha Kapoor",
            date: "16 May 2026",
            dateValue: "2026-05-16",
            amount: "₹1,299",
            payment: "Online",
            status: "Shipped"
        },
        {
            id: "#ORD12339",
            customer: "Vikram Joshi",
            date: "15 May 2026",
            dateValue: "2026-05-15",
            amount: "₹899",
            payment: "COD",
            status: "Delivered"
        }
    ];
});


    // =========================
    // FILTER ORDERS
    // =========================

    const filteredOrders = orders.filter((order) => {

        // Status Filter
        const matchesStatus =
            selectedStatus === "All Orders" ||
            order.status === selectedStatus;


        // Search Filter
        const matchesSearch =
            order.id
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            order.customer
                .toLowerCase()
                .includes(searchTerm.toLowerCase());


        // Start Date Filter
        const matchesStartDate =
            !startDate ||
            order.dateValue >= startDate;


        // End Date Filter
        const matchesEndDate =
            !endDate ||
            order.dateValue <= endDate;


        return (
            matchesStatus &&
            matchesSearch &&
            matchesStartDate &&
            matchesEndDate
        );
    });




const handleUpdateStatus = () => {

    const updatedOrders = orders.map((order) => {

        if (order.id === selectedOrder.id) {
            return {
                ...order,
                status: updatedStatus
            };
        }

        return order;
    });

    setOrders(updatedOrders);

    localStorage.setItem(
        "sellerOrders",
        JSON.stringify(updatedOrders)
    );

    setSelectedOrder(null);
};











    return (

        <section className="dashboard-content seller-orders-page">

            <h1 className="page-title">
                Orders
            </h1>


            <div className="orders-container">

                {/* =========================
                    ORDERS FILTER
                ========================== */}

                <div className="orders-filter">


                    {/* STATUS FILTER */}

                    <div className="filter-item order-filter">

                        <select
                            value={selectedStatus}
                            onChange={(e) =>
                                setSelectedStatus(e.target.value)
                            }
                        >
                            <option>All Orders</option>
                            <option>Processing</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                        </select>

                    </div>


                    {/* START DATE */}

                    <div className="filter-item date-box">

                        <span className="material-symbols-outlined">
                            calendar_month
                        </span>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) =>
                                setStartDate(e.target.value)
                            }
                        />

                    </div>


                    <div className="to-text">
                        To
                    </div>


                    {/* END DATE */}

                    <div className="filter-item date-box">

                        <span className="material-symbols-outlined">
                            calendar_month
                        </span>

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) =>
                                setEndDate(e.target.value)
                            }
                        />

                    </div>


                    {/* SEARCH */}

                    <div className="filter-item search-box">

                        <input
                            type="text"
                            placeholder="Search Order"
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                        />

                    </div>

                </div>


                {/* =========================
                    ORDERS TABLE
                ========================== */}

                <div className="orders-table">

                    <table>

                        <thead>

                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>


                        <tbody>

                            {filteredOrders.map((order) => (

                                <tr key={order.id}>

                                    <td>
                                        {order.id}
                                    </td>

                                    <td>
                                        {order.customer}
                                    </td>

                                    <td>
                                        {order.date}
                                    </td>

                                    <td>
                                        {order.amount}
                                    </td>

                                    <td>
                                        {order.payment}
                                    </td>

                                    <td>

                                        <span
                                            className={`status ${order.status.toLowerCase()}`}
                                        >
                                            {order.status}
                                        </span>

                                    </td>


                                    <td>

                                        <button
                                            type="button"
                                            className="view-btn"
                                            onClick={() => {
                                                setSelectedOrder(order);
                                                setUpdatedStatus(order.status);
                                            }}
                                        >
                                            View
                                        </button>

                                    </td>

                                </tr>

                            ))}


                            {/* NO ORDERS FOUND */}

                            {filteredOrders.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="7"
                                        style={{
                                            textAlign: "center",
                                            padding: "30px"
                                        }}
                                    >
                                        No orders found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>


            {/* =========================
                ORDER DETAILS MODAL
            ========================== */}

            {selectedOrder && (

                <div className="order-modal-overlay">

                    <div className="order-modal">


                        {/* MODAL HEADER */}

                        <div className="order-modal-header">

                            <h2>
                                Order Details
                            </h2>

                            <button
                                type="button"
                                className="order-modal-close"
                                onClick={() =>
                                    setSelectedOrder(null)
                                }
                            >
                                ×
                            </button>

                        </div>


                        {/* MODAL CONTENT */}

                        <div className="order-modal-content">


                            <div className="order-detail-row">

                                <span>
                                    Order ID
                                </span>

                                <strong>
                                    {selectedOrder.id}
                                </strong>

                            </div>


                            <div className="order-detail-row">

                                <span>
                                    Customer
                                </span>

                                <strong>
                                    {selectedOrder.customer}
                                </strong>

                            </div>


                            <div className="order-detail-row">

                                <span>
                                    Date
                                </span>

                                <strong>
                                    {selectedOrder.date}
                                </strong>

                            </div>


                            <div className="order-detail-row">

                                <span>
                                    Amount
                                </span>

                                <strong>
                                    {selectedOrder.amount}
                                </strong>

                            </div>


                            <div className="order-detail-row">

                                <span>
                                    Payment
                                </span>

                                <strong>
                                    {selectedOrder.payment}
                                </strong>

                            </div>


                            {/* STATUS DROPDOWN */}

                            <div className="order-detail-row">

                                <span>
                                    Status
                                </span>

                                <select
                                    value={updatedStatus}
                                    onChange={(e) =>
                                        setUpdatedStatus(e.target.value)
                                    }
                                    className="order-status-select"
                                >
                                    <option>Processing</option>
                                    <option>Shipped</option>
                                    <option>Delivered</option>
                                    <option>Cancelled</option>
                                </select>

                            </div>

                        </div>


                        {/* MODAL FOOTER */}

                        <div className="order-modal-footer">

                            <button
    type="button"
    className="order-modal-done"
    onClick={handleUpdateStatus}
>
    Update Status
</button>





                        </div>

                    </div>

                </div>

            )}

        </section>
    );
};

export default SellerOrders;