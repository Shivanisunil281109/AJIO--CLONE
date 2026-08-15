import React from "react";
import "../CSS/UserFooter.css";

const UserFooter = () => {
    return (
        <footer className="footer">

            {/* ================= FOOTER TOP ================= */}

            <div className="footer-top">

                <div className="feature">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <h4>EASY EXCHANGE</h4>
                </div>

                <div className="feature">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                    <h4>100% HANDPICKED</h4>
                </div>

                <div className="feature">
                    <i className="fa-solid fa-circle-check"></i>
                    <h4>ASSURED QUALITY</h4>
                </div>

            </div>


            {/* ================= FOOTER BOTTOM ================= */}

            <div className="footer-bottom">

                {/* AJIO */}

                <div className="footer-column">

                    <h3>AJIO</h3>

                    <ul>
                        <li>
                            <a href="#">Who We Are</a>
                        </li>

                        <li>
                            <a href="#">Join Our Team</a>
                        </li>

                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>

                        <li>
                            <a href="#">We Respect Your Privacy</a>
                        </li>

                        <li>
                            <a href="#">Fees & Payments</a>
                        </li>

                        <li>
                            <a href="#">Returns & Refunds Policy</a>
                        </li>

                        <li>
                            <a href="#">Promotions Terms & Conditions</a>
                        </li>
                    </ul>

                </div>


                {/* HELP */}

                <div className="footer-column">

                    <h3>HELP</h3>

                    <ul>

                        <li>
                            <a href="#">Track Your Order</a>
                        </li>

                        <li>
                            <a href="#">Frequently Asked Questions</a>
                        </li>

                        <li>
                            <a href="#">Returns</a>
                        </li>

                        <li>
                            <a href="#">Cancellations</a>
                        </li>

                        <li>
                            <a href="#">Payments</a>
                        </li>

                        <li>
                            <a href="#">Customer Care</a>
                        </li>

                        <li>
                            <a href="#">How Do I Redeem My Coupon</a>
                        </li>

                    </ul>

                </div>


                {/* SHOP BY */}

                <div className="footer-column">

                    <h3>SHOP BY</h3>

                    <ul>

                        <li>
                            <a href="#">Men</a>
                        </li>

                        <li>
                            <a href="#">Women</a>
                        </li>

                        <li>
                            <a href="#">Kids</a>
                        </li>

                        <li>
                            <a href="#">Indie</a>
                        </li>

                        <li>
                            <a href="#">Stores</a>
                        </li>

                        <li>
                            <a href="#">New Arrivals</a>
                        </li>

                        <li>
                            <a href="#">Brand Directory</a>
                        </li>

                    </ul>

                </div>


                {/* FOLLOW US */}

                <div className="footer-column">

                    <h3>FOLLOW US</h3>

                    <ul>

                        <li>
                            <a href="#">Facebook</a>
                        </li>

                        <li>
                            <a href="#">Instagram - AJIOlife</a>
                        </li>

                        <li>
                            <a href="#">Instagram - AJIO LUXE</a>
                        </li>

                        <li>
                            <a href="#">Twitter</a>
                        </li>

                        <li>
                            <a href="#">Pinterest</a>
                        </li>

                    </ul>

                </div>

            </div>

        </footer>
    );
};

export default UserFooter;