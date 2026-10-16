import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import api from "../../config/axiosConfig";
import "../CSS/SellerProducts.css";

const SellerProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [createdProducts, setCreatedProducts] = useState([]);

  const getSellerProducts = async () => {
    try {
      const response = await api.get("/seller/get-products");

      if (response.data.success) {
        setCreatedProducts(response.data.products);

        console.log("Seller Products:", response.data.products);
      }
    } catch (error) {
      console.error("Error fetching seller products:", error);
    }
  };

  useEffect(() => {
    getSellerProducts();
  }, []);

  // =========================
  // ORIGINAL PRODUCTS
  // =========================

  // =========================
  // CREATED PRODUCTS
  // =========================

  // =========================
  // GET UPDATED PRODUCTS
  // FROM LOCAL STORAGE
  // =========================

  const updatedProducts = createdProducts.map((product) => ({
    ...product,
    id: String(product._id),
    price: product.price,
    status:
      product.status || (product.approvedByAdmin ? "Approved" : "Pending"),
  }));




  const handleDeleteProduct = (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) {
      return;
    }

    const updatedCreatedProducts = createdProducts.filter(
      (product) => product.id !== productId,
    );

    setCreatedProducts(updatedCreatedProducts);

    localStorage.setItem(
      "sellerCreatedProducts",
      JSON.stringify(updatedCreatedProducts),
    );

    dispatch(
      showToast({
        message: "✅ Product deleted successfully!",
        type: "success",
      }),
    );
  };

  // =========================
  // STATUS CLASS
  // =========================

  // const getStatusClass = (status) => {
  //   if (status === "Approved") {
  //     return "seller-products-status-approved";
  //   }

  //   if (status === "Pending") {
  //     return "seller-products-status-pending";
  //   }

  //   if (status === "Not Approved") {
  //     return "seller-products-status-not-approved";
  //   }

  //   return "";
  // };




const getStatusClass = (status) => {
  if (status === "Approved") {
    return "seller-products-status-approved";
  }

  if (status === "Pending") {
    return "seller-products-status-pending";
  }

  if (status === "Rejected") {
    return "seller-products-status-rejected";
  }

  if (status === "Not Approved") {
    return "seller-products-status-not-approved";
  }

  return "";
};











  return (
    <div className="seller-products-page">
      <main className="seller-products-content">
        {/* =========================
            PAGE HEADER
        ========================= */}

        <div className="seller-products-header">
          <h1>All Products</h1>
        </div>

        {/* =========================
            PRODUCTS CARD
        ========================= */}

        <div className="seller-products-card">
          <div className="seller-products-card-header">
            <h2>My Products</h2>
          </div>

          {/* =========================
              PRODUCTS TABLE
          ========================= */}

          <div className="seller-products-table-container">
            <table className="seller-products-table">
              <thead>
                <tr>
                  <th>Product</th>

                  <th>Category</th>

                  <th>Selling Price</th>

                  <th>Stock</th>

                  <th>Status</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {updatedProducts.map((product) => (
                  <tr key={product.id}>
                    {/* PRODUCT IMAGE + NAME */}

                    <td>
                      <div className="seller-products-table-product">
                        {product.image && !product.image.startsWith("YOUR_") ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="seller-products-table-image"
                          />
                        ) : (
                          <div className="seller-products-no-image">
                            <span className="material-symbols-outlined">
                              image
                            </span>
                          </div>
                        )}

                        <span className="seller-products-table-name">
                          {product.name}
                        </span>
                      </div>
                    </td>

                    {/* CATEGORY */}

                    <td>{product.category}</td>

                    {/* SELLING PRICE */}

                    <td>₹{product.price}</td>

                    {/* STOCK */}

                    <td>{product.stock}</td>

                    {/* STATUS */}

                    <td>
                      <span
                        className={`seller-products-status ${getStatusClass(
                          product.status,
                        )}`}
                      >
                        {product.status}
                      </span>
                    </td>

                    {/* ACTION */}

                    <td>
                      <div className="seller-products-actions">
                        <button
                          type="button"
                          className="seller-products-view-btn"
                          onClick={() =>
                            navigate(`/seller/products/${product.id}`)
                          }
                        >
                          View
                        </button>

                        <button
                          type="button"
                          className="seller-products-edit-btn"
                          onClick={() => {
                            console.log("Product ID:", product.id);
                            navigate(`/seller/products/${product.id}/edit`);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="seller-products-edit-btn"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerProducts;
