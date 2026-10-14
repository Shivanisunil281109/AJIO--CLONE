import React from "react";
import { NavLink, useNavigate } from "react-router";
import "../CSS/Admin-header.css";
import { useDispatch } from "react-redux";
import api from "../../config/axiosConfig";
import { logout } from "../../redux/authSlice";
import { showToast } from "../../redux/toastSlice";

const AdminHeader = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const response = await api.get("/auth/logout");

      if (response.data.success) {
        dispatch(logout());
        localStorage.removeItem("user");

        dispatch(
          showToast({
            message: response.data.message || "Logout successful!",
            type: "success",
          }),
        );

        navigate("/login");
      }
    } catch (error) {
      dispatch(
        showToast({
          message:
            error.response?.data?.message || "Logout failed. Please try again.",
          type: "error",
        }),
      );
    }
  };

  return (
    <header className="admin-header">
      {/* AJIO LOGO */}
      <div className="admin-logo" onClick={() => navigate("/admin/dashboard")}>
        <img
          src="https://assets-jiocdn.ajio.com/static/img/Ajio-Logo.svg"
          alt="AJIO"
        />
      </div>

      {/* NAVIGATION */}
      <nav className="admin-navbar">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <span className="material-symbols-outlined admin-dashboard-icon">
            home
          </span>

          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/product-review"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <span className="material-symbols-outlined admin-review-icon">
            verified
          </span>

          <span>Product Review</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <span className="material-symbols-outlined admin-products-icon">
            inventory_2
          </span>

          <span>Products</span>
        </NavLink>

        <NavLink
          to="/admin/sellers"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <span className="material-symbols-outlined admin-sellers-icon">
            storefront
          </span>

          <span>Sellers</span>
        </NavLink>
      </nav>

      {/* RIGHT SIDE */}
      <div className="admin-header-right">
        {/* Notification */}


      {/* Logout */}
<button
    type="button"
    className="admin-logout-btn"
    onClick={logoutHandler}
>
    Logout
</button>




        {/* Admin Profile */}
        <div
          className="admin-profile-area"
          onClick={() => navigate("/admin/profile")}
        >
          <span className="material-symbols-outlined admin-profile-icon">
            account_circle
          </span>

          <div className="admin-profile-info">
            <strong>Admin</strong>
            <span>Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
