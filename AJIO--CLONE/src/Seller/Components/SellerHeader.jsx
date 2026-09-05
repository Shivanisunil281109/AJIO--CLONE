import React from "react";
import "../CSS/Seller-header.css";

const SellerHeader = () => {
    return (
        <header className="seller-header">

            {/* Left Side */}
            <div className="header-left">

                <span className="material-symbols-outlined menu-icon">
                    menu
                </span>

            </div>


            {/* Right Side */}
            <div className="header-right">

                {/* Seller Support */}
                <div className="support">

                    <span className="material-symbols-outlined">
                        headset_mic
                    </span>

                    <span>
                        Seller Support
                    </span>

                </div>


                {/* Notification */}
                <span className="material-symbols-outlined notification">
                    notifications
                </span>


                {/* Profile */}
                <div className="profile-icon">

                    <span className="material-symbols-outlined">
                        account_circle
                    </span>

                </div>

            </div>

        </header>
    );
};

export default SellerHeader;