import React, { useState } from "react";
import {
    useNavigate,
    useParams,
    useLocation
} from "react-router";
import "../CSS/Admin-seller-details.css";


const AdminSellerDetails = () => {

    // =========================================
    // NAVIGATION + PARAMS
    // =========================================

    const navigate = useNavigate();

    const { sellerId } = useParams();

    const location = useLocation();

    const isEditMode =
        location.pathname.includes("/edit");


    // =========================================
    // DEFAULT SELLER DATA
    // =========================================

    const sellers = [

        {
            id: "SEL001",
            name: "Fashion Studio",
            website: "fashionstudio.com",
            email: "info@fashionstudio.com",
            mobile: "9176543210",
            products: 245,
            orders: 1245,
            status: "Active",

            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHlWi2Wr7HCRgyi4w3jHkd3dYr8BDc44YX4tLtTrlYc3udAjGHgP8jDA&s=10",

            sellerProducts: [
                {
                    id: "PRD12346",
                    name: "Puma Regular Fit T-Shirt",
                    category: "Men Clothing",
                    price: 899,
                    status: "Pending"
                },
                {
                    id: "PRD12351",
                    name: "Men Casual Shirt",
                    category: "Clothing",
                    price: 999,
                    status: "Approved"
                }
            ]
        },


        {
            id: "SEL002",
            name: "Sports Hub",
            website: "sportshub.com",
            email: "seller@sportshub.com",
            mobile: "9476543211",
            products: 312,
            orders: 2145,
            status: "Active",

            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmp32p40FIxW-NY1qr1_BvAkktmWKjN0X93Dn0B28gg&s",

            sellerProducts: [
                {
                    id: "PRD12345",
                    name: "Nike Air Max Running Shoes",
                    category: "Men Footwear",
                    price: 4999,
                    status: "Pending"
                },
                {
                    id: "PRD12350",
                    name: "Adidas Backpack",
                    category: "Bags & Backpacks",
                    price: 1999,
                    status: "Rejected"
                }
            ]
        },


        {
            id: "SEL003",
            name: "Tech World",
            website: "techworld.com",
            email: "seller@techworld.com",
            mobile: "9176543212",
            products: 156,
            orders: 845,
            status: "Active",

            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZYpwGJ84RnBqbWze9ll1UGOVtrkpVuxykiiebkEfwg&s=10",

            sellerProducts: [
                {
                    id: "PRD12348",
                    name: "Samsung Galaxy Watch 6",
                    category: "Electronics",
                    price: 24999,
                    status: "Pending"
                }
            ]
        },


        {
            id: "SEL004",
            name: "Beauty Glam",
            website: "beautyglam.com",
            email: "info@beautyglam.com",
            mobile: "9216543213",
            products: 178,
            orders: 1012,
            status: "Inactive",

            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdQSSTWqy26Gy2aRWSBiU6qZMowvZ6PPElpQw_njdWdaoGkZSn04-pcU&s=10",

            sellerProducts: [
                {
                    id: "PRD12347",
                    name: "Colorbar Matte Lipstick",
                    category: "Beauty",
                    price: 650,
                    status: "Pending"
                }
            ]
        },


        {
            id: "SEL005",
            name: "Denim Store",
            website: "denimstore.com",
            email: "contact@denimstore.com",
            mobile: "9432543214",
            products: 220,
            orders: 1502,
            status: "Active",

            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCME_AwU7ikvCz-ZcSyCJHUCaBMYScnVI_bvJM8XOtzk3QX8h1AIp02Wo&s=10",

            sellerProducts: [
                {
                    id: "PRD12349",
                    name: "Levi's 511 Slim Jeans",
                    category: "Men Clothing",
                    price: 2599,
                    status: "Approved"
                }
            ]
        }

    ];


    // =========================================
    // FIND DEFAULT SELLER
    // =========================================

    const originalSeller = sellers.find(
        (item) => item.id === sellerId
    );


    // =========================================
    // GET ADMIN EDITED SELLERS
    // =========================================

    const adminEditedSellers =
        JSON.parse(
            localStorage.getItem("adminEditedSellers")
        ) || [];


    // =========================================
    // FIND SAVED EDITED SELLER
    // =========================================

    const savedEditedSeller =
        adminEditedSellers.find(
            (item) => item.id === sellerId
        );


    // =========================================
    // MERGE DEFAULT + EDITED SELLER
    // =========================================

    const seller = originalSeller
        ? {
            ...originalSeller,
            ...savedEditedSeller
        }
        : null;


    // =========================================
    // EDIT SELLER FORM STATES
    // =========================================

    const [sellerName, setSellerName] = useState(
        seller?.name || ""
    );

    const [sellerEmail, setSellerEmail] = useState(
        seller?.email || ""
    );

    const [sellerMobile, setSellerMobile] = useState(
        seller?.mobile || ""
    );

    const [sellerWebsite, setSellerWebsite] = useState(
        seller?.website || ""
    );

    const [sellerStatus, setSellerStatus] = useState(
        seller?.status || "Active"
    );


    // =========================================
    // UPDATE SELLER
    // =========================================

    const handleUpdateSeller = () => {

        const updatedSeller = {
            id: seller.id,
            name: sellerName.trim(),
            email: sellerEmail.trim(),
            mobile: sellerMobile.trim(),
            website: sellerWebsite.trim(),
            status: sellerStatus
        };


        const existingEditedSellers =
            JSON.parse(
                localStorage.getItem(
                    "adminEditedSellers"
                )
            ) || [];


        const sellerAlreadyEdited =
            existingEditedSellers.some(
                (item) =>
                    item.id === seller.id
            );


        let updatedEditedSellers;


        if (sellerAlreadyEdited) {

            updatedEditedSellers =
                existingEditedSellers.map(
                    (item) =>
                        item.id === seller.id
                            ? updatedSeller
                            : item
                );

        } else {

            updatedEditedSellers = [
                ...existingEditedSellers,
                updatedSeller
            ];

        }


        localStorage.setItem(
            "adminEditedSellers",
            JSON.stringify(
                updatedEditedSellers
            )
        );


        navigate(
            `/admin/sellers/${seller.id}`
        );

    };


    // =========================================
    // SELLER NOT FOUND
    // =========================================

    if (!seller) {

        return (

            <div className="admin-seller-details-page">

                <h2>Seller not found.</h2>

                <button
                    type="button"
                    onClick={() =>
                        navigate("/admin/sellers")
                    }
                >
                    Back to Sellers
                </button>

            </div>

        );

    }


    return (

        <div className="admin-seller-details-page">


            {/* =========================================
                BACK BUTTON
            ========================================= */}

            <button
                type="button"
                className="admin-seller-details-back-btn"
                onClick={() =>
                    navigate("/admin/sellers")
                }
            >

                <span className="material-symbols-outlined">
                    arrow_back
                </span>

                Back to Sellers

            </button>


            {/* =========================================
                SELLER HEADER
            ========================================= */}

            <div className="admin-seller-details-header">

                <div className="admin-seller-details-profile">


                    {/* SELLER IMAGE */}

                    <div className="admin-seller-details-avatar">

                        <img
                            src={seller.image}
                            alt={seller.name}

                            onError={(e) => {

                                e.currentTarget.style.display =
                                    "none";

                            }}
                        />

                    </div>


                    {/* SELLER NAME */}

                    <div>

                        <h1>
                            {seller.name}
                        </h1>

                        <p>
                            Seller ID: {seller.id}
                        </p>

                    </div>

                </div>


                {/* STATUS */}

                <span
                    className={`admin-seller-details-status ${seller.status.toLowerCase()}`}
                >
                    {seller.status}
                </span>

            </div>


            {/* =========================================
                EDIT SELLER FORM
            ========================================= */}

            {isEditMode && (

                <div className="admin-seller-edit-form-card">

                    <h2>
                        Edit Seller Information
                    </h2>


                    <div className="admin-seller-edit-form-grid">


                        {/* SELLER NAME */}

                        <div className="admin-seller-edit-form-field">

                            <label>
                                Seller Name
                            </label>

                            <input
                                type="text"
                                value={sellerName}
                                onChange={(e) =>
                                    setSellerName(
                                        e.target.value
                                    )
                                }
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="admin-seller-edit-form-field">

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                value={sellerEmail}
                                onChange={(e) =>
                                    setSellerEmail(
                                        e.target.value
                                    )
                                }
                            />

                        </div>


                        {/* MOBILE */}

                        <div className="admin-seller-edit-form-field">

                            <label>
                                Mobile
                            </label>

                            <input
                                type="text"
                                value={sellerMobile}
                                onChange={(e) =>
                                    setSellerMobile(
                                        e.target.value
                                    )
                                }
                            />

                        </div>


                        {/* WEBSITE */}

                        <div className="admin-seller-edit-form-field">

                            <label>
                                Website
                            </label>

                            <input
                                type="text"
                                value={sellerWebsite}
                                onChange={(e) =>
                                    setSellerWebsite(
                                        e.target.value
                                    )
                                }
                            />

                        </div>


                        {/* ACCOUNT STATUS */}

                        <div className="admin-seller-edit-form-field">

                            <label>
                                Account Status
                            </label>

                            <select
                                value={sellerStatus}
                                onChange={(e) =>
                                    setSellerStatus(
                                        e.target.value
                                    )
                                }
                            >

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* =========================================
                        EDIT FORM BUTTONS
                    ========================================= */}

                    <div className="admin-seller-edit-form-actions">


                        <button
                            type="button"
                            className="admin-seller-edit-cancel-btn"
                            onClick={() =>
                                navigate(
                                    `/admin/sellers/${seller.id}`
                                )
                            }
                        >
                            Cancel
                        </button>


                        <button
                            type="button"
                            className="admin-seller-update-btn"
                            onClick={handleUpdateSeller}
                        >
                            Update Seller
                        </button>


                    </div>

                </div>

            )}


            {/* =========================================
                NORMAL SELLER DETAILS
                ONLY SHOW WHEN NOT EDITING
            ========================================= */}

            {!isEditMode && (

                <>


                    {/* =========================================
                        SELLER INFORMATION
                    ========================================= */}

                    <div className="admin-seller-details-card">

                        <h2>
                            Seller Information
                        </h2>


                        <div className="admin-seller-details-info-grid">


                            <div className="admin-seller-details-info-item">

                                <span>
                                    Email
                                </span>

                                <strong>
                                    {seller.email}
                                </strong>

                            </div>


                            <div className="admin-seller-details-info-item">

                                <span>
                                    Mobile
                                </span>

                                <strong>
                                    +91 {seller.mobile}
                                </strong>

                            </div>


                            <div className="admin-seller-details-info-item">

                                <span>
                                    Website
                                </span>

                                <strong>
                                    {seller.website}
                                </strong>

                            </div>


                            <div className="admin-seller-details-info-item">

                                <span>
                                    Total Products
                                </span>

                                <strong>
                                    {seller.products}
                                </strong>

                            </div>


                            <div className="admin-seller-details-info-item">

                                <span>
                                    Total Orders
                                </span>

                                <strong>
                                    {seller.orders.toLocaleString(
                                        "en-IN"
                                    )}
                                </strong>

                            </div>


                            <div className="admin-seller-details-info-item">

                                <span>
                                    Account Status
                                </span>

                                <strong>
                                    {seller.status}
                                </strong>

                            </div>

                        </div>

                    </div>


                    {/* =========================================
                        SELLER PRODUCTS
                    ========================================= */}

                    <div className="admin-seller-products-card">

                        <div className="admin-seller-products-heading">

                            <div>

                                <h2>
                                    Seller Products
                                </h2>

                                <p>
                                    Products listed by {seller.name}
                                </p>

                            </div>

                            <span>
                                {seller.sellerProducts.length} Products
                            </span>

                        </div>


                        <div className="admin-seller-products-table-wrapper">

                            <table className="admin-seller-products-table">

                                <thead>

                                    <tr>

                                        <th>
                                            Product
                                        </th>

                                        <th>
                                            Product ID
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

                                    </tr>

                                </thead>


                                <tbody>

                                    {seller.sellerProducts.map(
                                        (product) => (

                                            <tr key={product.id}>

                                                <td>
                                                    {product.name}
                                                </td>

                                                <td>
                                                    {product.id}
                                                </td>

                                                <td>
                                                    {product.category}
                                                </td>

                                                <td>
                                                    ₹
                                                    {product.price.toLocaleString(
                                                        "en-IN"
                                                    )}
                                                </td>

                                                <td>

                                                    <span
                                                        className={`admin-seller-product-status ${product.status.toLowerCase()}`}
                                                    >
                                                        {product.status}
                                                    </span>

                                                </td>

                                            </tr>

                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>


                    {/* =========================================
                        EDIT SELLER BUTTON
                    ========================================= */}

                    <div className="admin-seller-edit-action">

                        <button
                            type="button"
                            className="admin-seller-edit-btn"
                            onClick={() =>
                                navigate(
                                    `/admin/sellers/${seller.id}/edit`
                                )
                            }
                        >
                            Edit Seller
                        </button>

                    </div>


                </>

            )}


        </div>

    );

};


export default AdminSellerDetails;