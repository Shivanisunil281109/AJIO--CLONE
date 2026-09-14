import React from "react";
import { Outlet } from "react-router";

import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";

import "../CSS/Seller-layout.css";

const SellerLayout = () => {

    return (
        <div className="seller-layout">

            {/* Top Seller Navbar */}
            <SellerHeader />

            {/* Seller Page Content */}
            <main className="seller-main-content">
                <Outlet />
            </main>

            {/* Seller Footer */}
            <SellerFooter />

        </div>
    );
};

export default SellerLayout;