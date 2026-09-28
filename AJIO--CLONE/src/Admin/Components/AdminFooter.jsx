import React from "react";
import "../CSS/Admin-footer.css";

const AdminFooter = () => {
    return (
        <footer className="admin-footer">

            {/* TOP FEATURES */}
            <div className="admin-footer-features">

                <div className="admin-footer-feature-item">
                    <span className="material-symbols-outlined">
                        inventory_2
                    </span>

                    <p>PRODUCT MANAGEMENT</p>
                </div>


                <div className="admin-footer-feature-item">
                    <span className="material-symbols-outlined">
                        verified_user
                    </span>

                    <p>SELLER MANAGEMENT</p>
                </div>


                <div className="admin-footer-feature-item">
                    <span className="material-symbols-outlined">
                        monitoring
                    </span>

                    <p>MONITOR BUSINESS</p>
                </div>

            </div>


            {/* MAIN FOOTER */}
            <div className="admin-footer-main">

                <div className="admin-footer-grid">


                    {/* ADMIN */}
                    <div className="admin-footer-column">

                        <h3>AJIO ADMIN</h3>

                        <a href="/admin/dashboard">
                            Admin Dashboard
                        </a>

                        <a href="/admin/product-review">
                            Product Review
                        </a>

                        <a href="/admin/products">
                            All Products
                        </a>

                        <a href="/admin/sellers">
                            All Sellers
                        </a>

                        <a href="/admin/profile">
                            Admin Profile
                        </a>

                    </div>


                    {/* MANAGEMENT */}
                    <div className="admin-footer-column">

                        <h3>MANAGEMENT</h3>

                        <a href="/admin/product-review">
                            Review Products
                        </a>

                        <a href="/admin/products">
                            Manage Products
                        </a>

                        <a href="/admin/sellers">
                            Manage Sellers
                        </a>

                        <a href="#">
                            User Management
                        </a>

                        <a href="#">
                            Order Management
                        </a>

                    </div>


                    {/* ADMIN HELP */}
                    <div className="admin-footer-column">

                        <h3>ADMIN HELP</h3>

                        <a href="#">
                            Admin Support
                        </a>

                        <a href="#">
                            Frequently Asked Questions
                        </a>

                        <a href="#">
                            Product Guidelines
                        </a>

                        <a href="#">
                            Seller Guidelines
                        </a>

                        <a href="#">
                            Platform Policies
                        </a>

                    </div>


                    {/* CONNECT */}
                    <div className="admin-footer-column">

                        <h3>AJIO PLATFORM</h3>

                        <a href="#">
                            Contact Support
                        </a>

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms & Conditions
                        </a>

                        <a href="#">
                            Security
                        </a>

                        <a href="#">
                            AJIO Business
                        </a>

                    </div>

                </div>


                {/* BOTTOM */}
                <div className="admin-footer-bottom">

                    <p>
                        © 2026 AJIO Admin. All Rights Reserved.
                    </p>

                    <p>
                        Managing the AJIO platform efficiently and securely.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default AdminFooter;