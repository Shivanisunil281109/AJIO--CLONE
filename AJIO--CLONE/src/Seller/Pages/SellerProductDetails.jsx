import React from "react";
import "../CSS/SellerProductDetails.css";

const SellerProductDetails = () => {
  const product = {
    name: "Men Casual Shirt",
    category: "Clothing",
    brand: "AJIO",
    sellingPrice: 999,
    mfgPrice: 1299,
    stock: 20,
    status: "Approved",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230621/t6yD/6492e6b9d55b7d0c6388b9fb/-473Wx593H-466286647-white-MODEL.jpg",
    description:
      "Comfortable casual shirt for men with a regular fit and soft fabric.",
  };

  return (
    <div className="seller-product-details-page">
      <main className="seller-product-details-content">

        {/* Page Title */}
        <div className="seller-product-details-header">
          <h1>Product Details</h1>
        </div>

        {/* Product Card */}
        <div className="seller-product-details-card">

          {/* Product Image */}
          <div className="seller-product-image-section">
            <img
              src={product.image}
              alt={product.name}
              className="seller-product-main-image"
            />
          </div>

          {/* Product Information */}
          <div className="seller-product-info-section">

            <h2>{product.name}</h2>

            <div className="seller-product-info-row">
              <span className="info-label">Category</span>
              <span>{product.category}</span>
            </div>

            <div className="seller-product-info-row">
              <span className="info-label">Brand</span>
              <span>{product.brand}</span>
            </div>

            <div className="seller-product-info-row">
              <span className="info-label">Selling Price</span>
              <span>₹{product.sellingPrice}</span>
            </div>

            <div className="seller-product-info-row">
              <span className="info-label">MFG Price</span>
              <span>₹{product.mfgPrice}</span>
            </div>

            <div className="seller-product-info-row">
              <span className="info-label">Stock</span>
              <span>{product.stock}</span>
            </div>

            <div className="seller-product-info-row">
              <span className="info-label">Approval Status</span>

              <span className="seller-product-approved-status">
                {product.status}
              </span>
            </div>

            <div className="seller-product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <button className="seller-edit-product-button">
              Edit Product
            </button>

          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerProductDetails;