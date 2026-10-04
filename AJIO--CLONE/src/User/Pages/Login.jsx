import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import "../CSS/Login.css";

const Login = () => {
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleContinue = () => {
    if (mobile.trim() === "") {
      dispatch(
        showToast({
          message: "⚠️ Please enter your mobile number.",
          type: "error",
        }),
      );
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      dispatch(
        showToast({
          message: "⚠️ Please enter a valid 10-digit mobile number.",
          type: "error",
        }),
      );
      return;
    }

    console.log("Button clicked");

    console.log("Mobile Number:", mobile);

    navigate("/register", {
      state: {
        mobile: mobile,
      },
    });
  };

  return (
    <div className="overlay">
      <div className="login-box">
        <div className="close-btn" onClick={() => navigate("/")}>
          ×
        </div>

        <h1>Welcome to AJIO</h1>

        <label>Enter Mobile Number *</label>

        <input
          type="text"
          placeholder="+91 Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button type="button" className="continue-btn" onClick={handleContinue}>
          CONTINUE
        </button>

        <p className="terms">
          By Signing In, I agree to <a href="#">Terms & Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>

        <div className="bottom-info">
          Email based login is no longer available. Please{" "}
          <a href="#">click here</a> to restore your mobile number.
        </div>
      </div>
    </div>
  );
};

export default Login;
