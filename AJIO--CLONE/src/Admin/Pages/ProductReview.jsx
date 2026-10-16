import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import api from "../../config/axiosConfig";
import "../CSS/Product-review.css";

const ProductReview = () => {
  const dispatch = useDispatch();

  // =========================================
  // DEFAULT PRODUCT DATA
  // =========================================

  const defaultProducts = [];

  // =========================================
  // GET SELLER CREATED PRODUCTS
  // =========================================

  const sellerCreatedProducts =
    JSON.parse(localStorage.getItem("sellerCreatedProducts")) || [];

  // =========================================
  // FORMAT SELLER PRODUCTS FOR ADMIN REVIEW
  // =========================================

  const formattedSellerProducts = sellerCreatedProducts.map((product) => ({
    id: product.id,

    name: product.name,

    seller: product.brand || "Seller",

    email: "seller@ajio.com",

    category: product.category,

    price: product.price || product.sellingPrice || 0,

    status: product.status || "Pending",

    // Use seller's actual saved product image
    image: product.image || "",
  }));

  // =========================================
  // COMBINE DEFAULT + SELLER PRODUCTS
  // =========================================

const [products, setProducts] = useState([]);


useEffect(() => {
  const getProducts = async () => {
    try {
      const response = await api.get("/admin/get-all-products");

      if (response.data.success) {
        const formattedProducts = response.data.products.map((product) => ({
          id: product._id,
          name: product.name,
          seller: product.sellerId?.name || "Seller",
          email: product.sellerId?.email || "Not Available",
          category: product.category,
          price: product.price,
      status: product.status || (product.approvedByAdmin ? "Approved" : "Pending"),
          image: product.image || "",
        }));

        setProducts(formattedProducts);
      }
    } catch (error) {
      console.error("Products fetch error:", error);
    }
  };

  getProducts();
}, []);
  // =========================================
  // ACTIVE STATUS TAB
  // =========================================

  const [activeTab, setActiveTab] = useState("All");

  // =========================================
  // CATEGORY FILTER STATE
  // =========================================

  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // =========================================
  // SORT STATE
  // =========================================

  const [sortBy, setSortBy] = useState("Sort By");

  // =========================================
  // FILTER PRODUCTS BY STATUS + CATEGORY
  // =========================================

  const filteredProducts = products.filter((product) => {
    const statusMatch = activeTab === "All" || product.status === activeTab;

    const categoryMatch =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    return statusMatch && categoryMatch;
  });

  // =========================================
  // SORT FILTERED PRODUCTS
  // =========================================

  const sortedProducts = [...filteredProducts];

  if (sortBy === "Price: Low to High") {
    sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortBy === "Price: High to Low") {
    sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
  } else if (sortBy === "Product Name") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  // =========================================
  // APPROVE PRODUCT
  // =========================================

 const handleApproveProduct = async (productId) => {
  try {
    const response = await api.post("/admin/approve-product", {
      productId,
    });

    if (response.data.success) {
      setProducts((previousProducts) =>
        previousProducts.map((product) =>
          product.id === productId
            ? { ...product, status: "Approved" }
            : product
        )
      );

      dispatch(
        showToast({
          message: "✅ Product approved successfully!",
          type: "success",
        })
      );
    }
  } catch (error) {
    console.error("Product approval error:", error);

    dispatch(
      showToast({
        message:
          error.response?.data?.message ||
           "❌ Failed to approve product.",
        type: "error",
      })
    );
  }
};





  // =========================================
  // REJECT PRODUCT
  // =========================================
const handleRejectProduct = async (productId) => {
  try {
    const response = await api.post("/admin/reject-product", {
      productId,
    });

console.log("Reject API response:", response.data);


    if (response.data.success) {
      setProducts((previousProducts) =>
        previousProducts.map((product) =>
          product.id === productId
            ? { ...product, status: "Rejected" }
            : product
        )
      );

      dispatch(
        showToast({
          message: "Product rejected successfully!",
          type: "error",
        })
      );
    }
  } catch (error) {
    console.error("Product rejection error:", error);

    dispatch(
      showToast({
        message:
          error.response?.data?.message ||
          "Failed to reject product.",
        type: "error",
      })
    );
  }
};



















  return (
    <div className="admin-product-review-page">
      {/* =========================================
                PAGE HEADING
            ========================================= */}

      <div className="admin-review-heading">
        <h1>Product Review</h1>

        <p>Review and approve products submitted by sellers.</p>
      </div>

      {/* =========================================
                STATUS TABS
            ========================================= */}

      <div className="admin-review-tabs">
        {/* ALL */}

        <button
          className={`admin-review-tab ${activeTab === "All" ? "active" : ""}`}
          type="button"
          onClick={() => setActiveTab("All")}
        >
          All
          <span>{products.length}</span>
        </button>

        {/* PENDING */}

        <button
          className={`admin-review-tab ${
            activeTab === "Pending" ? "active" : ""
          }`}
          type="button"
          onClick={() => setActiveTab("Pending")}
        >
          Pending
          <span>
            {products.filter((product) => product.status === "Pending").length}
          </span>
        </button>

        {/* APPROVED */}

        <button
          className={`admin-review-tab ${
            activeTab === "Approved" ? "active" : ""
          }`}
          type="button"
          onClick={() => setActiveTab("Approved")}
        >
          Approved
          <span>
            {products.filter((product) => product.status === "Approved").length}
          </span>
        </button>

        {/* REJECTED */}

        <button
          className={`admin-review-tab ${
            activeTab === "Rejected" ? "active" : ""
          }`}
          type="button"
          onClick={() => setActiveTab("Rejected")}
        >
          Rejected
          <span>
            {products.filter((product) => product.status === "Rejected").length}
          </span>
        </button>
      </div>

      {/* =========================================
                FILTER SECTION
            ========================================= */}

      <div className="admin-review-filters">
        {/* CATEGORY FILTER */}

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All Categories">All Categories</option>

          <option value="Men Clothing">Men Clothing</option>

          <option value="Men Footwear">Men Footwear</option>

          <option value="Beauty">Beauty</option>

          <option value="Electronics">Electronics</option>

          <option value="Bags & Backpacks">Bags & Backpacks</option>

          <option value="Clothing">Clothing</option>

          <option value="Footwear">Footwear</option>
        </select>

        {/* =========================================
                    SORT
                ========================================= */}

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Sort By">Sort By</option>

          <option value="Price: Low to High">Price: Low to High</option>

          <option value="Price: High to Low">Price: High to Low</option>

          <option value="Product Name">Product Name</option>
        </select>
      </div>

      {/* =========================================
                PRODUCT TABLE
            ========================================= */}

      <div className="admin-review-table-card">
        <div className="admin-review-table-wrapper">
          <table className="admin-review-table">
            {/* TABLE HEADER */}

            <thead>
              <tr>
                <th>Product</th>

                <th>Product ID</th>

                <th>Seller</th>

                <th>Category</th>

                <th>Price</th>

                <th>Status</th>

                <th>Action</th>
              </tr>
            </thead>

            {/* TABLE BODY */}

            <tbody>
              {sortedProducts.map((product) => (
                <tr key={product.id}>
                  {/* PRODUCT WITH IMAGE */}

                  <td>
                    <div className="admin-review-product">
                      <div className="admin-review-product-image-box">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="admin-review-product-image"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.currentTarget.nextElementSibling.style.display =
                                "flex";
                            }}
                          />
                        ) : null}

                        <div
                          className="admin-review-image-placeholder"
                          style={{
                            display: product.image ? "none" : "flex",
                          }}
                        >
                          <span className="material-symbols-outlined">
                            image
                          </span>
                        </div>
                      </div>

                      <strong>{product.name}</strong>
                    </div>
                  </td>

                  {/* PRODUCT ID */}

                  <td>{product.id}</td>

                  {/* SELLER */}

                  <td>
                    <div className="admin-review-seller">
                      <strong>{product.seller}</strong>

                      <span>{product.email}</span>
                    </div>
                  </td>

                  {/* CATEGORY */}

                  <td>{product.category}</td>

                  {/* PRICE */}

                  <td>₹{Number(product.price).toLocaleString("en-IN")}</td>

                  {/* STATUS */}

                  <td>
                    <span
                      className={`admin-review-status ${product.status.toLowerCase()}`}
                    >
                      {product.status}
                    </span>
                  </td>

                  {/* ACTION */}

                  <td>
                    {product.status === "Pending" ? (
                      <div className="admin-review-actions">
                        {/* APPROVE */}

                        <button
                          className="admin-approve-btn"
                          type="button"
                          onClick={() => handleApproveProduct(product.id)}
                        >
                          Approve
                        </button>

                        {/* REJECT */}

                        <button
                          className="admin-reject-btn"
                          type="button"
                          onClick={() => handleRejectProduct(product.id)}
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="admin-review-completed">Reviewed</span>
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

export default ProductReview;
