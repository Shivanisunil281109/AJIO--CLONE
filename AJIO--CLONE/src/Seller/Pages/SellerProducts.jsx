import React from "react";
import { useNavigate } from "react-router";
import "../CSS/SellerProducts.css";

const SellerProducts = () => {
  const navigate = useNavigate();

  // =========================
  // ORIGINAL PRODUCTS
  // =========================

  const products = [
    {
      id: 1,
      name: "Men Casual Shirt",
      category: "Clothing",
      price: 999,
      stock: 20,
      status: "Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260421/KtGk/69e7a96014d0c2171988e4ff/zikaraa_blue_men_regular_fit_cotton_shirt.jpg",
    },

    {
      id: 2,
      name: "Slim Fit Jeans",
      category: "Clothing",
      price: 1499,
      stock: 15,
      status: "Pending",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240606/jIcS/666157fe16fd2c6e6a508452/pepe_jeans_dark_blue_men_vapour_mid-wash_slim_fit_jeans.jpg",
    },

    {
      id: 3,
      name: "Running Sneakers",
      category: "Footwear",
      price: 1999,
      stock: 8,
      status: "Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260509/JUQP/69ff5d79fcb5bb61d2b2894f/aadi_green_men_colourblock_running_shoes.jpg",
    },

    {
      id: 4,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      stock: 0,
      status: "Not Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260814/rJC3/6a7f240da0359b385af4512f/sony_blue_sony_wh-ch520_wireless_on-ear_bluetooth_headphones_with_mic_up_to_50_hours_of_playtime_quick_charging_multipoint_connectivity_fast_charge_blue.jpg",
    },

    {
      id: 5,
      name: "Men Polo T-Shirt",
      category: "Clothing",
      price: 799,
      stock: 25,
      status: "Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260527/Yjo5/6a16ceb714d0c217190753ac/u.s._polo_assn._navy_blue_men_patterned_regular_fit_polo_t-shirt.jpg",
    },

    {
      id: 6,
      name: "Women Printed Top",
      category: "Clothing",
      price: 899,
      stock: 18,
      status: "Approved",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250108/BxLJ/677dd2ec663dbe1c5fc4092f/niya_art_green_womens_cotton_printed_top.jpg",
    },

    {
      id: 7,
      name: "Women Embroidered Kurta",
      category: "Clothing",
      price: 1299,
      stock: 12,
      status: "Pending",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260408/zjiW/69d6a77e9e784a25d5cf613f/svaraa_brown_women_embroidery_straight_kurta_set.jpg",
    },
  ];




const createdProducts =
    JSON.parse(localStorage.getItem("sellerCreatedProducts")) || [];

const allProducts = [
    ...products,
    ...createdProducts
];




  // =========================
  // GET UPDATED PRODUCTS
  // FROM LOCAL STORAGE
  // =========================

const updatedProducts = allProducts.map((product) => {
    const savedProduct = localStorage.getItem(
      `sellerProduct_${product.id}`
    );

    if (savedProduct) {
      const parsedProduct = JSON.parse(savedProduct);

      return {
        ...product,

        name: parsedProduct.name,
        category: parsedProduct.category,
        price: parsedProduct.sellingPrice,
        stock: parsedProduct.stock,
      };
    }

    return product;
  });

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

          <div className="products-card-header">
            <h2>My Products</h2>
          </div>

          {/* =========================
              PRODUCTS TABLE
          ========================= */}

          <div className="products-table-container">

            <table className="products-table">

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

                      <div className="seller-product-table-info">

                        {product.image &&
                        !product.image.startsWith("YOUR_") ? (

                          <img
                            src={product.image}
                            alt={product.name}
                            className="seller-product-table-image"
                          />

                        ) : (

                          <div className="seller-product-table-no-image">

                            <span className="material-symbols-outlined">
                              image
                            </span>

                          </div>

                        )}

                        <span className="seller-product-table-name">
                          {product.name}
                        </span>

                      </div>

                    </td>

                    {/* CATEGORY */}

                    <td>
                      {product.category}
                    </td>

                    {/* SELLING PRICE */}

                    <td>
                      ₹{product.price}
                    </td>

                    {/* STOCK */}

                    <td>
                      {product.stock}
                    </td>

                    {/* STATUS */}

                    <td>

                      <span
                        className={`product-status ${product.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {product.status}
                      </span>

                    </td>

                    {/* ACTION */}

                    <td>

                      <button
                        type="button"
                        className="view-product-btn"
                        onClick={() =>
                          navigate(
                            `/seller/products/${product.id}`
                          )
                        }
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="edit-product-btn"
                        onClick={() =>
                          navigate(
                            `/seller/products/${product.id}/edit`
                          )
                        }
                      >
                        Edit
                      </button>

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