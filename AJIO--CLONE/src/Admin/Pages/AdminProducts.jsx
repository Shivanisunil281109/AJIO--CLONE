import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../config/axiosConfig";
import "../CSS/Admin-products.css";



const AdminProducts = () => {

    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
    try {
        const response = await api.get("/admin/get-all-products");

        if (response.data.success) {
            setProducts(response.data.products);
        }
    } catch (error) {
        console.log(error, "error");
    }
};


useEffect(() => {
    getAllProducts();
}, []);
    // =========================================
    // NAVIGATION
    // =========================================

    const navigate = useNavigate();


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





    
   
    // =========================================
    // COMBINE ALL PRODUCTS
    // =========================================

   const allProducts = products.map((product) => ({
    id: product._id,
    name: product.name,
    seller: product.sellerId?.name || "Seller",
    category: product.category,
    price: product.price,
    stock: product.stock,
 status: product.status || (product.approvedByAdmin ? "Approved" : "Pending"),
    image: product.image
}));


    // =========================================
    // CREATE CATEGORY LIST DYNAMICALLY
    // =========================================

    const categories = [

        "All Categories",

        ...new Set(

            allProducts

                .map(
                    (product) =>
                        product.category
                )

                .filter(Boolean)

        )

    ];


    // =========================================
    // SEARCH + CATEGORY + STATUS FILTER
    // =========================================

    const filteredProducts =
        allProducts.filter((product) => {

            const searchValue =
                searchTerm
                    .toLowerCase()
                    .trim();


            // SEARCH

            const matchesSearch =

                String(
                    product.name || ""
                )
                    .toLowerCase()
                    .includes(searchValue)

                ||

                String(
                    product.id || ""
                )
                    .toLowerCase()
                    .includes(searchValue)

                ||

                String(
                    product.seller || ""
                )
                    .toLowerCase()
                    .includes(searchValue)

                ||

                String(
                    product.category || ""
                )
                    .toLowerCase()
                    .includes(searchValue);


            // CATEGORY

            const matchesCategory =

                selectedCategory ===
                "All Categories"

                ||

                product.category ===
                selectedCategory;


            // STATUS

            const matchesStatus =

                selectedStatus ===
                "All Status"

                ||

                product.status ===
                selectedStatus;


            return (

                matchesSearch &&

                matchesCategory &&

                matchesStatus

            );

        });


    // =========================================
    // SORT PRODUCTS
    // =========================================

    const sortedProducts = [
        ...filteredProducts
    ];


    if (
        sortBy ===
        "Price: Low to High"
    ) {

        sortedProducts.sort(
            (a, b) =>
                Number(a.price) -
                Number(b.price)
        );

    }

    else if (
        sortBy ===
        "Price: High to Low"
    ) {

        sortedProducts.sort(
            (a, b) =>
                Number(b.price) -
                Number(a.price)
        );

    }

    else if (
        sortBy ===
        "Product Name"
    ) {

        sortedProducts.sort(
            (a, b) =>
                String(a.name)
                    .localeCompare(
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
                            setSearchTerm(
                                e.target.value
                            )
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
                                setSelectedCategory(
                                    e.target.value
                                )
                            }
                        >

                            {categories.map(
                                (category) => (

                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>

                                )
                            )}

                        </select>

                    </div>


                    {/* STATUS FILTER */}

                    <div className="admin-products-status-filter-box">

                        <select
                            className="admin-products-status-select"
                            value={selectedStatus}
                            onChange={(e) =>
                                setSelectedStatus(
                                    e.target.value
                                )
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
                                setSortBy(
                                    e.target.value
                                )
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

                        selectedCategory !==
                        "All Categories"

                        ||

                        selectedStatus !==
                        "All Status") && (

                        <div className="admin-products-search-result">

                            {sortedProducts.length} product
                            {sortedProducts.length !== 1
                                ? "s"
                                : ""} found

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
                                    Stock
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {sortedProducts.length > 0 ? (

                                sortedProducts.map(
                                    (product) => (

                                        <tr key={product.id}>


                                            {/* PRODUCT IMAGE + NAME */}

                                            <td>

                                                <div className="admin-products-product">

                                                    <div className="admin-products-image-box">

                                                        {product.image ? (

                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="admin-products-product-image"
                                                                onError={(e) => {

                                                                    e.currentTarget.style.display =
                                                                        "none";

                                                                    e.currentTarget.nextElementSibling.style.display =
                                                                        "flex";

                                                                }}
                                                            />

                                                        ) : null}


                                                        <div
                                                            className="admin-products-image-placeholder"
                                                            style={{
                                                                display:
                                                                    product.image
                                                                        ? "none"
                                                                        : "flex"
                                                            }}
                                                        >

                                                            <span className="material-symbols-outlined">
                                                                image
                                                            </span>

                                                        </div>

                                                    </div>


                                                    <strong>
                                                        {product.name}
                                                    </strong>

                                                </div>

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
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}

                                            </td>


                                            <td>
                                                {product.stock}
                                            </td>


                                            <td>

                                                <span
                                                    className={`admin-products-status ${String(
                                                        product.status
                                                    ).toLowerCase()}`}
                                                >
                                                    {product.status}
                                                </span>

                                            </td>


                                            <td>

                                                <button
                                                    className="admin-products-view-btn"
                                                    type="button"
                                                    onClick={() =>
                                                        navigate(
                                                            `/admin/products/${product.id}`
                                                        )
                                                    }
                                                >
                                                    View
                                                </button>

                                            </td>

                                        </tr>

                                    )
                                )

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