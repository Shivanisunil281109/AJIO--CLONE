import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import api from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import "../CSS/SellerProductDetails.css";

const SellerProductDetails = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { productId } = useParams();
  const navigate = useNavigate();

  const isEditMode = location.pathname.includes("/edit");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await api.get("/seller/get-products");

        if (response.data.success) {
          const foundProduct = response.data.products.find(
            (item) => item._id === productId,
          );

          setProduct(foundProduct || null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };

    getProduct();
  }, [productId]);

  const [editedProduct, setEditedProduct] = useState({
    name: product?.name || "",
    category: product?.category || "",
    brand: product?.brand || "",
    sellingPrice: product?.sellingPrice || "",
    mfgPrice: product?.mfgPrice || "",
    stock: product?.stock || "",
    description: product?.description || "",
  });

  useEffect(() => {
    if (product) {
      setEditedProduct({
        name: product.name || "",
        category: product.category || "",
        brand: product.brand || "",
        sellingPrice: product.price || "",
        mfgPrice: "",
        stock: product.stock ?? "",
        description: product.description || "",
      });
    }
  }, [product]);

  const handleUpdateProduct = () => {
    // =========================
    // VALIDATION
    // =========================

    if (
      !editedProduct.name.trim() ||
      !editedProduct.brand.trim() ||
      !editedProduct.description.trim()
    ) {
      dispatch(
        showToast({
          message: "❌ Please fill all product fields.",
          type: "error",
        }),
      );
      return;
    }

    if (
      Number(editedProduct.sellingPrice) <= 0 ||
      Number(editedProduct.mfgPrice) <= 0
    ) {
      dispatch(
        showToast({
          message: "❌ Product price must be greater than 0.",
          type: "error",
        }),
      );
      return;
    }

    if (Number(editedProduct.stock) < 0) {
      dispatch(
        showToast({
          message: "❌ Stock cannot be negative.",
          type: "error",
        }),
      );
      return;
    }

    const updatedProduct = {
      ...product,
      ...editedProduct,
      sellingPrice: Number(editedProduct.sellingPrice),
      mfgPrice: Number(editedProduct.mfgPrice),
      stock: Number(editedProduct.stock),
    };

    localStorage.setItem(
      `sellerProduct_${product.id}`,
      JSON.stringify(updatedProduct),
    );

    dispatch(
      showToast({
        message: "✅ Product updated successfully!",
        type: "success",
      }),
    );

    navigate(`/seller/products/${product._id}`);
  };

  if (!product) {
    return (
      <div className="seller-product-details-page">
        <main className="seller-product-details-content">
          <h1>Product Not Found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="seller-product-details-page">
      <main className="seller-product-details-content">
        {/* PAGE HEADER */}
        <div className="seller-product-details-header">
          <button
            type="button"
            className="seller-back-products-button"
            onClick={() => navigate("/seller/products")}
          >
            ← Back to Products
          </button>

          <h1>{isEditMode ? "Edit Product" : "Product Details"}</h1>
        </div>

        {/* PRODUCT CARD */}
        <div className="seller-product-details-card">
          {/* PRODUCT IMAGE */}
          <div className="seller-product-image-section">
            <img
              src={product.image}
              alt={product.name}
              className="seller-product-main-image"
            />
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="seller-product-info-section">
            {!isEditMode ? (
              <>
                {/* =========================
                    VIEW MODE
                ========================= */}

                <h2>{product.name}</h2>

                <div className="seller-product-info-row">
                  <span className="info-label">Category</span>
                  <span>{product.category}</span>
                </div>

                <div className="seller-product-info-row">
                  <span className="info-label">Brand</span>
                  <span>Not Available</span>
                </div>

                <div className="seller-product-info-row">
                  <span className="info-label">Selling Price</span>
                  <span>₹{product.price}</span>
                </div>

                <div className="seller-product-info-row">
                  <span className="info-label">MFG Price</span>
                  <span>Not Available</span>
                </div>

                <div className="seller-product-info-row">
                  <span className="info-label">Stock</span>
                  <span>{product.stock}</span>
                </div>

                <div className="seller-product-info-row">
                  <span className="info-label">Approval Status</span>

                  {/* <span className="seller-product-approved-status">
                    {product.status || (product.approvedByAdmin ? "Approved" : "Pending")}
                  </span> */}

                  <span
                    className={`seller-product-approved-status seller-product-status-${(
                      product.status ||
                      (product.approvedByAdmin ? "Approved" : "Pending")
                    ).toLowerCase()}`}
                  >
                    {product.status ||
                      (product.approvedByAdmin ? "Approved" : "Pending")}
                  </span>
                </div>

                <div className="seller-product-description">
                  <h3>Description</h3>
                  <p>{product.description}</p>
                </div>

                <button
                  type="button"
                  className="seller-edit-product-button"
                  onClick={() =>
                    navigate(`/seller/products/${product._id}/edit`)
                  }
                >
                  Edit Product
                </button>
              </>
            ) : (
              <>
                {/* =========================
                    EDIT MODE
                ========================= */}

                <div className="seller-edit-form">
                  {/* PRODUCT NAME */}
                  <div className="seller-edit-form-group">
                    <label>Product Name</label>

                    <input
                      type="text"
                      value={editedProduct.name}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* CATEGORY */}
                  <div className="seller-edit-form-group">
                    <label>Category</label>

                    <select
                      value={editedProduct.category}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          category: e.target.value,
                        })
                      }
                    >
                      <option value="Clothing">Clothing</option>
                      <option value="Footwear">Footwear</option>
                      <option value="Electronics">Electronics</option>
                    </select>
                  </div>

                  {/* BRAND */}
                  <div className="seller-edit-form-group">
                    <label>Brand</label>

                    <input
                      type="text"
                      value={editedProduct.brand}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          brand: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* PRICES */}
                  <div className="seller-edit-form-row">
                    <div className="seller-edit-form-group">
                      <label>Selling Price</label>

                      <input
                        type="number"
                        value={editedProduct.sellingPrice}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editedProduct,
                            sellingPrice: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="seller-edit-form-group">
                      <label>MFG Price</label>

                      <input
                        type="number"
                        value={editedProduct.mfgPrice}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editedProduct,
                            mfgPrice: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* STOCK */}
                  <div className="seller-edit-form-group">
                    <label>Stock</label>

                    <input
                      type="number"
                      value={editedProduct.stock}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          stock: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div className="seller-edit-form-group">
                    <label>Description</label>

                    <textarea
                      rows="5"
                      value={editedProduct.description}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  {/* UPDATE BUTTON */}
                  <button
                    type="button"
                    className="seller-update-product-button"
                    onClick={handleUpdateProduct}
                  >
                    Update Product
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerProductDetails;
