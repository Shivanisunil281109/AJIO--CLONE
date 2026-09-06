import React from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import "../CSS/SellerProductDetails.css";

const SellerProductDetails = () => {
  const location = useLocation();
  const { productId } = useParams();
  const navigate = useNavigate();

  const isEditMode = location.pathname.includes("/edit");

  const products = [
    {
      id: 1,
      name: "Men Casual Shirt",
      category: "Clothing",
      brand: "ZIKARAA",
      sellingPrice: 999,
      mfgPrice: 1299,
      stock: 20,
      status: "Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260421/KtGk/69e7a96014d0c2171988e4ff/zikaraa_blue_men_regular_fit_cotton_shirt.jpg",
      description:
        "Men regular fit cotton casual shirt suitable for everyday wear.",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      category: "Clothing",
      brand: "Pepe Jeans",
      sellingPrice: 1499,
      mfgPrice: 1999,
      stock: 15,
      status: "Pending",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240606/jIcS/666157fe16fd2c6e6a508452/pepe_jeans_dark_blue_men_vapour_mid-wash_slim_fit_jeans.jpg",
      description:
        "Dark blue mid-wash slim fit jeans for men with a stylish casual look.",
    },
    {
      id: 3,
      name: "Running Sneakers",
      category: "Footwear",
      brand: "AADI",
      sellingPrice: 1999,
      mfgPrice: 2499,
      stock: 8,
      status: "Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260509/JUQP/69ff5d79fcb5bb61d2b2894f/aadi_green_men_colourblock_running_shoes.jpg",
      description:
        "Men colourblock running shoes designed for comfort and daily activity.",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      category: "Electronics",
      brand: "Sony",
      sellingPrice: 2499,
      mfgPrice: 2999,
      stock: 0,
      status: "Not Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260814/rJC3/6a7f240da0359b385af4512f/sony_blue_sony_wh-ch520_wireless_on-ear_bluetooth_headphones_with_mic_up_to_50_hours_of_playtime_quick_charging_multipoint_connectivity_fast_charge_blue.jpg",
      description:
        "Sony wireless on-ear Bluetooth headphones with microphone and long battery life.",
    },
  ];

  const product = products.find(
    (item) => item.id === Number(productId)
  );

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

        {/* Page Title */}
        <div className="seller-product-details-header">



  <button
    className="seller-back-products-button"
    onClick={() => navigate("/seller/products")}
  >
    ← Back to Products
  </button>

  <h1>{isEditMode ? "Edit Product" : "Product Details"}</h1>

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

            {!isEditMode ? (
              <>
                {/* VIEW MODE */}

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

                <button
  className="seller-edit-product-button"
  onClick={() => navigate(`/seller/products/${product.id}/edit`)}
>
  Edit Product
</button>



              </>
            ) : (
              <>
                {/* EDIT MODE */}

                <div className="seller-edit-form">

                  <div className="seller-edit-form-group">
                    <label>Product Name</label>

                    <input
                      type="text"
                      defaultValue={product.name}
                    />
                  </div>

                  <div className="seller-edit-form-group">
                    <label>Category</label>

                    <select defaultValue={product.category}>
                      <option value="Clothing">Clothing</option>
                      <option value="Footwear">Footwear</option>
                      <option value="Electronics">Electronics</option>
                    </select>
                  </div>

                  <div className="seller-edit-form-group">
                    <label>Brand</label>

                    <input
                      type="text"
                      defaultValue={product.brand}
                    />
                  </div>

                  <div className="seller-edit-form-row">

                    <div className="seller-edit-form-group">
                      <label>Selling Price</label>

                      <input
                        type="number"
                        defaultValue={product.sellingPrice}
                      />
                    </div>

                    <div className="seller-edit-form-group">
                      <label>MFG Price</label>

                      <input
                        type="number"
                        defaultValue={product.mfgPrice}
                      />
                    </div>

                  </div>

                  <div className="seller-edit-form-group">
                    <label>Stock</label>

                    <input
                      type="number"
                      defaultValue={product.stock}
                    />
                  </div>

                  <div className="seller-edit-form-group">
                    <label>Description</label>

                    <textarea
                      rows="5"
                      defaultValue={product.description}
                    ></textarea>
                  </div>

                  <button className="seller-update-product-button">
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