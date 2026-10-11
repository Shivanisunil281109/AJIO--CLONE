
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import "../CSS/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [mobile, setMobile] = useState(
    location.state?.mobile || ""
  );

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [role, setRole] = useState("");

  const handleBack = () => {
    navigate("/login");
  };

  const handleSendOTP = async () => {
    // Mobile validation
    if (!mobile || !/^\d{10}$/.test(mobile)) {
      dispatch(
        showToast({
          message: "Please enter a valid 10-digit mobile number.",
          type: "error",
        })
      );
      return;
    }

    // Name validation
    if (!name.trim()) {
      dispatch(
        showToast({
          message: "Please enter your name.",
          type: "error",
        })
      );
      return;
    }

    // Email validation
    if (!email.trim()) {
      dispatch(
        showToast({
          message: "Please enter your email.",
          type: "error",
        })
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      dispatch(
        showToast({
          message: "Please enter a valid email address.",
          type: "error",
        })
      );
      return;
    }

    // Password validation
    if (!password.trim()) {
      dispatch(
        showToast({
          message: "Please enter your password.",
          type: "error",
        })
      );
      return;
    }

    if (password !== confirmPassword) {
      dispatch(
        showToast({
          message: "Passwords do not match.",
          type: "error",
        })
      );
      return;
    }

    // Gender validation
    if (!gender) {
      dispatch(
        showToast({
          message: "Please select your gender.",
          type: "error",
        })
      );
      return;
    }

    // Role validation
    if (!role) {
      dispatch(
        showToast({
          message: "Please select a role.",
          type: "error",
        })
      );
      return;
    }

    // Terms validation
    if (!termsAccepted) {
      dispatch(
        showToast({
          message: "Please accept Terms and Conditions.",
          type: "error",
        })
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          name: name.trim(),
          email: email.trim(),
          password,
          mobile,
          gender,
          inviteCode: inviteCode.trim(),
          role,
        }
      );

      if (response.data.success) {
        dispatch(
          showToast({
            message: "Registration successful! ",
            type: "success",
          })
        );

        navigate("/login");
      }
    } catch (error) {
      dispatch(
        showToast({
          message:
            error.response?.data?.message ||
            "Registration failed. Please try again.",
          type: "error",
        })
      );
    }
  };

  return (
    <div className="overlay">
      <div className="register-box">
        {/* TOP ROW */}
        <div className="top-row">
          <button
            type="button"
            className="back-btn"
            onClick={handleBack}
          >
            ← Back
          </button>

          <button
            type="button"
            className="register-close-btn"
            onClick={() => navigate("/")}
            aria-label="Close registration"
          >
            ×
          </button>
        </div>

        {/* HEADING */}
        <h1>Welcome to AJIO</h1>
        <p>Please set up your account</p>

        {/* MOBILE NUMBER */}
        <div className="mobile-row">
          <span>+91</span>

          <input
            type="tel"
            placeholder="Enter 10-digit mobile number"
            value={mobile}
            onChange={(e) =>
              setMobile(
                e.target.value.replace(/\D/g, "").slice(0, 10)
              )
            }
            maxLength={10}
            inputMode="numeric"
            autoComplete="tel-national"
            aria-label="Mobile number"
          />
        </div>

        {/* GENDER AND ROLE */}
        <div className="gender-role-row">
          <div className="gender">
            <span className="gender-label">Gender:</span>

            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>

            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
          </div>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            aria-label="Select role"
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="user">User</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* NAME AND EMAIL ROW */}
        <div className="register-fields-row">
          <div className="register-field">
            <label
              className="register-label"
              htmlFor="register-name"
            >
              Name
            </label>

            <input
              id="register-name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>

          <div className="register-field">
            <label
              className="register-label"
              htmlFor="register-email"
            >
              Email
            </label>

            <input
              id="register-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
        </div>

        {/* PASSWORD AND CONFIRM PASSWORD ROW */}
        <div className="register-fields-row">
          <div className="register-field">
            <label
              className="register-label"
              htmlFor="register-password"
            >
              Password
            </label>

            <input
              id="register-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <div className="register-field">
            <label
              className="register-label"
              htmlFor="register-confirm-password"
            >
              Confirm Password
            </label>

            <input
              id="register-confirm-password"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              autoComplete="new-password"
            />
          </div>
        </div>

        {/* INVITE CODE */}
        <label
          className="register-label"
          htmlFor="register-invite"
        >
          Invite Code (Optional)
        </label>

        <input
          id="register-invite"
          type="text"
          placeholder="Enter invite code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />

        {/* TERMS */}
        <div className="checkbox">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />

          <span>
            By Signing Up, I agree to{" "}
            <a href="#">Terms and Conditions</a>
          </span>
        </div>

        {/* REGISTER BUTTON */}
        <button
          type="button"
          className="otp-btn"
          onClick={handleSendOTP}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;
