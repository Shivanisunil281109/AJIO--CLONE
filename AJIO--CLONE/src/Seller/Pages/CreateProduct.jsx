import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import api from "../../config/axiosConfig";
import "../CSS/Create-product.css";

const CreateProduct = () => {
const dispatch = useDispatch();
const [productName, setProductName] = useState("");

    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [mfgPrice, setMfgPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Active");
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    // =========================================
    // IMAGE CHANGE
    // =========================================

   

    // =========================================
    // SUBMIT PRODUCT
    // =========================================

    const handleSubmitProduct = async () => {

        // Check empty fields
        if (
            !productName.trim() ||
            !category ||
            !brand ||
            sellingPrice === "" ||
            mfgPrice === "" ||
            stock === "" ||
            !description.trim()
        ) {
            
            dispatch(
    showToast({
        message: "❌ Please fill all product fields.",
        type: "error"
    })
);

            return;
        }


        // Check image
        if (!image) {
            
            dispatch(
    showToast({
        message: "❌ Please select a product image.",
        type: "error"
    })
);
            return;
        }


        // Price validation
        if (
            Number(sellingPrice) <= 0 ||
            Number(mfgPrice) <= 0
        ) {
            dispatch(
    showToast({
        message: "❌ Product price must be greater than 0.",
        type: "error"
    })
);
            return;
        }


        // Stock validation
        if (Number(stock) < 0) {
            dispatch(
    showToast({
        message: "❌ Stock cannot be negative.",
        type: "error"
    })
);
            return;
        }


        const newProduct = {

            id: Date.now(),

            name: productName.trim(),

            category: category,

            brand: brand,

            sellingPrice: Number(sellingPrice),

            mfgPrice: Number(mfgPrice),

            price: Number(sellingPrice),

            stock: Number(stock),

            description: description.trim(),

            productStatus: status,

            status: "Pending",

            image: image
        };




       
try {
    const response = await api.post("/seller/create-product", {
        name: productName.trim(),
        category: category.toLowerCase(),
        description: description.trim(),
        image: image,
        price: Number(sellingPrice),
        stock: Number(stock)
    });

    if (response.data.success) {
        dispatch(
            showToast({
                message: "✅ Product created successfully!",
                type: "success"
            })
        );
    }

} catch (error) {
    console.error("Error creating product:", error);

    dispatch(
        showToast({
            message:
                error.response?.data?.message ||
                "❌ Product could not be saved.",
            type: "error"
        })
    );
}




    };



    const handleReset = () => {

    setProductName("");
    setCategory("");
    setBrand("");
    setSellingPrice("");
    setMfgPrice("");
    setStock("");
    setDescription("");
    setStatus("Active");
    setImage("");
    setImageUrl("");
};

    return (

        <section className="dashboard-content create-product-page">


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
                            value={productName}
                            onChange={(e) =>
                                setProductName(e.target.value)
                            }
                        />

                    </div>


                    {/* Category */}

                    <div className="form-group">

                        <label htmlFor="category">
                            Category
                        </label>

                        <select
                            id="category"
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        >

                            <option value="" disabled>
                                Select Category
                            </option>

                            <option value="Clothing">
                                Clothing
                            </option>

                            <option value="Footwear">
                                Footwear
                            </option>

                            <option value="Electronics">
                                Electronics
                            </option>

                        </select>

                    </div>


                    {/* Brand */}

                    <div className="form-group">

                        <label htmlFor="brand">
                            Brand
                        </label>

                        <select
                            id="brand"
                            value={brand}
                            onChange={(e) =>
                                setBrand(e.target.value)
                            }
                        >

                            <option value="" disabled>
                                Select Brand
                            </option>

                            <option value="Nike">
                                Nike
                            </option>

                            <option value="Puma">
                                Puma
                            </option>

                            <option value="Adidas">
                                Adidas
                            </option>

                            <option value="US Polo">
                                US Polo
                            </option>

                            <option value="Levis">
                                Levis
                            </option>

                            <option value="Buda Jeans Co.">
                                Buda Jeans Co.
                            </option>

                            <option value="AJIO">
                                AJIO
                            </option>

                        </select>

                    </div>


                    {/* Price Section */}

                    <div className="create-price-row">


                        {/* Selling Price */}

                        <div className="form-group">

                            <label htmlFor="selling-price">
                                Selling Price (₹)
                            </label>

                            <input
                                type="number"
                                id="selling-price"
                                placeholder="Enter selling price"
                                value={sellingPrice}
                                onChange={(e) =>
                                    setSellingPrice(e.target.value)
                                }
                            />

                        </div>


                        {/* MFG Price */}

                        <div className="form-group">

                            <label htmlFor="mfg-price">
                                MFG Price (₹)
                            </label>

                            <input
                                type="number"
                                id="mfg-price"
                                placeholder="Enter MFG price"
                                value={mfgPrice}
                                onChange={(e) =>
                                    setMfgPrice(e.target.value)
                                }
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
                            value={stock}
                            onChange={(e) =>
                                setStock(e.target.value)
                            }
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
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
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

                            {image ? (

                                <img
                                    src={image}
                                    alt="Product Preview"
                                    className="product-image-preview"
                                />

                            ) : (

                                <>

                                    <span className="material-symbols-outlined upload-icon">
                                        cloud_upload
                                    </span>

                                    <p className="upload-title">
                                        Enter Product Image URL
                                    </p>

                                    <p className="upload-subtitle">
                                   Paste a direct link to your product image
                                    </p>

                                </>

                            )}


                            {/* Custom Choose File Button */}


                          
<input
    type="url"
    placeholder="Enter product image URL"
    value={imageUrl}
    onChange={(e) => {
        setImageUrl(e.target.value);
        setImage(e.target.value);
    }}
/>






                            {/* Hidden Original File Input */}


                        </div>

                    </div>


                    {/* Product Status */}

                    <div className="status-box">

                        <label htmlFor="status">
                            Product Status
                        </label>


                        <select
                            id="status"
                            value={status}
                            onChange={(e) =>
                                setStatus(e.target.value)
                            }
                        >

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
    type="button"
    className="reset-btn"
    onClick={handleReset}
>
    Reset
</button>


                        <button
                            type="button"
                            className="submit-btn"
                            onClick={handleSubmitProduct}
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