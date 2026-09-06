import React from "react";
import { useNavigate } from "react-router";
import "../CSS/SellerProducts.css";




const SellerProducts = () => {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Men Casual Shirt",
      category: "Clothing",
      price: 999,
      stock: 20,
      status: "Approved",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      category: "Clothing",
      price: 1499,
      stock: 15,
      status: "Pending",
    },
    {
      id: 3,
      name: "Running Sneakers",
      category: "Footwear",
      price: 1999,
      stock: 8,
      status: "Approved",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      stock: 0,
      status: "Not Approved",
    },
  ];

  return (
    <div className="seller-products-page">

      {/* Main Content */}
      <main className="seller-products-content">

        {/* Page Header */}
        <div className="seller-products-header">
          <h1>All Products</h1>
        </div>

        {/* Products Section */}
        <div className="seller-products-card">

          <div className="products-card-header">
            <h2>My Products</h2>
          </div>

          {/* Products Table */}
          <div className="products-table-container">
            <table className="products-table">

              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Selling Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>

                    <td>{product.name}</td>

                    <td>{product.category}</td>

                    <td>₹{product.price}</td>

                    <td>{product.stock}</td>

                    <td>
                      <span
                        className={`product-status ${product.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {product.status}
                      </span>
                    </td>

                    <td>

                     <button
  className="view-product-btn"
  onClick={() => navigate(`/seller/products/${product.id}`)}
>    
  View
</button>



<button
  className="edit-product-btn"
  onClick={() => navigate(`/seller/products/${product.id}/edit`)}
>
  Edit
</button>




                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>

      </main>

    </div>
  );
};

export default SellerProducts;