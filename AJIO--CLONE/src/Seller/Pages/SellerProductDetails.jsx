import React, { useState } from "react";
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

    {
      id: 5,
      name: "Men Polo T-Shirt",
      category: "Clothing",
      brand: "U.S. Polo Assn.",
      sellingPrice: 799,
      mfgPrice: 1199,
      stock: 25,
      status: "Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260527/Yjo5/6a16ceb714d0c217190753ac/u.s._polo_assn._navy_blue_men_patterned_regular_fit_polo_t-shirt.jpg",
      description:
        "Men patterned regular fit polo T-shirt suitable for casual and everyday wear.",
    },

    {
      id: 6,
      name: "Women Printed Top",
      category: "Clothing",
      brand: "Niya Art",
      sellingPrice: 899,
      mfgPrice: 1299,
      stock: 18,
      status: "Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250108/BxLJ/677dd2ec663dbe1c5fc4092f/niya_art_green_womens_cotton_printed_top.jpg",
      description:
        "Women cotton printed top with a comfortable fit for casual and daily wear.",
    },

    {
      id: 7,
      name: "Women Embroidered Kurta",
      category: "Clothing",
      brand: "Svaraa",
      sellingPrice: 1299,
      mfgPrice: 1799,
      stock: 12,
      status: "Pending",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260408/zjiW/69d6a77e9e784a25d5cf613f/svaraa_brown_women_embroidery_straight_kurta_set.jpg",
      description:
        "Women embroidered straight kurta set with an elegant ethnic design.",
    },
  ];


// =========================
// GET CREATED PRODUCTS
// =========================

const createdProducts =
  JSON.parse(
    localStorage.getItem("sellerCreatedProducts")
  ) || [];






// =========================
// COMBINE ALL PRODUCTS
// =========================

const allProducts = [
  ...products,
  ...createdProducts
];







// =========================
// FIND CURRENT PRODUCT
// =========================

const originalProduct = allProducts.find(
  (item) => item.id === Number(productId)
);


// =========================
// GET EDITED PRODUCT
// =========================

const savedProduct = localStorage.getItem(
  `sellerProduct_${productId}`
);


// =========================
// FINAL PRODUCT
// =========================

const product = savedProduct
  ? JSON.parse(savedProduct)
  : originalProduct;







  const [editedProduct, setEditedProduct] = useState({
    name: product?.name || "",
    category: product?.category || "",
    brand: product?.brand || "",
    sellingPrice: product?.sellingPrice || "",
    mfgPrice: product?.mfgPrice || "",
    stock: product?.stock || "",
    description: product?.description || "",
  });

  const handleUpdateProduct = () => {
  


  // =========================
  // VALIDATION
  // =========================

  if (
    !editedProduct.name.trim() ||
    !editedProduct.brand.trim() ||
    !editedProduct.description.trim()
  ) {
    alert("Please fill all product fields.");
    return;
  }

  if (
    Number(editedProduct.sellingPrice) <= 0 ||
    Number(editedProduct.mfgPrice) <= 0
  ) {
    alert("Product price must be greater than 0.");
    return;
  }

  if (Number(editedProduct.stock) < 0) {
    alert("Stock cannot be negative.");
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
      JSON.stringify(updatedProduct)
    );

    alert("Product updated successfully!");

    navigate(`/seller/products/${product.id}`);
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

          <h1>
            {isEditMode ? "Edit Product" : "Product Details"}
          </h1>

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
                  type="button"
                  className="seller-edit-product-button"
                  onClick={() =>
                    navigate(`/seller/products/${product.id}/edit`)
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