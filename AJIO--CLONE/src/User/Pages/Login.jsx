import React, { useState } from "react";
import api from "../../config/axiosConfig";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import "../CSS/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  console.log("Redux Auth State:", authState);

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      dispatch(
        showToast({
          message: "Please enter your email and password.",
          type: "error",
        }),
      );
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email: email.trim(),
        password,
      });

      if (response.data.success) {
        const user = response.data.user;

        dispatch(login(user));

        console.log("Redux Login User:", user);

        localStorage.setItem("user", JSON.stringify(user));

        dispatch(
          showToast({
            message: "Login successful!",
            type: "success",
          }),
        );

        if (user.role === "admin") {
          navigate("/admin/dashboard");
        } else if (user.role === "seller") {
          navigate("/seller/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      dispatch(
        showToast({
          message:
            error.response?.data?.message || "Login failed. Please try again.",
          type: "error",
        }),
      );
    }
  };

  return (
    <div className="login-page-overlay">
      <div className="login-page-box">
        <button
          type="button"
          className="close-btn"
          onClick={() => navigate("/")}
          aria-label="Close login"
        >
          ×
        </button>

        <div className="login-page-heading">
          <h1>Welcome to AJIO</h1>
          <p className="login-subtitle">Login to your AJIO account</p>
        </div>

        <div className="login-page-form">
          <label htmlFor="login-email">Email ID</label>

          <input
            id="login-email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <label htmlFor="login-password">Password</label>

          <div className="login-page-password">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="login-page-forgot">
            <button
              type="button"
              className="text-link"
              onClick={() =>
                dispatch(
                  showToast({
                    message: "Forgot password feature is not set up yet.",
                    type: "error",
                  }),
                )
              }
            >
              Forgot Password?
            </button>
          </div>

          <button type="button" className="continue-btn" onClick={handleLogin}>
            CONTINUE
          </button>

          <div className="login-page-register">
            Don't have an account? <Link to="/register">Register</Link>
          </div>

          <p className="terms">
            By Signing In, I agree to <a href="#">Terms &amp; Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
