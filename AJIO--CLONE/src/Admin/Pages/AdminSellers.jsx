import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../CSS/Admin-sellers.css";


const AdminSellers = () => {

    // =========================================
    // NAVIGATION
    // =========================================

    const navigate = useNavigate();


    // =========================================
    // SEARCH STATE
    // =========================================

    const [searchTerm, setSearchTerm] = useState("");


    // =========================================
    // STATUS FILTER STATE
    // =========================================

    const [statusFilter, setStatusFilter] =
        useState("All Status");


    // =========================================
    // DEFAULT SELLER DATA
    // =========================================

    const defaultSellers = [

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
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHlWi2Wr7HCRgyi4w3jHkd3dYr8BDc44YX4tLtTrlYc3udAjGHgP8jDA&s=10"
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
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmp32p40FIxW-NY1qr1_BvAkktmWKjN0X93Dn0B28gg&s"
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
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZYpwGJ84RnBqbWze9ll1UGOVtrkpVuxykiiebkEfwg&s=10"
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
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdQSSTWqy26Gy2aRWSBiU6qZMowvZ6PPElpQw_njdWdaoGkZSn04-pcU&s=10"
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
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCME_AwU7ikvCz-ZcSyCJHUCaBMYScnVI_bvJM8XOtzk3QX8h1AIp02Wo&s=10"
        }

    ];


    // =========================================
    // GET ADMIN EDITED SELLERS
    // =========================================

    const adminEditedSellers =
        JSON.parse(
            localStorage.getItem("adminEditedSellers")
        ) || [];


    // =========================================
    // MERGE DEFAULT + EDITED SELLERS
    // =========================================

    const sellers = defaultSellers.map(
        (seller) => {

            const editedSeller =
                adminEditedSellers.find(
                    (item) =>
                        item.id === seller.id
                );


            return editedSeller
                ? {
                    ...seller,
                    ...editedSeller
                }
                : seller;

        }
    );


    // =========================================
    // SEARCH + STATUS FILTER FUNCTIONALITY
    // =========================================

    const filteredSellers = sellers.filter((seller) => {

        const searchValue = searchTerm
            .trim()
            .toLowerCase();


        // =========================================
        // SEARCH CONDITION
        // =========================================

        const matchesSearch = (

            seller.name
                .toLowerCase()
                .includes(searchValue)

            ||

            seller.id
                .toLowerCase()
                .includes(searchValue)

            ||

            seller.email
                .toLowerCase()
                .includes(searchValue)

            ||

            seller.mobile
                .includes(searchValue)

            ||

            seller.website
                .toLowerCase()
                .includes(searchValue)

        );


        // =========================================
        // STATUS CONDITION
        // =========================================

        const matchesStatus = (

            statusFilter === "All Status"

            ||

            seller.status === statusFilter

        );


        // =========================================
        // BOTH CONDITIONS
        // =========================================

        return matchesSearch && matchesStatus;

    });


    return (

        <div className="admin-sellers-page">


            {/* =========================================
                PAGE HEADER
            ========================================= */}

            <div className="admin-sellers-heading">

                <div>

                    <h1>
                        All Sellers
                    </h1>

                    <p>
                        View and manage all registered sellers.
                    </p>

                </div>


                <div className="admin-sellers-count">

                    Total Sellers

                    <strong>
                        {sellers.length}
                    </strong>

                </div>

            </div>


            {/* =========================================
                SEARCH + FILTER SECTION
            ========================================= */}

            <div className="admin-sellers-toolbar">


                {/* =========================================
                    SEARCH BOX
                ========================================= */}

                <div className="admin-sellers-search-box">

                    <span className="material-symbols-outlined">
                        search
                    </span>

                    <input
                        type="text"
                        placeholder="Search seller..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                    />

                </div>


                {/* =========================================
                    STATUS FILTER
                ========================================= */}

                <div className="admin-sellers-filter-box">

                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(e.target.value)
                        }
                    >

                        <option value="All Status">
                            All Status
                        </option>

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
                SELLERS TABLE
            ========================================= */}

            <div className="admin-sellers-table-card">

                <div className="admin-sellers-table-wrapper">

                    <table className="admin-sellers-table">

                        <thead>

                            <tr>

                                <th>
                                    Seller
                                </th>

                                <th>
                                    Seller ID
                                </th>

                                <th>
                                    Email
                                </th>

                                <th>
                                    Mobile
                                </th>

                                <th>
                                    Products
                                </th>

                                <th>
                                    Orders
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

                            {filteredSellers.map((seller) => (

                                <tr key={seller.id}>


                                    {/* =========================================
                                        SELLER IMAGE + NAME
                                    ========================================= */}

                                    <td>

                                        <div className="admin-seller-info">


                                            {/* SELLER IMAGE */}

                                            <div className="admin-seller-avatar">

                                                <img
                                                    src={seller.image}
                                                    alt={seller.name}
                                                    className="admin-seller-image"

                                                    onError={(e) => {

                                                        e.currentTarget.style.display =
                                                            "none";

                                                        e.currentTarget
                                                            .nextElementSibling
                                                            .style.display =
                                                            "flex";

                                                    }}
                                                />


                                                {/* FALLBACK ICON */}

                                                <span
                                                    className="material-symbols-outlined admin-seller-fallback-icon"
                                                    style={{
                                                        display: "none"
                                                    }}
                                                >
                                                    storefront
                                                </span>

                                            </div>


                                            {/* SELLER NAME */}

                                            <div>

                                                <strong>
                                                    {seller.name}
                                                </strong>

                                                <span>
                                                    {seller.website}
                                                </span>

                                            </div>

                                        </div>

                                    </td>


                                    {/* =========================================
                                        SELLER ID
                                    ========================================= */}

                                    <td>

                                        {seller.id}

                                    </td>


                                    {/* =========================================
                                        EMAIL
                                    ========================================= */}

                                    <td>

                                        {seller.email}

                                    </td>


                                    {/* =========================================
                                        MOBILE
                                    ========================================= */}

                                    <td>

                                        +91 {seller.mobile}

                                    </td>


                                    {/* =========================================
                                        PRODUCTS
                                    ========================================= */}

                                    <td>

                                        {seller.products}

                                    </td>


                                    {/* =========================================
                                        ORDERS
                                    ========================================= */}

                                    <td>

                                        {seller.orders.toLocaleString(
                                            "en-IN"
                                        )}

                                    </td>


                                    {/* =========================================
                                        STATUS
                                    ========================================= */}

                                    <td>

                                        <span
                                            className={`admin-seller-status ${seller.status.toLowerCase()}`}
                                        >

                                            {seller.status}

                                        </span>

                                    </td>


                                    {/* =========================================
                                        ACTION
                                    ========================================= */}

                                    <td>

                                        <button
                                            type="button"
                                            className="admin-seller-view-btn"

                                            onClick={() =>
                                                navigate(
                                                    `/admin/sellers/${seller.id}`
                                                )
                                            }
                                        >

                                            View

                                        </button>

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


export default AdminSellers;