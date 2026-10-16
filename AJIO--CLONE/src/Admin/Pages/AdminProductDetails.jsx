import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import api from "../../config/axiosConfig";

import "../CSS/Admin-product-details.css";

const AdminProductDetails = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { productId } = useParams();

  const location = useLocation();


  const [product, setProduct] = useState(null);

  useEffect(() => {
  const getProduct = async () => {
    try {
      const response = await api.get("/admin/get-all-products");

      if (response.data.success) {
        const foundProduct = response.data.products.find(
          (item) => String(item._id) === String(productId)
        );

        if (foundProduct) {
          setProduct({
            id: foundProduct._id,
            name: foundProduct.name,
            seller: foundProduct.sellerId?.name || "Seller",
            category: foundProduct.category,
            price: foundProduct.price,
            stock: foundProduct.stock,
            status: foundProduct.approvedByAdmin
              ? "Approved"
              : "Pending",
            description: foundProduct.description || "",
            image: foundProduct.image || "",
            brand: foundProduct.brand || "",
            mfgPrice: foundProduct.mfgPrice || 0,
          });

          setEditForm({
            name: foundProduct.name || "",
            seller: foundProduct.sellerId?.name || "Seller",
            category: foundProduct.category || "",
            price: foundProduct.price || "",
            mfgPrice: foundProduct.mfgPrice || "",
            stock: foundProduct.stock || "",
            status: foundProduct.approvedByAdmin
              ? "Approved"
              : "Pending",
            productStatus: "",
            description: foundProduct.description || "",
          });
        }
      }
    } catch (error) {
      console.error("Product fetch error:", error);
    }
  };

  getProduct();
}, [productId]);


  // =========================================
  // CHECK EDIT MODE
  // =========================================

  const isEditMode = location.pathname.endsWith("/edit");

  // =========================================
  // DEFAULT PRODUCTS
  // =========================================

