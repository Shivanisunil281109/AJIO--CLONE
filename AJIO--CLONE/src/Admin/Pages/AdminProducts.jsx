import React, { useState } from "react";
import "../CSS/Admin-products.css";

const AdminProducts = () => {

    // =========================================
    // SEARCH STATE
    // =========================================

    const [searchTerm, setSearchTerm] = useState("");


    // =========================================
    // CATEGORY FILTER STATE
    // =========================================

    const [selectedCategory, setSelectedCategory] =
        useState("All Categories");


    // =========================================
    // STATUS FILTER STATE
    // =========================================

    const [selectedStatus, setSelectedStatus] =
        useState("All Status");


    // =========================================
    // SORT STATE
    // =========================================

    const [sortBy, setSortBy] =
        useState("Sort By");


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
            status: "Pending"
        },
        {
            id: "PRD12346",
            name: "Puma Regular Fit T-Shirt",
            seller: "Fashion Studio",
            category: "Men Clothing",
            price: 899,
            stock: 40,
            status: "Pending"
        },
        {
            id: "PRD12347",
            name: "Colorbar Matte Lipstick",
            seller: "Beauty Glam",
            category: "Beauty",
            price: 650,
            stock: 32,
            status: "Pending"
        },
        {
            id: "PRD12348",
            name: "Samsung Galaxy Watch 6",
            seller: "Tech World",
            category: "Electronics",
            price: 24999,
            stock: 12,
            status: "Pending"
        },
        {
            id: "PRD12349",
            name: "Levi's 511 Slim Jeans",
            seller: "Denim Store",
            category: "Men Clothing",
            price: 2599,
            stock: 18,
            status: "Approved"
        },
        {
            id: "PRD12350",
            name: "Adidas Backpack",
            seller: "Sports Hub",
            category: "Bags & Backpacks",
            price: 1999,
            stock: 20,
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
    // FORMAT SELLER PRODUCTS
    // =========================================

    const formattedSellerProducts =
        sellerCreatedProducts.map((product) => ({

            id: product.id,

            name: product.name,

            seller: product.brand || "Seller",

            category: product.category,

            price:
                product.price ||
                product.sellingPrice ||
                0,

            stock:
                product.stock || 0,

            status:
                product.status || "Pending"

        }));


    // =========================================
    // COMBINE ALL PRODUCTS
    // =========================================

    const allProducts = [
        ...defaultProducts,
        ...formattedSellerProducts
    ];


    // =========================================
    // CREATE CATEGORY LIST DYNAMICALLY
    // =========================================

    const categories = [
        "All Categories",
        ...new Set(
            allProducts
                .map((product) => product.category)
                .filter(Boolean)
        )
    ];


    // =========================================
    // SEARCH + CATEGORY + STATUS FILTER
    // =========================================

    const filteredProducts = allProducts.filter((product) => {

        const searchValue = searchTerm
            .toLowerCase()
            .trim();


        // SEARCH

        const matchesSearch =
            String(product.name || "")
                .toLowerCase()
                .includes(searchValue) ||

            String(product.id || "")
                .toLowerCase()
                .includes(searchValue) ||

            String(product.seller || "")
                .toLowerCase()
                .includes(searchValue) ||

            String(product.category || "")
                .toLowerCase()
                .includes(searchValue);


        // CATEGORY

        const matchesCategory =
            selectedCategory === "All Categories" ||
            product.category === selectedCategory;


        // STATUS

        const matchesStatus =
            selectedStatus === "All Status" ||
            product.status === selectedStatus;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
        );
    });


    // =========================================
    // SORT PRODUCTS
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
                String(a.name).localeCompare(
                    String(b.name)
                )
        );

    }


    return (

        <div className="admin-products-page">


            {/* =========================================
                PAGE HEADER
            ========================================= */}

            <div className="admin-products-heading">

                <div>

                    <h1>
                        All Products
                    </h1>

                    <p>
                        View and manage products from all sellers.
                    </p>

                </div>


                <div className="admin-products-count">

                    Total Products

                    <strong>
                        {allProducts.length}
                    </strong>

                </div>

            </div>


            {/* =========================================
                SEARCH + FILTERS + SORT
            ========================================= */}

            <div className="admin-products-search-section">


                {/* SEARCH BOX */}

                <div className="admin-products-search-box">

                    <span
                        className="material-symbols-outlined admin-products-search-icon"
                    >
                        search
                    </span>


                    <input
                        type="text"
                        placeholder="Search by product, ID, seller or category..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                        className="admin-products-search-input"
                    />


                    {searchTerm && (

                        <button
                            type="button"
                            className="admin-products-search-clear"
                            onClick={() =>
                                setSearchTerm("")
                            }
                            title="Clear search"
                        >

                            <span className="material-symbols-outlined">
                                close
                            </span>

                        </button>

                    )}

                </div>


                {/* FILTER AREA */}

                <div className="admin-products-filter-area">


                    {/* CATEGORY FILTER */}

                    <div className="admin-products-category-box">

                        <select
                            className="admin-products-category-select"
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                        >

                            {categories.map((category) => (

                                <option
                                    key={category}
                                    value={category}
                                >
                                    {category}
                                </option>

                            ))}

                        </select>

                    </div>


                    {/* STATUS FILTER */}

                    <div className="admin-products-status-filter-box">

                        <select
                            className="admin-products-status-select"
                            value={selectedStatus}
                            onChange={(e) =>
                                setSelectedStatus(e.target.value)
                            }
                        >

                            <option value="All Status">
                                All Status
                            </option>

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="Approved">
                                Approved
                            </option>

                            <option value="Rejected">
                                Rejected
                            </option>

                        </select>

                    </div>


                    {/* SORT FILTER */}

                    <div className="admin-products-sort-box">

                        <select
                            className="admin-products-sort-select"
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


                    {/* RESULT COUNT */}

                    {(searchTerm ||
                        selectedCategory !== "All Categories" ||
                        selectedStatus !== "All Status") && (

                        <div className="admin-products-search-result">

                            {sortedProducts.length} product
                            {sortedProducts.length !== 1 ? "s" : ""} found

                        </div>

                    )}

                </div>

            </div>


            {/* =========================================
                PRODUCT TABLE
            ========================================= */}

            <div className="admin-products-table-card">

                <div className="admin-products-table-wrapper">

                    <table className="admin-products-table">

                        <thead>

                            <tr>

                                <th>Product</th>

                                <th>Product ID</th>

                                <th>Seller</th>

                                <th>Category</th>

                                <th>Price</th>

                                <th>Stock</th>

                                <th>Status</th>

                                <th>Action</th>

                            </tr>

                        </thead>


                        <tbody>

                            {sortedProducts.length > 0 ? (

                                sortedProducts.map((product) => (

                                    <tr key={product.id}>

                                        <td>

                                            <strong>
                                                {product.name}
                                            </strong>

                                        </td>


                                        <td>
                                            {product.id}
                                        </td>


                                        <td>
                                            {product.seller}
                                        </td>


                                        <td>
                                            {product.category}
                                        </td>


                                        <td>

                                            ₹{Number(
                                                product.price
                                            ).toLocaleString("en-IN")}

                                        </td>


                                        <td>
                                            {product.stock}
                                        </td>


                                        <td>

                                            <span
                                                className={`admin-products-status ${product.status.toLowerCase()}`}
                                            >
                                                {product.status}
                                            </span>

                                        </td>


                                        <td>

                                            <button
                                                className="admin-products-view-btn"
                                                type="button"
                                            >
                                                View
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="8"
                                        className="admin-products-no-results"
                                    >

                                        <span className="material-symbols-outlined">
                                            search_off
                                        </span>


                                        <strong>
                                            No products found
                                        </strong>


                                        <p>
                                            Try another search, category or status.
                                        </p>

                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default AdminProducts;