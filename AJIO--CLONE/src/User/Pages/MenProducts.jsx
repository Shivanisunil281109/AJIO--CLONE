// import React from "react";
import React, { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import { useNavigate } from "react-router";
import "../CSS/MenProducts.css";
import ProductCard from "../Components/ProductCard";
import products from "../Data/productData";

const MenProducts = () => {
  const navigate = useNavigate();

  const [sellerProducts, setSellerProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const [filteredSellerProducts, setFilteredSellerProducts] = useState([]);

  const [filteredStaticProducts, setFilteredStaticProducts] = useState(products);


  const [category, setCategory] = useState([]);

  const [filteredCategory, setFilteredCategory] = useState("all");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [showPriceFilter, setShowPriceFilter] = useState(false);

  const convertToCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const filterProductWithCategory = (selectedCategory) => {
    if (selectedCategory === "all") {
      setFilteredSellerProducts(sellerProducts);
    } else {
      const filtered = sellerProducts.filter(
        (product) => convertToCapitalize(product.category) === selectedCategory,
      );

      setFilteredSellerProducts(filtered);
    }
  };

  
  const filterProductsByPrice = (min, max) => {
  const filtered = sellerProducts.filter((product) => {
    const matchesCategory =
      filteredCategory === "all" ||
      convertToCapitalize(product.category) === filteredCategory;

    const price = Number(
      String(product.price).replace(/[^\d.]/g, "")
    );

    const matchesMin = min === "" || price >= Number(min);
    const matchesMax = max === "" || price <= Number(max);

    return matchesCategory && matchesMin && matchesMax;
  });

  setFilteredSellerProducts(filtered);

  const filteredStatic = products.filter((product) => {
    const matchesCategory =
      filteredCategory === "all" ||
      filteredCategory === "Clothing";

    const price = Number(
      String(product.price).replace(/[^\d.]/g, "")
    );

    const matchesMin = min === "" || price >= Number(min);
    const matchesMax = max === "" || price <= Number(max);

    return matchesCategory && matchesMin && matchesMax;
  });

  setFilteredStaticProducts(filteredStatic);
};



  const getSellerProducts = async () => {
    try {
      const response = await api.get("/user/products");

      if (response.data.success) {
        setSellerProducts(response.data.products);

        setFilteredSellerProducts(response.data.products);

        const uniqueCategories = [
          ...new Set(
            response.data.products.map((product) =>
              convertToCapitalize(product.category),
            ),
          ),
        ];

        setCategory(uniqueCategories);

        console.log("Backend Categories:", uniqueCategories);
      }
    } catch (error) {
      console.log("Error fetching seller products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSellerProducts();
  }, []);

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

          <p className="more-link" onClick={() => setShowMoreCategories(true)}>
            MORE
          </p>

          {showMoreCategories && (
            <div className="more-categories-dropdown">
              <select
                defaultValue="all"
                onChange={(e) => {
                  setFilteredCategory(e.target.value);
                  filterProductWithCategory(e.target.value);
                }}
              >
                <option value="all">All Categories</option>

                {category.map((cat) => (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="filter-box collapsed-filter">
          <div
            className="collapsed-title"
            onClick={() => setShowPriceFilter(!showPriceFilter)}
          >
            <span>{showPriceFilter ? "-" : "+"}</span>
            <h3>Price</h3>
          </div>

          {showPriceFilter && (
            <div className="price-filter-content">
              <label>
                Min Price (₹)
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMinPrice(value);
                    filterProductsByPrice(value, maxPrice);
                  }}
                />
              </label>

              <label>
                Max Price (₹)
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMaxPrice(value);
                    filterProductsByPrice(minPrice, value);
                  }}
                />
              </label>
            </div>
          )}
        </div>
        {/* ================= COLLAPSED FILTERS ================= */}

        {[
          //   "Price",
          "Brands",
          "Occasion",
          "Discount Ranges",
          "Colours",
          "Size & Fit",
          "Rating",
        ].map((filter) => (
          <div className="filter-box collapsed-filter" key={filter}>
            <div className="collapsed-title">
              <span>+</span>

              <h3>{filter}</h3>
            </div>
          </div>
        ))}

        {/* ================= MORE FILTERS ================= */}

        <div className="more-filter-title">
          <h3>More Filters</h3>

          <span>^</span>
        </div>

        <p>Please select upto 3 categories to view more filters</p>

        <button className="select-category-btn">SELECT CATEGORY</button>
      </div>

      {/* ================= RIGHT PRODUCT SECTION ================= */}

      <div className="products-section">
        {/* Heading */}

        <div className="products-header">
          <h1>Clothing</h1>
        </div>

        {/* ================= TOOLBAR ================= */}

        <div className="products-toolbar">
          <div className="items-found">
            <strong>661,880</strong> Items Found
          </div>

          <div className="grid-view">
            <span>GRID</span>

            <div className="grid-icons">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="sort-box">
            <label>SORT BY</label>

            <select>
              <option>Relevance</option>

              <option>Discount</option>

              <option>Price (lowest first)</option>

              <option>What's New</option>

              <option>Ratings</option>
            </select>
          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        {(filteredCategory === "Clothing" || filteredCategory === "all") && (
          <div className="products-grid">
       {filteredStaticProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/single-product/${product.id}`)}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        <div className="seller-products-grid">
          {filteredSellerProducts.map((product) => (
            <div
              className="seller-product-item"
              key={product._id}
              onClick={() => navigate(`/single-product/${product._id}`)}
            >
              <ProductCard
                product={{
                  id: product._id,
                  name: product.name,
                  brand: product.brand || "Seller Product",
                  image: product.image,
                  price: `₹${product.price}`,
                  oldPrice: "",
                  discount: "",
                  offer: "",
                  rating: "",
                  reviews: "",
                  tag: "",
                  category: product.category,
                  isSellerProduct: true,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MenProducts;
