import React from "react";
import "../CSS/Product-review.css";

const ProductReview = () => {

    // =========================================
    // PRODUCT DATA
    // =========================================

    const products = [
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


    return (
        <div className="admin-product-review-page">

            {/* PAGE HEADING */}

            <div className="admin-review-heading">
                <h1>Product Review</h1>

                <p>
                    Review and approve products submitted by sellers.
                </p>
            </div>


            {/* STATUS TABS */}

            <div className="admin-review-tabs">

                <button className="admin-review-tab active">
                    All
                    <span>{products.length}</span>
                </button>

                <button className="admin-review-tab">
                    Pending
                    <span>
                        {
                            products.filter(
                                (product) => product.status === "Pending"
                            ).length
                        }
                    </span>
                </button>

                <button className="admin-review-tab">
                    Approved
                    <span>
                        {
                            products.filter(
                                (product) => product.status === "Approved"
                            ).length
                        }
                    </span>
                </button>

                <button className="admin-review-tab">
                    Rejected
                    <span>
                        {
                            products.filter(
                                (product) => product.status === "Rejected"
                            ).length
                        }
                    </span>
                </button>

            </div>


            {/* FILTER SECTION */}

            <div className="admin-review-filters">

                <select>
                    <option>All Categories</option>
                    <option>Men Clothing</option>
                    <option>Men Footwear</option>
                    <option>Beauty</option>
                    <option>Electronics</option>
                    <option>Bags & Backpacks</option>
                </select>


                <select>
                    <option>Sort By</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Product Name</option>
                </select>

            </div>


            {/* PRODUCT TABLE */}

            <div className="admin-review-table-card">

                <div className="admin-review-table-wrapper">

                    <table className="admin-review-table">

                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Product ID</th>
                                <th>Seller</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>


                        <tbody>

                            {products.map((product) => (

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

                                        <div className="admin-review-seller">

                                            <strong>
                                                {product.seller}
                                            </strong>

                                            <span>
                                                {product.email}
                                            </span>

                                        </div>

                                    </td>


                                    <td>
                                        {product.category}
                                    </td>


                                    <td>
                                        ₹{product.price.toLocaleString()}
                                    </td>


                                    <td>

                                        <span
                                            className={`admin-review-status ${product.status.toLowerCase()}`}
                                        >
                                            {product.status}
                                        </span>

                                    </td>


                                    <td>

                                        {product.status === "Pending" ? (

                                            <div className="admin-review-actions">

                                                <button
                                                    className="admin-approve-btn"
                                                    type="button"
                                                >
                                                    Approve
                                                </button>

                                                <button
                                                    className="admin-reject-btn"
                                                    type="button"
                                                >
                                                    Reject
                                                </button>

                                            </div>

                                        ) : (

                                            <span className="admin-review-completed">
                                                Reviewed
                                            </span>

                                        )}

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