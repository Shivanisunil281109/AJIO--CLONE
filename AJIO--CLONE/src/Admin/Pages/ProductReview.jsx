import React, { useState } from "react";
import "../CSS/Product-review.css";

const ProductReview = () => {

    // =========================================
    // DEFAULT PRODUCT DATA
    // =========================================

    const defaultProducts = [
        {
            id: "PRD12345",
            name: "Nike Air Max Running Shoes",
            seller: "Sports Hub",
            email: "seller@sportshub.com",
            category: "Men Footwear",
            price: 4999,
            status: "Pending"
        },
        {
            id: "PRD12346",
            name: "Puma Regular Fit T-Shirt",
            seller: "Fashion Studio",
            email: "seller@fashion.com",
            category: "Men Clothing",
            price: 899,
            status: "Pending"
        },
        {
            id: "PRD12347",
            name: "Colorbar Matte Lipstick",
            seller: "Beauty Glam",
            email: "info@beauty.com",
            category: "Beauty",
            price: 650,
            status: "Pending"
        },
        {
            id: "PRD12348",
            name: "Samsung Galaxy Watch 6",
            seller: "Tech World",
            email: "seller@techworld.com",
            category: "Electronics",
            price: 24999,
            status: "Pending"
        },
        {
            id: "PRD12349",
            name: "Levi's 511 Slim Jeans",
            seller: "Denim Store",
            email: "contact@denimstore.com",
            category: "Men Clothing",
            price: 2599,
            status: "Approved"
        },
        {
            id: "PRD12350",
            name: "Adidas Backpack",
            seller: "Sports Hub",
            email: "seller@sportshub.com",
            category: "Bags & Backpacks",
            price: 1999,
            status: "Rejected"
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
    // FORMAT SELLER PRODUCTS FOR ADMIN REVIEW
    // =========================================

    const formattedSellerProducts =
        sellerCreatedProducts.map((product) => ({

            id: product.id,

            name: product.name,

            seller: product.brand || "Seller",

            email: "seller@ajio.com",

            category: product.category,

            price:
                product.price ||
                product.sellingPrice ||
                0,

            status:
                product.status ||
                "Pending"

        }));


    // =========================================
    // COMBINE DEFAULT + SELLER PRODUCTS
    // =========================================

    const [products, setProducts] = useState([
        ...defaultProducts,
        ...formattedSellerProducts
    ]);


    // =========================================
    // ACTIVE STATUS TAB
    // =========================================

    const [activeTab, setActiveTab] = useState("All");


    // =========================================
    // CATEGORY FILTER STATE
    // =========================================

    const [selectedCategory, setSelectedCategory] =
        useState("All Categories");


    // =========================================
    // SORT STATE
    // =========================================

    const [sortBy, setSortBy] = useState("Sort By");


    // =========================================
    // FILTER PRODUCTS BY STATUS + CATEGORY
    // =========================================

    const filteredProducts = products.filter((product) => {

        const statusMatch =
            activeTab === "All" ||
            product.status === activeTab;

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

        sortedProducts.sort(
            (a, b) =>
                Number(a.price) - Number(b.price)
        );

    } else if (sortBy === "Price: High to Low") {

        sortedProducts.sort(
            (a, b) =>
                Number(b.price) - Number(a.price)
        );

    } else if (sortBy === "Product Name") {

        sortedProducts.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    // =========================================
    // APPROVE PRODUCT
    // =========================================

    const handleApproveProduct = (productId) => {

        // Update product on Admin Product Review page
        const updatedProducts = products.map((product) => {

            if (product.id === productId) {

                return {
                    ...product,
                    status: "Approved"
                };

            }

            return product;

        });

        setProducts(updatedProducts);


        // =========================================
        // UPDATE SELLER PRODUCT IN LOCAL STORAGE
        // =========================================

        const currentSellerProducts =
            JSON.parse(
                localStorage.getItem("sellerCreatedProducts")
            ) || [];


        const updatedSellerProducts =
            currentSellerProducts.map((product) => {

                if (product.id === productId) {

                    return {
                        ...product,
                        status: "Approved"
                    };

                }

                return product;

            });


        localStorage.setItem(
            "sellerCreatedProducts",
            JSON.stringify(updatedSellerProducts)
        );
    };


    // =========================================
    // REJECT PRODUCT
    // =========================================

    const handleRejectProduct = (productId) => {

        // Update product on Admin Product Review page
        const updatedProducts = products.map((product) => {

            if (product.id === productId) {

                return {
                    ...product,
                    status: "Rejected"
                };

            }

            return product;

        });

        setProducts(updatedProducts);


        // =========================================
        // UPDATE SELLER PRODUCT IN LOCAL STORAGE
        // =========================================

        const currentSellerProducts =
            JSON.parse(
                localStorage.getItem("sellerCreatedProducts")
            ) || [];


        const updatedSellerProducts =
            currentSellerProducts.map((product) => {

                if (product.id === productId) {

                    return {
                        ...product,
                        status: "Rejected"
                    };

                }

                return product;

            });


        localStorage.setItem(
            "sellerCreatedProducts",
            JSON.stringify(updatedSellerProducts)
        );
    };


    return (

        <div className="admin-product-review-page">


            {/* =========================================
                PAGE HEADING
            ========================================= */}

            <div className="admin-review-heading">

                <h1>
                    Product Review
                </h1>

                <p>
                    Review and approve products submitted by sellers.
                </p>

            </div>


            {/* =========================================
                STATUS TABS
            ========================================= */}

            <div className="admin-review-tabs">


                {/* ALL */}

                <button
                    className={`admin-review-tab ${
                        activeTab === "All" ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => setActiveTab("All")}
                >

                    All

                    <span>
                        {products.length}
                    </span>

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

                        {
                            products.filter(
                                (product) =>
                                    product.status === "Pending"
                            ).length
                        }

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

                        {
                            products.filter(
                                (product) =>
                                    product.status === "Approved"
                            ).length
                        }

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

                        {
                            products.filter(
                                (product) =>
                                    product.status === "Rejected"
                            ).length
                        }

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
                    onChange={(e) =>
                        setSelectedCategory(e.target.value)
                    }
                >

                    <option value="All Categories">
                        All Categories
                    </option>

                    <option value="Men Clothing">
                        Men Clothing
                    </option>

                    <option value="Men Footwear">
                        Men Footwear
                    </option>

                    <option value="Beauty">
                        Beauty
                    </option>

                    <option value="Electronics">
                        Electronics
                    </option>

                    <option value="Bags & Backpacks">
                        Bags & Backpacks
                    </option>

                    <option value="Clothing">
                        Clothing
                    </option>

                    <option value="Footwear">
                        Footwear
                    </option>

                </select>


                {/* =========================================
                    SORT
                ========================================= */}

                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(e.target.value)
                    }
                >

                    <option value="Sort By">
                        Sort By
                    </option>

                    <option value="Price: Low to High">
                        Price: Low to High
                    </option>

                    <option value="Price: High to Low">
                        Price: High to Low
                    </option>

                    <option value="Product Name">
                        Product Name
                    </option>

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

                                <th>
                                    Product
                                </th>

                                <th>
                                    Product ID
                                </th>

                                <th>
                                    Seller
                                </th>

                                <th>
                                    Category
                                </th>

                                <th>
                                    Price
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        {/* TABLE BODY */}

                        <tbody>

                            {sortedProducts.map((product) => (

                                <tr key={product.id}>


                                    {/* PRODUCT */}

                                    <td>

                                        <strong>
                                            {product.name}
                                        </strong>

                                    </td>


                                    {/* PRODUCT ID */}

                                    <td>

                                        {product.id}

                                    </td>


                                    {/* SELLER */}

                                    <td>

                                        <div className="admin-review-seller">

                                            <strong>
                                                {product.seller}
                                            </strong>

                                            <span>
                                                {product.email}
                                            </span>

                                        </div>

                                    </td>


                                    {/* CATEGORY */}

                                    <td>

                                        {product.category}

                                    </td>


                                    {/* PRICE */}

                                    <td>

                                        ₹{Number(product.price).toLocaleString("en-IN")}

                                    </td>


                                    {/* STATUS */}

                                    <td>

                                        <span
                                            className={
                                                `admin-review-status ${product.status.toLowerCase()}`
                                            }
                                        >

                                            {product.status}

                                        </span>

                                    </td>


                                    {/* ACTION */}

                                    <td>

                                        {
                                            product.status === "Pending"
                                                ? (

                                                    <div className="admin-review-actions">


                                                        {/* APPROVE */}

                                                        <button
                                                            className="admin-approve-btn"
                                                            type="button"
                                                            onClick={() =>
                                                                handleApproveProduct(product.id)
                                                            }
                                                        >
                                                            Approve
                                                        </button>


                                                        {/* REJECT */}

                                                        <button
                                                            className="admin-reject-btn"
                                                            type="button"
                                                            onClick={() =>
                                                                handleRejectProduct(product.id)
                                                            }
                                                        >
                                                            Reject
                                                        </button>

                                                    </div>

                                                )
                                                : (

                                                    <span className="admin-review-completed">
                                                        Reviewed
                                                    </span>

                                                )
                                        }

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