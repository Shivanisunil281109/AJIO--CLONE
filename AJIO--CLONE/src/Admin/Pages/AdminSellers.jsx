import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import "../CSS/Admin-sellers.css";

const AdminSellers = () => {
  const dispatch = useDispatch();
  // =========================================
  // NAVIGATION
  // =========================================

  const navigate = useNavigate();

  // =========================================
  // SEARCH STATE
  // =========================================

  const [searchTerm, setSearchTerm] = useState("");

  // =========================================
  // STATUS FILTER STATE
  // =========================================

  const [statusFilter, setStatusFilter] = useState("All Status");

  const [sellers, setSellers] = useState([]);

  const getAllSellers = async () => {
    try {
      const response = await api.get("/admin/get-all-sellers");

      if (response.data.success) {
        setSellers(response.data.sellers);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const approveSeller = async (sellerId) => {
    try {
      const response = await api.post("/admin/approve-seller", {
        sellerId,
      });

      if (response.data.success) {
        dispatch(
          showToast({
            message: "✅ Seller approved successfully!",
            type: "success",
          }),
        );

        await getAllSellers();
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getAllSellers();
  }, []);

  // =========================================
  // DEFAULT SELLER DATA
  // =========================================

  // =========================================
  // GET ADMIN EDITED SELLERS
  // =========================================

  // =========================================
  // MERGE DEFAULT + EDITED SELLERS
  // =========================================

  // =========================================
  // SEARCH + STATUS FILTER FUNCTIONALITY
  // =========================================

  const filteredSellers = sellers.filter((seller) => {
    const searchValue = searchTerm.trim().toLowerCase();

    // =========================================
    // SEARCH CONDITION
    // =========================================

    const matchesSearch =
      seller.name.toLowerCase().includes(searchValue) ||
      seller._id.toLowerCase().includes(searchValue) ||
      seller.email.toLowerCase().includes(searchValue) ||
      (seller.mobile || "").includes(searchValue);

    // =========================================
    // STATUS CONDITION
    // =========================================

    const matchesStatus =
      statusFilter === "All Status" ||
      (seller.isApprovedByAdmin ? "Approved" : "Not Approved") === statusFilter;

    // =========================================
    // BOTH CONDITIONS
    // =========================================

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="admin-sellers-page">
      {/* =========================================
                PAGE HEADER
            ========================================= */}

      <div className="admin-sellers-heading">
        <div>
          <h1>All Sellers</h1>

          <p>View and manage all registered sellers.</p>
        </div>

        <div className="admin-sellers-count">
          Total Sellers
          <strong>{sellers.length}</strong>
        </div>
      </div>

      {/* =========================================
                SEARCH + FILTER SECTION
            ========================================= */}

      <div className="admin-sellers-toolbar">
        {/* =========================================
                    SEARCH BOX
                ========================================= */}

        <div className="admin-sellers-search-box">
          <span className="material-symbols-outlined">search</span>

          <input
            type="text"
            placeholder="Search seller..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* =========================================
                    STATUS FILTER
                ========================================= */}

        <div className="admin-sellers-filter-box">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All Status">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Not Approved">Not Approved</option>
          </select>
        </div>
      </div>

      {/* =========================================
                SELLERS TABLE
            ========================================= */}

      <div className="admin-sellers-table-card">
        <div className="admin-sellers-table-wrapper">
          <table className="admin-sellers-table">
            <thead>
              <tr>
                <th>Seller</th>

                <th>Seller ID</th>

                <th>Email</th>

                <th>Mobile</th>

                <th>Orders</th>

                <th>Status</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredSellers.map((seller) => (
                <tr key={seller._id}>
                  {/* =========================================
                                        SELLER IMAGE + NAME
                                    ========================================= */}

                  <td>
                    <div className="admin-seller-info">
                      {/* SELLER IMAGE */}

                      {/* SELLER NAME */}

                      <div>
                        <strong>{seller.name}</strong>
                      </div>
                    </div>
                  </td>

                  {/* =========================================
                                        SELLER ID
                                    ========================================= */}

                  <td>{seller._id}</td>

                  {/* =========================================
                                        EMAIL
                                    ========================================= */}

                  <td>{seller.email}</td>

                  {/* =========================================
                                        MOBILE
                                    ========================================= */}

                  <td>+91 {seller.mobile}</td>

                  {/* =========================================
                                        PRODUCTS
                                    ========================================= */}

                  {/* =========================================
                                        ORDERS
                                    ========================================= */}

                  <td>{(seller.orders ?? 0).toLocaleString("en-IN")}</td>

                  {/* =========================================
                                        STATUS
                                    ========================================= */}

                  <td>
                    <span
                      className={`admin-seller-status ${
                        seller.isApprovedByAdmin ? "approved" : "not-approved"
                      }`}
                    >
                      {seller.isApprovedByAdmin ? "Approved" : "Not Approved"}
                    </span>
                  </td>

                  {/* =========================================
                                        ACTION
                                    ========================================= */}

                  <td>
                    <button
                      type="button"
                      className="admin-seller-view-btn"
                      onClick={() => navigate(`/admin/sellers/${seller._id}`)}
                    >
                      View
                    </button>

                    {!seller.isApprovedByAdmin && (
                      <button
                        type="button"
                        className="admin-seller-approve-btn"
                        onClick={() => approveSeller(seller._id)}
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSellers;