const defaultProducts = [];

  // =========================================
  // GET SELLER CREATED PRODUCTS
  // =========================================

  const sellerCreatedProducts =
    JSON.parse(localStorage.getItem("sellerCreatedProducts")) || [];

  // =========================================
  // FORMAT SELLER PRODUCTS
  // =========================================

  const formattedSellerProducts = sellerCreatedProducts.map((product) => ({
    id: product.id,

    name: product.name,

    seller: product.brand || "Seller",

    category: product.category || "Not Available",

    price: product.price || product.sellingPrice || 0,

    mfgPrice: product.mfgPrice || 0,

    stock: product.stock || 0,

    status: product.status || "Pending",

    productStatus: product.productStatus || "",

    description: product.description || "",

    brand: product.brand || "",

    image: product.image || product.img || "",
  }));

  // =========================================
  // GET ADMIN EDITED DEFAULT PRODUCTS
  // =========================================

  const adminEditedProducts =
    JSON.parse(localStorage.getItem("adminEditedProducts")) || [];

  // =========================================
  // APPLY SAVED EDITS TO DEFAULT PRODUCTS
  // =========================================

  const updatedDefaultProducts = defaultProducts.map((product) => {
    const editedProduct = adminEditedProducts.find(
      (item) => String(item.id) === String(product.id),
    );

    return editedProduct
      ? {
          ...product,
          ...editedProduct,
        }
      : product;
  });

  // =========================================
  // COMBINE PRODUCTS
  // =========================================

  const allProducts = [...updatedDefaultProducts, ...formattedSellerProducts];

  // =========================================
  // FIND SELECTED PRODUCT
  // =========================================

 

  // =========================================
  // EDIT PRODUCT FORM STATE
  // =========================================

  const [editForm, setEditForm] = useState({
    name: product?.name || "",

    seller: product?.seller || "",

    category: product?.category || "",

    price: product?.price || "",

    mfgPrice: product?.mfgPrice || "",

    stock: product?.stock || "",

    status: product?.status || "Pending",

    productStatus: product?.productStatus || "",

    description: product?.description || "",
  });

  // =========================================
  // HANDLE EDIT FORM CHANGE
  // =========================================

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditForm((previousForm) => ({
      ...previousForm,

      [name]: value,
    }));
  };

  // =========================================
  // UPDATE PRODUCT
  // =========================================

  const handleUpdateProduct = () => {
    const sellerProducts =
      JSON.parse(localStorage.getItem("sellerCreatedProducts")) || [];

    // CHECK WHETHER THIS PRODUCT WAS
    // CREATED FROM SELLER CREATE PRODUCT PAGE

    const isSellerCreatedProduct = sellerProducts.some(
      (item) => String(item.id) === String(product.id),
    );

    // =====================================
    // UPDATE SELLER CREATED PRODUCT
    // =====================================

    if (isSellerCreatedProduct) {
      const updatedSellerProducts = sellerProducts.map((item) => {
        if (String(item.id) === String(product.id)) {
          return {
            ...item,

            name: editForm.name,

            brand: editForm.seller,

            category: editForm.category,

            price: Number(editForm.price),

            sellingPrice: Number(editForm.price),

            mfgPrice: Number(editForm.mfgPrice),

            stock: Number(editForm.stock),

            status: editForm.status,

            productStatus: editForm.productStatus,

            description: editForm.description,
          };
        }

        return item;
      });

      localStorage.setItem(
        "sellerCreatedProducts",
        JSON.stringify(updatedSellerProducts),
      );
    } else {
      // =====================================
      // SAVE DEFAULT ADMIN PRODUCT EDIT
      // =====================================

      const savedAdminProducts =
        JSON.parse(localStorage.getItem("adminEditedProducts")) || [];

      const updatedProduct = {
        ...product,

        name: editForm.name,

        seller: editForm.seller,

        category: editForm.category,

        price: Number(editForm.price),

        mfgPrice: Number(editForm.mfgPrice),

        stock: Number(editForm.stock),

        status: editForm.status,

        productStatus: editForm.productStatus,

        description: editForm.description,
      };

      const alreadyExists = savedAdminProducts.some(
        (item) => String(item.id) === String(product.id),
      );

      let updatedAdminProducts;

      if (alreadyExists) {
        updatedAdminProducts = savedAdminProducts.map((item) =>
          String(item.id) === String(product.id) ? updatedProduct : item,
        );
      } else {
        updatedAdminProducts = [...savedAdminProducts, updatedProduct];
      }

      localStorage.setItem(
        "adminEditedProducts",
        JSON.stringify(updatedAdminProducts),
      );
    }

    // =====================================
    // GO BACK TO PRODUCT DETAILS
    // =====================================

    dispatch(
      showToast({
        message: "✅ Product updated successfully!",
        type: "success",
      }),
    );

    navigate(`/admin/products/${product.id}`);
  };

  // =========================================
  // PRODUCT NOT FOUND
  // =========================================

  if (!product) {
    return (
      <div className="admin-product-details-page">
        <div className="admin-product-not-found">
          <span className="material-symbols-outlined">inventory_2</span>

          <h2>Product Not Found</h2>

          <p>The selected product could not be found.</p>

          <button type="button" onClick={() => navigate("/admin/products")}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-product-details-page">
      {/* =========================================
                TOP SECTION
            ========================================= */}

      <div className="admin-product-details-header">
        <div>
          <h1>{isEditMode ? "Edit Product" : "Product Details"}</h1>

          <p>
            {isEditMode
              ? "Update product information."
              : "View complete product information."}
          </p>
        </div>

        {/* BACK BUTTON */}

        <button
          type="button"
          className="admin-product-back-btn"
          onClick={() => navigate("/admin/products")}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Products
        </button>
      </div>

      {/* =========================================
                PRODUCT DETAILS CARD
            ========================================= */}

      <div className="admin-product-details-card">
        {/* PRODUCT IMAGE */}

        <div className="admin-product-details-image-section">
          <div className="admin-product-details-image-box">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="admin-product-details-image"
                onError={(e) => {
                  e.currentTarget.style.display = "none";

                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
            ) : null}

            <div
              className="admin-product-details-image-placeholder"
              style={{
                display: product.image ? "none" : "flex",
              }}
            >
              <span className="material-symbols-outlined">image</span>
            </div>
          </div>
        </div>

        {/* =========================================
                    PRODUCT INFORMATION / EDIT FORM
                ========================================= */}

        <div className="admin-product-details-info">
          {isEditMode ? (
            /* =========================================
                           EDIT MODE
                        ========================================= */

            <div className="admin-product-edit-form">
              <div className="admin-product-edit-heading">
                <span className="admin-product-details-id">
                  Product ID: {product.id}
                </span>

                <h2>Edit Product Information</h2>
              </div>

              {/* EDIT FORM GRID */}

              <div className="admin-product-edit-grid">
                {/* PRODUCT NAME */}

                <div className="admin-product-edit-field">
                  <label>Product Name</label>

                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                  />
                </div>

                {/* SELLER */}

                <div className="admin-product-edit-field">
                  <label>Seller</label>

                  <input
                    type="text"
                    name="seller"
                    value={editForm.seller}
                    onChange={handleEditChange}
                  />
                </div>

                {/* CATEGORY */}

                <div className="admin-product-edit-field">
                  <label>Category</label>

                  <input
                    type="text"
                    name="category"
                    value={editForm.category}
                    onChange={handleEditChange}
                  />
                </div>

                {/* PRICE */}

                <div className="admin-product-edit-field">
                  <label>Price</label>

                  <input
                    type="number"
                    name="price"
                    value={editForm.price}
                    onChange={handleEditChange}
                    min="0"
                  />
                </div>

                {/* MFG PRICE */}

                <div className="admin-product-edit-field">
                  <label>MFG Price</label>

                  <input
                    type="number"
                    name="mfgPrice"
                    value={editForm.mfgPrice}
                    onChange={handleEditChange}
                    min="0"
                  />
                </div>

                {/* STOCK */}

                <div className="admin-product-edit-field">
                  <label>Stock</label>

                  <input
                    type="number"
                    name="stock"
                    value={editForm.stock}
                    onChange={handleEditChange}
                    min="0"
                  />
                </div>

                {/* APPROVAL STATUS */}

                <div className="admin-product-edit-field">
                  <label>Approval Status</label>

                  <select
                    name="status"
                    value={editForm.status}
                    onChange={handleEditChange}
                  >
                    <option value="Pending">Pending</option>

                    <option value="Approved">Approved</option>

                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                {/* PRODUCT STATUS */}

                <div className="admin-product-edit-field">
                  <label>Product Status</label>

                  <select
                    name="productStatus"
                    value={editForm.productStatus}
                    onChange={handleEditChange}
                  >
                    <option value="">Select Status</option>

                    <option value="Active">Active</option>

                    <option value="Inactive">Inactive</option>

                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
              </div>

              {/* DESCRIPTION */}

              <div className="admin-product-edit-field admin-product-edit-description">
                <label>Description</label>

                <textarea
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  rows="4"
                />
              </div>

              {/* FORM BUTTONS */}

              <div className="admin-product-edit-actions">
                <button
                  type="button"
                  className="admin-product-edit-cancel-btn"
                  onClick={() => navigate(`/admin/products/${product.id}`)}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="admin-product-update-btn"
                  onClick={handleUpdateProduct}
                >
                  Update Product
                </button>
              </div>
            </div>
          ) : (
            /* =========================================
                           NORMAL VIEW MODE
                        ========================================= */

            <>
              <div className="admin-product-details-title-row">
                <div>
                  <span className="admin-product-details-id">
                    Product ID: {product.id}
                  </span>

                  <h2>{product.name}</h2>
                </div>

                <span
                  className={`admin-product-details-status ${String(
                    product.status,
                  ).toLowerCase()}`}
                >
                  {product.status}
                </span>
              </div>

              {/* INFORMATION GRID */}

              <div className="admin-product-info-grid">
                <div className="admin-product-info-item">
                  <span>Seller</span>

                  <strong>{product.seller}</strong>
                </div>

                <div className="admin-product-info-item">
                  <span>Category</span>

                  <strong>{product.category}</strong>
                </div>

                <div className="admin-product-info-item">
                  <span>Price</span>

                  <strong>
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </strong>
                </div>

                <div className="admin-product-info-item">
                  <span>Stock</span>

                  <strong>{product.stock}</strong>
                </div>

                {product.brand && (
                  <div className="admin-product-info-item">
                    <span>Brand</span>

                    <strong>{product.brand}</strong>
                  </div>
                )}

                {Number(product.mfgPrice) > 0 && (
                  <div className="admin-product-info-item">
                    <span>MFG Price</span>

                    <strong>
                      ₹{Number(product.mfgPrice).toLocaleString("en-IN")}
                    </strong>
                  </div>
                )}

                {product.productStatus && (
                  <div className="admin-product-info-item">
                    <span>Product Status</span>

                    <strong>{product.productStatus}</strong>
                  </div>
                )}
              </div>

              {/* DESCRIPTION */}

              {product.description && (
                <div className="admin-product-description">
                  <span>Description</span>

                  <p>{product.description}</p>
                </div>
              )}

              {/* EDIT PRODUCT BUTTON */}

              <div className="admin-product-details-bottom-action">
                <button
                  type="button"
                  className="admin-product-edit-btn"
                  onClick={() => navigate(`/admin/products/${product.id}/edit`)}
                >
                  Edit Product
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetails;
