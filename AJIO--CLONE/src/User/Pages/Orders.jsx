
import React, { useEffect, useState } from "react";
import "../CSS/Orders.css";

const Orders = () => {

const [cartItems, setCartItems] = useState([]);

const [orders, setOrders] = useState([]);

const [orderData, setOrderData] = useState({});

const hasOrder = orders.length > 0;

const [orderStatus, setOrderStatus] = useState("Confirmed");


    const [returnMessage, setReturnMessage] = useState("");

    // CUSTOMER RATING
    const [rating, setRating] = useState(null);
    const [ratingMessage, setRatingMessage] = useState("");


    // =====================================================
    // GET ORDER ITEMS
    // =====================================================

    useEffect(() => {

    const savedOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

    const ordersArray =
        Array.isArray(savedOrders)
            ? savedOrders
            : savedOrders.orderId
                ? [savedOrders]
                : [];

    setOrders(ordersArray);

    const savedOrder = ordersArray[0] || {};

    setOrderData(savedOrder);

    setCartItems(savedOrder.products || []);


        // =====================================================
        // LOAD SAVED RATING
        // =====================================================

        if (savedOrder.rating) {

            setRating(savedOrder.rating);

        }


        let status = savedOrder.status || "Confirmed";


        // =====================================================
        // CHECK DELIVERY DATE
        // =====================================================

        if (savedOrder.deliveryDate) {

            const today = new Date();

            const [day, month, year] =
                savedOrder.deliveryDate.split("/");

            const deliveryDate = new Date(
                year,
                month - 1,
                day
            );




            if (
    today >= deliveryDate &&
    status === "Confirmed"
) {

    status = "Delivered";

    const updatedOrder = {
        ...savedOrder,
        status: "Delivered"
    };

    const updatedOrders = ordersArray.map((order) =>
        order.orderId === updatedOrder.orderId
            ? updatedOrder
            : order
    );

    setOrders(updatedOrders);

    localStorage.setItem(
        "orders",
        JSON.stringify(updatedOrders)
    );

    setOrderData(updatedOrder);
}





        }


        setOrderStatus(status);


        // =====================================================
        // SHOW RETURN MESSAGE IF ALREADY REQUESTED
        // =====================================================

        if (status === "Return Requested") {

            setReturnMessage(
                "Your return request has been successfully submitted."
            );

        }

    }, []);


    // =====================================================
    // CUSTOMER RATING
    // =====================================================

    const handleRating = (value) => {

        setRating(value);

        setRatingMessage("");

    };


    // =====================================================
    // CANCEL ORDER
    // =====================================================


    const handleCancelOrder = () => {

    const updatedOrder = {
        ...orderData,
        status: "Cancelled"
    };

    // Update this order inside all orders
    const updatedOrders = orders.map((order) =>
        order.orderId === updatedOrder.orderId
            ? updatedOrder
            : order
    );

    setOrderData(updatedOrder);

    setOrders(updatedOrders);

    setOrderStatus("Cancelled");

    localStorage.setItem(
        "orders",
        JSON.stringify(updatedOrders)
    );
};


    // =====================================================
    // RETURN ORDER
    // =====================================================

   const handleReturnOrder = () => {

    const updatedOrder = {
        ...orderData,
        status: "Return Requested"
    };

    const updatedOrders = orders.map((order) =>
        order.orderId === updatedOrder.orderId
            ? updatedOrder
            : order
    );

    setOrderData(updatedOrder);

    setOrders(updatedOrders);

    setOrderStatus("Return Requested");

    localStorage.setItem(
        "orders",
        JSON.stringify(updatedOrders)
    );

    setReturnMessage(
        "Your return request has been successfully submitted."
    );
};

    // =====================================================
    // SUBMIT RATING
    // =====================================================

    const handleSubmitRating = () => {

    if (!rating) {

        setRatingMessage(
            "Please select a rating."
        );

        return;
    }

    const updatedOrder = {
        ...orderData,
        rating: rating
    };

    const updatedOrders = orders.map((order) =>
        order.orderId === updatedOrder.orderId
            ? updatedOrder
            : order
    );

    setOrderData(updatedOrder);

    setOrders(updatedOrders);

    localStorage.setItem(
        "orders",
        JSON.stringify(updatedOrders)
    );

    setRatingMessage(
        `Thank you for rating AJIO ${rating}/10.`
    );
};


    // =====================================================
    // CONTINUE SHOPPING
    // =====================================================
const handleContinueShopping = () => {

    window.location.href = "/";

};


const handleViewOrder = (order) => {

    setOrderData(order);

    setCartItems(order.products || []);

    setOrderStatus(
        order.status || "Confirmed"
    );

    setRating(
        order.rating || null
    );

    setRatingMessage("");

    if (order.status === "Return Requested") {

        setReturnMessage(
            "Your return request has been successfully submitted."
        );

    } else {

        setReturnMessage("");

    }
};



    return (

        <div className="orders-page">


            {/* =====================================================
                        EMPTY ORDERS
            ====================================================== */}

            {!hasOrder && (

                <div className="empty-orders">

                    <h2>
                        No Orders Yet
                    </h2>

                    <p>
                        You haven't placed any orders yet.
                    </p>

                    <button
                        onClick={handleContinueShopping}
                    >
                        CONTINUE SHOPPING
                    </button>

                </div>

            )}


            {/* =====================================================
                        SHOW ORDER ONLY IF ORDER EXISTS
            ====================================================== */}

            {hasOrder && (

                <>








                    {/* =====================================================
                                ORDER SUCCESS BAR
                    ====================================================== */}

                    <section className="order-success">

                        <div className="success-container">

                            <div className="success-message">

                                <p>

                                    Thank you{" "}

                                    <strong>
                                        Shivani Sonawane
                                    </strong>

                                    , for placing an order with us.

                                    Your order{" "}

                                    <span className="order-id">

                                        {orderData.orderId}

                                    </span>{" "}

                                    is confirmed.

                                </p>


                                <p className="delivery-text">

                                    We expect to deliver your order by{" "}

                                    <strong>
                                        {orderData.deliveryDate}
                                    </strong>

                                </p>

                            </div>


                            <div className="shopping-btn">

                                <button
                                    onClick={handleContinueShopping}
                                >
                                    CONTINUE SHOPPING
                                </button>

                            </div>

                        </div>

                    </section>












{/* =====================================================
                MY ORDERS HISTORY
===================================================== */}

<section className="order-history">

    <h2>My Orders</h2>

    <div className="order-history-list">

        {orders.map((order) => (

            <button
                type="button"
                key={order.orderId}
                className={`order-history-item ${
                    orderData.orderId === order.orderId
                        ? "active"
                        : ""
                }`}
                onClick={() => handleViewOrder(order)}
            >

                <span>
                    {order.orderId}
                </span>

                <span>
                    {order.orderDate}
                </span>

                <span>
                    {order.status || "Confirmed"}
                </span>

            </button>

        ))}

    </div>

</section>












                    {/* =====================================================
                                ORDER SUMMARY TITLE
                    ====================================================== */}

                    <main>

                        <div className="order-info">

                            <h2>
                                Order Summary
                            </h2>

                        </div>


                        {/* =====================================================
                                    MAIN ORDER LAYOUT
                        ====================================================== */}

                        <div className="order-main">


                            {/* =================================================
                                        LEFT SIDE
                            ================================================== */}

                            <div className="order-left">


                                {/* =================================================
                                            DYNAMIC ORDER PRODUCTS
                                ================================================== */}

                                {cartItems.map((item) => (

                                    <div
                                        className="order-product-card"
                                        key={item.id}
                                    >


                                        {/* PRODUCT IMAGE */}

                                        <div className="product-image">

                                            <img
                                                src={
                                                    item.mainImage ||
                                                    item.image
                                                }
                                                alt={item.name}
                                            />


                                            <p className="delivery-date">

                                                Expected Delivery :{" "}

                                                {orderData.deliveryDate}

                                            </p>

                                        </div>


                                        {/* PRODUCT DETAILS */}

                                        <div className="order-product-details">

                                            <div className="product-info">

                                                <h3>
                                                    {item.name}
                                                </h3>


                                                <p className="size">

                                                    Size :{" "}

                                                    <strong>
                                                        {item.selectedSize || "M"}
                                                    </strong>

                                                </p>


                                                <p className="size">

                                                    Qty :{" "}

                                                    <strong>
                                                        {Number(item.quantity) || 1}
                                                    </strong>

                                                </p>

                                            </div>


                                            {/* PRICE */}

                                            <div className="price-section">

                                                <p className="old-price">

                                                    {item.oldPrice || item.price}

                                                </p>


                                                <p className="discount">

                                                    {item.discount}

                                                </p>


                                                <h4>

                                                    {item.price}

                                                </h4>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>


                            {/* =====================================================
                                        RIGHT SIDE
                            ====================================================== */}

                            <div className="cart-right">


                                {/* WHAT HAPPENS NEXT */}

                                <div className="info-card">

                                    <h3>
                                        What Happens Next
                                    </h3>

                                    <p>

                                        Your order has been confirmed
                                        and is being processed.

                                    </p>

                                    <p>

                                        You'll receive updates via SMS
                                        and email as your order moves
                                        through different stages.

                                    </p>

                                </div>


                                {/* YOU HAVE EARNED */}

                                <div className="info-card">

                                    <h3>
                                        You Have Earned
                                    </h3>

                                    <div className="earned-box">

                                        <span className="earned-points">

                                            138 AJIO Points

                                        </span>

                                    </div>

                                    <p>

                                        AJIO Points will be credited
                                        after successful delivery.

                                    </p>

                                </div>


                                {/* ORDER DETAILS */}

                                <div className="info-card">

                                    <h3>
                                        Order Details
                                    </h3>


                                    <div className="detail-row">

                                        <span>
                                            Order ID
                                        </span>

                                        <span>
                                            {orderData.orderId}
                                        </span>

                                    </div>


                                    <div className="detail-row">

                                        <span>
                                            Order Date
                                        </span>

                                        <span>
                                            {orderData.orderDate}
                                        </span>

                                    </div>


                                    <div className="detail-row">

                                        <span>
                                            Payment Mode
                                        </span>

                                        <span>
                                            {orderData.paymentMode}
                                        </span>

                                    </div>


                                    <div className="detail-row">

                                        <span>
                                            Delivery Address
                                        </span>

                                        <span className="address">

                                            Shivani Sonawane
                                            <br />

                                            Opposite Central Bank of India,
                                            <br />

                                            Usar, Tal. Alibag,
                                            <br />

                                            Dist. Raigad - 402203,
                                            <br />

                                            Maharashtra

                                        </span>

                                    </div>


                                    <div className="detail-row">

                                        <span>
                                            Mobile Number
                                        </span>

                                        <span>
                                            +91 91680 77927
                                        </span>

                                    </div>


                                    {/* ORDER STATUS */}

                                    <div className="detail-row">

                                        <span>
                                            Order Status
                                        </span>

                                        <span>
                                            {orderStatus}
                                        </span>

                                    </div>


                                    {/* RETURN MESSAGE */}

                                    {returnMessage && (

                                        <p className="return-message">

                                            {returnMessage}

                                        </p>

                                    )}


                                    {/* CANCEL ORDER BUTTON */}

                                    {orderStatus === "Confirmed" && (

                                        <button
                                            className="cancel-order-btn"
                                            onClick={handleCancelOrder}
                                        >
                                            CANCEL ORDER
                                        </button>

                                    )}


                                    {/* RETURN ORDER BUTTON */}

                                    {orderStatus === "Delivered" && (

                                        <button
                                            className="return-order-btn"
                                            onClick={handleReturnOrder}
                                        >
                                            RETURN ORDER
                                        </button>

                                    )}

                                </div>

                            </div>

                        </div>


                        {/* =====================================================
                                    CUSTOMER RATING
                        ====================================================== */}

                        <section className="customer-rating">

                            <h2>
                                Loving AJIO?
                            </h2>

                            <p>

                                Based on your shopping experience,
                                <br />

                                how likely are you to recommend AJIO
                                to Friends and Family?

                            </p>


                            <div className="rating-numbers">

                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                    (number) => (

                                        <button
                                            key={number}
                                            className={
                                                rating === number
                                                    ? "selected-rating"
                                                    : ""
                                            }
                                            onClick={() =>
                                                handleRating(number)
                                            }
                                        >

                                            {number}

                                        </button>

                                    )
                                )}

                            </div>


                            {/* RATING MESSAGE */}

                            {ratingMessage && (

                                <p className="rating-message">

                                    {ratingMessage}

                                </p>

                            )}


                            <button
                                className="submit-rating"
                                onClick={handleSubmitRating}
                            >
                                SUBMIT & CONTINUE
                            </button>

                        </section>


                    </main>

                </>

            )}

        </div>

    );

};


export default Orders;