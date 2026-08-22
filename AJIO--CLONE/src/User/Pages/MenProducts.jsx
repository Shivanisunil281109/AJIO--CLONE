import React from "react";
import { useNavigate } from "react-router";
import "../CSS/MenProducts.css";
import ProductCard from "../Components/ProductCard";
import products from "../Data/productData";


const MenProducts = () => {

    const navigate = useNavigate();

    return (

        <main className="men-page">

            {/* ================= LEFT FILTER ================= */}

            <div className="filter-section">

                {/* Breadcrumb */}

                <div className="breadcrumb">

                    <a href="/">Home</a>

                    <span>/</span>

                    <span>D2C Fashion</span>

                </div>


                <h2>D2C Fashion</h2>


                {/* ================= SHOP FOR ================= */}

                <div className="filter-box">

                    <h3>Shop For</h3>

                    <label>
                        <input type="checkbox" />
                        Men
                    </label>

                    <label>
                        <input type="checkbox" />
                        Women
                    </label>

                    <label>
                        <input type="checkbox" />
                        Boys
                    </label>

                </div>


                {/* ================= CATEGORY ================= */}

                <div className="filter-box category-box">

                    <div className="filter-heading">

                        <span>-</span>

                        <h3>Category</h3>

                    </div>


                    <label>

                        <input type="checkbox" />

                        Tshirts

                        <span>(103,690)</span>

                    </label>


                    <label>

                        <input type="checkbox" />

                        Shirts

                        <span>(48,150)</span>

                    </label>


                    <label>

                        <input type="checkbox" />

                        Kurtas & Shirts

                        <span>(10,681)</span>

                    </label>


                    <label>

                        <input type="checkbox" />

                        Trousers & Pants

                        <span>(10,163)</span>

                    </label>


                    <label>

                        <input type="checkbox" />

                        Jeans

                        <span>(6,833)</span>

                    </label>


                    <p className="more-link">
                        MORE
                    </p>

                </div>


                {/* ================= COLLAPSED FILTERS ================= */}

                {[
                    "Price",
                    "Brands",
                    "Occasion",
                    "Discount Ranges",
                    "Colours",
                    "Size & Fit",
                    "Rating"
                ].map((filter) => (

                    <div
                        className="filter-box collapsed-filter"
                        key={filter}
                    >

                        <div className="collapsed-title">

                            <span>+</span>

                            <h3>
                                {filter}
                            </h3>

                        </div>

                    </div>

                ))}


                {/* ================= MORE FILTERS ================= */}

                <div className="more-filter-title">

                    <h3>
                        More Filters
                    </h3>

                    <span>
                        ^
                    </span>

                </div>


                <p>
                    Please select upto 3 categories to view more filters
                </p>


                <button className="select-category-btn">

                    SELECT CATEGORY

                </button>

            </div>


            {/* ================= RIGHT PRODUCT SECTION ================= */}

            <div className="products-section">

                {/* Heading */}

                <div className="products-header">

                    <h1>
                        Clothing
                    </h1>

                </div>


                {/* ================= TOOLBAR ================= */}

                <div className="products-toolbar">

                    <div className="items-found">

                        <strong>
                            661,880
                        </strong>

                        {" "}Items Found

                    </div>


                    <div className="grid-view">

                        <span>
                            GRID
                        </span>

                        <div className="grid-icons">

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>

                    </div>


                    <div className="sort-box">

                        <label>
                            SORT BY
                        </label>

                        <select>

                            <option>
                                Relevance
                            </option>

                            <option>
                                Discount
                            </option>

                            <option>
                                Price (lowest first)
                            </option>

                            <option>
                                What's New
                            </option>

                            <option>
                                Ratings
                            </option>

                        </select>

                    </div>

                </div>


                {/* ================= PRODUCT GRID ================= */}

                <div className="products-grid">

                    {products.map((product) => (

                        <div
                            key={product.id}
                            onClick={() =>
                                navigate(`/single-product/${product.id}`)
                            }
                        >

                            <ProductCard product={product} />

                        </div>

                    ))}

                </div>

            </div>

        </main>

    );

};

export default MenProducts;