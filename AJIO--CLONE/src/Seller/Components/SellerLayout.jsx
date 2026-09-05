import React from "react";
import { Outlet } from "react-router";

import SellerSidebar from "./Seller-Sidebar";
import SellerHeader from "./SellerHeader";
import "../CSS/Seller-layout.css";

const SellerLayout = () => {
    return (
        <div className="dashboard-container">

            {/* Seller Sidebar */}
            <SellerSidebar />

            {/* Right Side */}
            <div className="seller-main">

                {/* Seller Header */}
                <SellerHeader />

                {/* Seller Page */}
                <main className="main-content">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default SellerLayout;