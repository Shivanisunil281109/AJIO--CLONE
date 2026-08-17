import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import "../CSS/OTP.css";

const OTP = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // Get mobile number from Register/Login page
    const mobile = location.state?.mobile || "";

    const [otp, setOtp] = useState("");


    // Back to Register
    const handleBack = () => {

        navigate("/register", {
            state: {
                mobile: mobile
            }
        });

    };


    // Verify OTP
    const handleStartShopping = () => {

        if (otp.trim() === "") {

            alert("Please enter OTP");

            return;
        }

        console.log("Entered OTP:", otp);

        navigate("/");
    };


    return (
        <div className="overlay">

            <div className="otp-box">


                {/* TOP ROW */}

                <div className="top-row">

                    <button
                        className="back-btn"
                        onClick={handleBack}
                    >
                        ← Back
                    </button>


                    <span className="close-btn">
                        ×
                    </span>

                </div>



                {/* HEADING */}

                <h1>
                    Sign In with OTP
                </h1>


                <p className="otp-text">
                    Please enter OTP sent to
                </p>



                {/* MOBILE NUMBER */}

                <div className="mobile-number">

                    +91 {mobile}

                </div>



                {/* OTP INPUT */}

                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />



                {/* RESEND OTP */}

                <div className="resend-row">

                    <span></span>

                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                    >
                        Resend OTP in 55s
                    </a>

                </div>



                {/* START SHOPPING */}

                <button
                    className="shopping-btn"
                    onClick={handleStartShopping}
                >
                    START SHOPPING
                </button>


            </div>

        </div>
    );
};

export default OTP;