import React from "react";
import "../CSS/SellerProfile.css";

const SellerProfile = () => {

  const seller = {
    name: "Rahul Sharma",
    sellerId: "AJIOSELL12345",
    storeName: "Urban Style Fashion",

    email: "rahul.seller@example.com",
    mobile: "+91 98765 43210",

    totalProducts: 152,
    soldProducts: 98,
    totalOrders: 245,

    businessName: "Urban Style Fashion",
    businessType: "Proprietorship",
    gstNumber: "27ABCDE1234F1Z5",

    city: "Navi Mumbai",
    state: "Maharashtra",
    pincode: "400703",

    status: "Active",
  };

  return (
    <div className="seller-profile-page">

      <main className="seller-profile-content">

        {/* PAGE HEADER */}
        <div className="seller-profile-page-header">

          <div>
            <h1>Seller Profile</h1>
            <p>Manage your seller and business information</p>
          </div>

          <button className="seller-profile-edit-button">
            <span className="material-symbols-outlined">
              edit
            </span>
            Edit Profile
          </button>

        </div>


        {/* PROFILE SUMMARY */}
        <div className="seller-profile-summary-card">

          <div className="seller-profile-summary-left">

            <div className="seller-profile-avatar">
              <span className="material-symbols-outlined">
                account_circle
              </span>
            </div>

            <div className="seller-profile-basic-info">
              <h2>{seller.name}</h2>

              <p className="seller-id">
                Seller ID: {seller.sellerId}
              </p>

              <p>{seller.storeName}</p>

              <span className="seller-active-status">
                {seller.status}
              </span>
            </div>

          </div>


          {/* SELLER STATISTICS */}
          <div className="seller-profile-stats">

            <div className="seller-stat-box">
              <h3>{seller.totalProducts}</h3>
              <p>Total Products</p>
            </div>

            <div className="seller-stat-box">
              <h3>{seller.soldProducts}</h3>
              <p>Sold Products</p>
            </div>

            <div className="seller-stat-box">
              <h3>{seller.totalOrders}</h3>
              <p>Total Orders</p>
            </div>

          </div>

        </div>


        {/* INFORMATION GRID */}
        <div className="seller-profile-info-grid">


          {/* PERSONAL INFORMATION */}
          <div className="seller-profile-info-card">

            <div className="seller-profile-section-title">
              <span className="material-symbols-outlined">
                person
              </span>

              <h2>Personal Information</h2>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                Full Name
              </span>
              <span>{seller.name}</span>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                Email Address
              </span>
              <span>{seller.email}</span>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                Mobile Number
              </span>
              <span>{seller.mobile}</span>
            </div>

          </div>


          {/* BUSINESS INFORMATION */}
          <div className="seller-profile-info-card">

            <div className="seller-profile-section-title">
              <span className="material-symbols-outlined">
                storefront
              </span>

              <h2>Business Information</h2>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                Business Name
              </span>
              <span>{seller.businessName}</span>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                Business Type
              </span>
              <span>{seller.businessType}</span>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                GST Number
              </span>
              <span>{seller.gstNumber}</span>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                Account Status
              </span>

              <span className="seller-active-status">
                {seller.status}
              </span>
            </div>

          </div>


          {/* BUSINESS ADDRESS */}
          <div className="seller-profile-info-card seller-address-card">

            <div className="seller-profile-section-title">
              <span className="material-symbols-outlined">
                location_on
              </span>

              <h2>Business Address</h2>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                City
              </span>
              <span>{seller.city}</span>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                State
              </span>
              <span>{seller.state}</span>
            </div>

            <div className="seller-profile-info-row">
              <span className="seller-profile-label">
                Pincode
              </span>
              <span>{seller.pincode}</span>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default SellerProfile;