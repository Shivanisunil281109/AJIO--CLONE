import React from "react";
import "../CSS/Create-product.css";

const CreateProduct = () => {
    return (
        <section className="dashboard-content">

            {/* =========================
                PAGE HEADING
            ========================== */}

            <h1 className="page-title">
                Create Product
            </h1>


            {/* =========================
                MAIN CONTAINER
            ========================== */}

            <div className="create-product-container">

                {/* =========================
                    LEFT SIDE - PRODUCT FORM
                ========================== */}

                <div className="product-form">

                    <h2 className="form-heading">
                        Product Information
                    </h2>


                    {/* Product Name */}

                    <div className="form-group">

                        <label htmlFor="product-name">
                            Product Name
                        </label>

                        <input
                            type="text"
                            id="product-name"
                            placeholder="Enter Product Name"
                        />

                    </div>


                    {/* Category */}

                    <div className="form-group">

                        <label htmlFor="category">
                            Category
                        </label>

                        <select id="category">

                            <option value="" disabled>
                                Select Category
                            </option>

                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Home & Kitchen">
                                Home & Kitchen
                            </option>
                            <option value="Accessories">
                                Accessories
                            </option>
                            <option value="Footwear">
                                Footwear
                            </option>

                        </select>

                    </div>


                    {/* Brand */}

                    <div className="form-group">

                        <label htmlFor="brand">
                            Brand
                        </label>

                        <select id="brand">

                            <option value="" disabled>
                                Select Brand
                            </option>

                            <option value="Nike">Nike</option>
                            <option value="Puma">Puma</option>
                            <option value="Adidas">Adidas</option>
                            <option value="US Polo">US Polo</option>
                            <option value="Levis">Levis</option>
                            <option value="Buda Jeans Co.">
                                Buda Jeans Co.
                            </option>
                            <option value="AJIO">AJIO</option>

                        </select>

                    </div>


                    {/* Price Section */}

                    <div className="price-row">

                        {/* Selling Price */}

                        <div className="form-group">

                            <label htmlFor="selling-price">
                                Selling Price (₹)
                            </label>

                            <input
                                type="number"
                                id="selling-price"
                                placeholder="Enter selling price"
                            />

                        </div>


                        {/* Discount Price */}

                        <div className="form-group">

                            <label htmlFor="discount-price">
                                Discount Price (₹)
                            </label>

                            <input
                                type="number"
                                id="discount-price"
                                placeholder="Enter discount price"
                            />

                        </div>

                    </div>


                    {/* Stock Quantity */}

                    <div className="form-group">

                        <label htmlFor="stock">
                            Stock Quantity
                        </label>

                        <input
                            type="number"
                            id="stock"
                            placeholder="Enter stock quantity"
                        />

                    </div>


                    {/* Description */}

                    <div className="form-group">

                        <label>
                            Description
                        </label>


                        {/* Toolbar */}

                        <div className="editor-toolbar">

                            <button type="button">
                                <b>B</b>
                            </button>

                            <button type="button">
                                <i>I</i>
                            </button>

                            <button type="button">
                                <u>U</u>
                            </button>

                            <button type="button">
                                •
                            </button>

                            <button type="button">
                                1.
                            </button>

                            <button type="button">
                                🔗
                            </button>

                        </div>


                        {/* Description */}

                        <textarea
                            placeholder="Enter product description"
                        ></textarea>

                    </div>

                </div>


                {/* =========================
                    RIGHT SIDE - UPLOAD
                ========================== */}

                <div className="product-upload">


                    {/* Product Images */}

                    <div className="upload-section">

                        <h3>
                            Product Images
                        </h3>

                        <div className="upload-box">

                            <span className="material-symbols-outlined upload-icon">
                                cloud_upload
                            </span>

                            <p className="upload-title">
                                Click to upload images
                            </p>

                            <p className="upload-subtitle">
                                or drag and drop
                            </p>

                            <small>
                                (Max 5 images)
                            </small>

                            <input
                                type="file"
                                multiple
                                hidden
                            />

                        </div>

                    </div>


                    {/* Product Status */}

                    <div className="status-box">

                        <label htmlFor="status">
                            Product Status
                        </label>

                        <select id="status">

                            <option value="Active">
                                Active
                            </option>

                            <option value="Inactive">
                                Inactive
                            </option>

                            <option value="Out of Stock">
                                Out of Stock
                            </option>

                        </select>

                    </div>


                    {/* Action Buttons */}

                    <div className="action-buttons">

                        <button
                            type="reset"
                            className="reset-btn"
                        >
                            Reset
                        </button>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            Submit Product
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CreateProduct;