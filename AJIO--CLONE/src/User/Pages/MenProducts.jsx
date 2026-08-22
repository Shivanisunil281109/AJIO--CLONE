import React from "react";
import { useNavigate } from "react-router";
import "../CSS/MenProducts.css";
import ProductCard from "../Components/ProductCard";



  const MenProducts = () => {

    const navigate = useNavigate();

    const products = [

        // Product 1
        {
            id: 1,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260526/Nn9M/6a15a4e6fcb5bb61d2ea6d06/buda_jeans_co_pink_men_checked_regular_fit_shirt_with_patch_pocket.jpg",
            tag: "NEW",
            brand: "Buda Jeans Co",
            name: "Men Checked Regular Fit Shirt with Pocket",
            rating: "2.5",
            reviews: "101",
            price: "₹494",
            oldPrice: "₹2,599",
            discount: "(81% Off)",
            offer: "Offer Price: ₹432"
        },

        // Product 2
        {
            id: 2,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260527/S7bd/6a16deb2fcb5bb61d2ecfd2d/dnmx_blue_men_graphic_print_regular_fit_crew-neck_t-shirt.jpg",
            tag: "NEW",
            brand: "DNMX",
            name: "Men Graphic Print Regular Fit Crew-Neck T-Shirt",
            rating: "4.3",
            reviews: "6",
            price: "₹499",
            oldPrice: "₹999",
            discount: "(50% Off)",
            offer: "Offer Price: ₹349"
        },

        // Product 3
        {
            id: 3,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241206/YmWz/675326fbc148fa1b301fb8e5/thomas_scott_blue_men_striped_round-neck_sweatshirt.jpg",
            tag: "NEW",
            brand: "THOMAS SCOTT",
            name: "Men Striped Round-Neck SweatShirt",
            rating: "3.5",
            reviews: "2",
            price: "₹879",
            oldPrice: "₹3,299",
            discount: "(73% Off)",
            offer: "Offer Price: ₹660"
        },

        // Product 4
        {
            id: 4,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260520/xIws/6a0d9ed9fcb5bb61d2d5b471/buda_jeans_co_black_men_printed_regular_fit_polo_t-shirt.jpg",
            tag: "NEW",
            brand: "Buda Jeans Co",
            name: "Men Printed Regular Fit Polo T-Shirt",
            rating: "3.5",
            reviews: "2",
            price: "₹499",
            oldPrice: "₹999",
            discount: "(50% Off)",
            offer: "Offer Price: ₹349"
        },

        // Product 5
        {
            id: 5,
            image: "https://assets.sheinindia.in/medias/shein_sys_master/root/20250613/gSbf/684bbedd7a6cd4182fa6ef5b/shein_black_shein_oversized_fit_drop_shoulder_typographic_back_and_chest_print_crew_tshirt.jpg",
            tag: "NEW",
            brand: "Shein",
            name: "Shein Oversized Fit Drop Shoulder Typographic Back And Chest Print Crew Tshirt",
            rating: "3.7",
            reviews: "28",
            price: "₹399",
            oldPrice: "₹599",
            discount: "(73% Off)",
            offer: "Offer Price: ₹279"
        },

        // Product 6
        {
            id: 6,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260413/vI8R/69dcd7b5fcb5bb61d25280e8/force_white_men_graphic_print_crew-neck_t-shirt.jpg",
            tag: "NEW",
            brand: "Force",
            name: "Men Graphic Print Crew-Neck T-Shirt",
            rating: "3.1",
            reviews: "28",
            price: "₹400",
            oldPrice: "₹1,999",
            discount: "(80% Off)",
            offer: "Offer Price: ₹350"
        },

        // Product 7
        {
            id: 7,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260520/lF8S/6a0d3eaafcb5bb61d2d3ecc3/dnmx_grey_men_lightly_washed_slim_fit_jeans.jpg",
            tag: "BESTSELLER",
            brand: "DNMX",
            name: "Men Lightly Washed Slim Fit Jeans",
            rating: "3.7",
            reviews: "419",
            price: "₹280",
            oldPrice: "₹799",
            discount: "(65% Off)",
            offer: "Best Price ₹196"
        },

        // Product 8
        {
            id: 8,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250925/9OXF/68d5362a8bfb9009ac361478/neonomad_black_men_mid_rise_fixed_waist_track_pants.jpg",
            tag: "BESTSELLER",
            brand: "NEONOMAD",
            name: "Men Mid Rise Waist Track Pants",
            rating: "3.3",
            reviews: "6.1K",
            price: "₹330",
            oldPrice: "₹1,499",
            discount: "(78% Off)",
            offer: "Offer Price: ₹297"
        },

        // Product 9
        {
            id: 9,
            image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20250923/NPyd/68d1de658bfb9009ac271bf4/shein_beige_shein_straight_fit_full_length_fixed_waist_stone_wash_jeans.jpg",
            tag: "NEW",
            brand: "Shein",
            name: "Shein Straight Fit Length Fixed Waist Stone Wash Jeans",
            rating: "3.3",
            reviews: "9",
            price: "₹1,586",
            oldPrice: "₹2,999",
            discount: "(31% Off)",
            offer: "Offer Price: ₹1,110"
        },

        // Product 10
        {
            id: 10,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230525/nevv/646ee516d55b7d0c63e71781/the_bear_house_beige_%26_white_men_striped_slim_fit_shirt_with_patch_pocket.jpg",
            tag: "NEW",
            brand: "THE BEAR HOUSE",
            name: "Men Striped Fit With Patch Pocket",
            rating: "4.1",
            reviews: "1.1K",
            price: "₹873",
            oldPrice: "₹2,495",
            discount: "(65% Off)",
            offer: "Offer Price: ₹611"
        },

        // Product 11
        {
            id: 11,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260509/A6vj/69ff311efcb5bb61d2b0b282/combraided_x_ag_beige_men_slim_fit_flat-front_trousers.jpg",
            tag: "BESTSELLER",
            brand: "Combraided X AG",
            name: "Men Slim Fit Flat-Front Trousers",
            rating: "2.6",
            reviews: "1.5K",
            price: "₹290",
            oldPrice: "₹999",
            discount: "(71% Off)",
            offer: "Offer Price: ₹203"
        },

        // Product 12
        {
            id: 12,
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260511/dVC0/6a01bbf614d0c21719d11bef/buda_jeans_co_olive_men_regular_fit_polo-neck_t-shirt.jpg",
            tag: "NEW",
            brand: "Buda Jeans Co",
            name: "Men Regular Fit Polo-Neck T-Shirt",
            rating: "2.6",
            reviews: "419",
            price: "₹270",
            oldPrice: "₹999",
            discount: "(73% Off)",
            offer: "Offer Price: ₹200"
        }

    ];

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
            onClick={() => navigate(`/single-product/${product.id}`)}
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