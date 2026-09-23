import React from "react";
import { useNavigate, useParams } from "react-router";
import "../CSS/Admin-product-details.css";

const AdminProductDetails = () => {

    const navigate = useNavigate();

    const { productId } = useParams();


    // =========================================
    // DEFAULT PRODUCTS
    // =========================================

    const defaultProducts = [

        {
            id: "PRD12345",
            name: "Nike Air Max Running Shoes",
            seller: "Sports Hub",
            category: "Men Footwear",
            price: 4999,
            stock: 25,
            status: "Pending",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: "PRD12346",
            name: "Puma Regular Fit T-Shirt",
            seller: "Fashion Studio",
            category: "Men Clothing",
            price: 899,
            stock: 40,
            status: "Pending",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: "PRD12347",
            name: "Colorbar Matte Lipstick",
            seller: "Beauty Glam",
            category: "Beauty",
            price: 650,
            stock: 32,
            status: "Pending",
            image:
                "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: "PRD12348",
            name: "Samsung Galaxy Watch 6",
            seller: "Tech World",
            category: "Electronics",
            price: 24999,
            stock: 12,
            status: "Pending",
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: "PRD12349",
            name: "Levi's 511 Slim Jeans",
            seller: "Denim Store",
            category: "Men Clothing",
            price: 2599,
            stock: 18,
            status: "Approved",
            image:
                "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: "PRD12350",
            name: "Adidas Backpack",
            seller: "Sports Hub",
            category: "Bags & Backpacks",
            price: 1999,
            stock: 20,
            status: "Rejected",
            image:
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
        }

    ];


    // =========================================
    // GET SELLER CREATED PRODUCTS
    // =========================================

    const sellerCreatedProducts =
        JSON.parse(
            localStorage.getItem("sellerCreatedProducts")
        ) || [];


    // =========================================
    // FORMAT SELLER PRODUCTS
    // =========================================

    const formattedSellerProducts =
        sellerCreatedProducts.map((product) => ({

            id: product.id,

            name: product.name,

            seller:
                product.brand || "Seller",

            category:
                product.category || "Not Available",

            price:
                product.price ||
                product.sellingPrice ||
                0,

            mfgPrice:
                product.mfgPrice || 0,

            stock:
                product.stock || 0,

            status:
                product.status || "Pending",

            productStatus:
                product.productStatus || "",

            description:
                product.description || "",

            brand:
                product.brand || "",

            image:
                product.image ||
                product.img ||
                ""

        }));


    // =========================================
    // COMBINE PRODUCTS
    // =========================================

    const allProducts = [
        ...defaultProducts,
        ...formattedSellerProducts
    ];


    // =========================================
    // FIND SELECTED PRODUCT
    // =========================================

    const product = allProducts.find(
        (item) =>
            String(item.id) === String(productId)
    );


    // =========================================
    // PRODUCT NOT FOUND
    // =========================================

    if (!product) {

        return (

            <div className="admin-product-details-page">

                <div className="admin-product-not-found">

                    <span className="material-symbols-outlined">
                        inventory_2
                    </span>

                    <h2>
                        Product Not Found
                    </h2>

                    <p>
                        The selected product could not be found.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            navigate("/admin/products")
                        }
                    >
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

                    <h1>
                        Product Details
                    </h1>

                    <p>
                        View complete product information.
                    </p>

                </div>


                <button
                    type="button"
                    className="admin-product-back-btn"
                    onClick={() =>
                        navigate("/admin/products")
                    }
                >

                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>

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

                                    e.currentTarget.style.display =
                                        "none";

                                    e.currentTarget.nextElementSibling.style.display =
                                        "flex";

                                }}
                            />

                        ) : null}


                        <div
                            className="admin-product-details-image-placeholder"
                            style={{
                                display: product.image
                                    ? "none"
                                    : "flex"
                            }}
                        >

                            <span className="material-symbols-outlined">
                                image
                            </span>

                        </div>

                    </div>

                </div>


                {/* PRODUCT INFORMATION */}

                <div className="admin-product-details-info">


                    <div className="admin-product-details-title-row">

                        <div>

                            <span className="admin-product-details-id">
                                Product ID: {product.id}
                            </span>

                            <h2>
                                {product.name}
                            </h2>

                        </div>


                        <span
                            className={`admin-product-details-status ${String(
                                product.status
                            ).toLowerCase()}`}
                        >
                            {product.status}
                        </span>

                    </div>


                    {/* INFORMATION GRID */}

                    <div className="admin-product-info-grid">


                        <div className="admin-product-info-item">

                            <span>
                                Seller
                            </span>

                            <strong>
                                {product.seller}
                            </strong>

                        </div>


                        <div className="admin-product-info-item">

                            <span>
                                Category
                            </span>

                            <strong>
                                {product.category}
                            </strong>

                        </div>


                        <div className="admin-product-info-item">

                            <span>
                                Price
                            </span>

                            <strong>
                                ₹{Number(
                                    product.price
                                ).toLocaleString("en-IN")}
                            </strong>

                        </div>


                        <div className="admin-product-info-item">

                            <span>
                                Stock
                            </span>

                            <strong>
                                {product.stock}
                            </strong>

                        </div>


                        {product.brand && (

                            <div className="admin-product-info-item">

                                <span>
                                    Brand
                                </span>

                                <strong>
                                    {product.brand}
                                </strong>

                            </div>

                        )}


                        {Number(product.mfgPrice) > 0 && (

                            <div className="admin-product-info-item">

                                <span>
                                    MFG Price
                                </span>

                                <strong>
                                    ₹{Number(
                                        product.mfgPrice
                                    ).toLocaleString("en-IN")}
                                </strong>

                            </div>

                        )}


                        {product.productStatus && (

                            <div className="admin-product-info-item">

                                <span>
                                    Product Status
                                </span>

                                <strong>
                                    {product.productStatus}
                                </strong>

                            </div>

                        )}

                    </div>


                    {/* DESCRIPTION */}

                    {product.description && (

                        <div className="admin-product-description">

                            <span>
                                Description
                            </span>

                            <p>
                                {product.description}
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

};

export default AdminProductDetails;