import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";

import "../CSS/OTP.css";

const OTP = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

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




const handleShopping = () => {
    navigate("/");
};




    // Verify OTP
  const handleStartShopping = async (enteredOtp = otp) => {

if (enteredOtp.trim() === "") {

            dispatch(
                showToast({
                    message: "⚠️ Please enter OTP.",
                    type: "error"
                })
            );

            return;
        }


if (!/^\d{6}$/.test(enteredOtp)) {

            dispatch(
                showToast({
                    message: "⚠️ Please enter a valid 6-digit OTP.",
                    type: "error"
                })
            );

            return;
        }


        console.log("Entered OTP:", enteredOtp);


        try {

            const response = await axios.post(
                "http://localhost:8000/api/auth/verify-otp",
                {
                    mobile: mobile,
                  otp: enteredOtp.trim()
                }
            );


            dispatch(
                showToast({
                    message: "✓ Account verified successfully!",
                    type: "success"
                })
            );


         


        } catch (error) {

            dispatch(
                showToast({
                    message: error.response?.data?.message || "Invalid OTP.",
                    type: "error"
                })
            );

        }

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


                    <span
                        className="otp-close-btn"
                        onClick={() => navigate("/")}
                    >
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
    onChange={(e) => {
        const value = e.target.value;

        setOtp(value);

        if (/^\d{6}$/.test(value)) {
            handleStartShopping(value);
        }
    }}
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
                    onClick={handleShopping}
                >
                    START SHOPPING
                </button>


            </div>

        </div>
    );
};

export default OTP;