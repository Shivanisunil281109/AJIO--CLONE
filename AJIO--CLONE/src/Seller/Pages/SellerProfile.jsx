import React, { useState } from "react";
import "../CSS/SellerProfile.css";

const SellerProfile = () => {

  const [seller, setSeller] = useState(() => {

    const savedProfile =
      JSON.parse(localStorage.getItem("sellerProfile"));

    if (savedProfile) {
      return savedProfile;
    }

    return {
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
  });


  const [isEditing, setIsEditing] = useState(false);

  const [originalSeller, setOriginalSeller] = useState(seller);


  // =====================================================
  // EDIT PROFILE
  // =====================================================

  const handleEditProfile = () => {

    setOriginalSeller({
      ...seller
    });

    setIsEditing(true);
  };


  // =====================================================
  // CANCEL EDIT
  // =====================================================

  const handleCancelEdit = () => {

    setSeller({
      ...originalSeller
    });

    setIsEditing(false);
  };


  // =====================================================
  // SAVE PROFILE
  // =====================================================

  const handleSaveProfile = () => {

    // ---------------------------------------------
    // EMPTY FIELD VALIDATION
    // ---------------------------------------------

    if (
      !seller.name.trim() ||
      !seller.email.trim() ||
      !seller.mobile.trim() ||
      !seller.businessName.trim() ||
      !seller.businessType.trim() ||
      !seller.gstNumber.trim() ||
      !seller.city.trim() ||
      !seller.state.trim() ||
      !seller.pincode.trim()
    ) {
      alert("Please fill all required profile fields.");
      return;
    }


    // ---------------------------------------------
    // EMAIL VALIDATION
    // ---------------------------------------------

    if (!seller.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }


    // ---------------------------------------------
    // MOBILE VALIDATION
    // ---------------------------------------------

    const mobileDigits =
      seller.mobile.replace(/\D/g, "");

    if (mobileDigits.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }


    // ---------------------------------------------
    // GST NUMBER VALIDATION
    // ---------------------------------------------

    if (seller.gstNumber.length !== 15) {
      alert(
        "GST Number must contain exactly 15 characters."
      );
      return;
    }


    // ---------------------------------------------
    // PINCODE VALIDATION
    // ---------------------------------------------

    if (!/^\d{6}$/.test(seller.pincode)) {
      alert(
        "Pincode must contain exactly 6 digits."
      );
      return;
    }


    // ---------------------------------------------
    // SAVE IN LOCAL STORAGE
    // ---------------------------------------------

    localStorage.setItem(
      "sellerProfile",
      JSON.stringify(seller)
    );

    setIsEditing(false);
  };


  return (

    <div className="seller-profile-page">

      <main className="seller-profile-content">


        {/* PAGE HEADER */}

        <div className="seller-profile-page-header">

          <div>

            <h1>
              Seller Profile
            </h1>

            <p>
              Manage your seller and business information
            </p>

          </div>


          {/* EDIT / SAVE / CANCEL BUTTONS */}

          {isEditing ? (

            <div className="seller-profile-edit-actions">

              <button
                className="seller-profile-edit-button"
                onClick={handleSaveProfile}
              >

                <span className="material-symbols-outlined">
                  save
                </span>

                Save Profile

              </button>


              <button
                className="seller-profile-cancel-button"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>

            </div>

          ) : (

            <button
              className="seller-profile-edit-button"
              onClick={handleEditProfile}
            >

              <span className="material-symbols-outlined">
                edit
              </span>

              Edit Profile

            </button>

          )}

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

              <h2>
                {seller.name}
              </h2>

              <p className="seller-id">
                Seller ID: {seller.sellerId}
              </p>

              <p>
                {seller.storeName}
              </p>

              <span className="seller-active-status">
                {seller.status}
              </span>

            </div>

          </div>



          {/* SELLER STATISTICS */}

          <div className="seller-profile-stats">

            <div className="seller-stat-box">

              <h3>
                {
                  7 +
                  (
                    JSON.parse(
                      localStorage.getItem(
                        "sellerCreatedProducts"
                      )
                    ) || []
                  ).length
                }
              </h3>

              <p>
                Total Products
              </p>

            </div>


            <div className="seller-stat-box">

              <h3>
                {
                  (
                    JSON.parse(
                      localStorage.getItem(
                        "sellerOrders"
                      )
                    ) || []
                  ).filter(
                    (order) =>
                      order.status === "Delivered"
                  ).length
                }
              </h3>

              <p>
                Sold Products
              </p>

            </div>


            <div className="seller-stat-box">

              <h3>
                {
                  (
                    JSON.parse(
                      localStorage.getItem(
                        "sellerOrders"
                      )
                    ) || []
                  ).length
                }
              </h3>

              <p>
                Total Orders
              </p>

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

              <h2>
                Personal Information
              </h2>

            </div>



            {/* FULL NAME */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                Full Name
              </span>

              {isEditing ? (

                <input
                  type="text"
                  value={seller.name}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      name: e.target.value,
                    })
                  }
                />

              ) : (

                <span>
                  {seller.name}
                </span>

              )}

            </div>



            {/* EMAIL */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                Email Address
              </span>

              {isEditing ? (

                <input
                  type="email"
                  value={seller.email}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      email: e.target.value,
                    })
                  }
                />

              ) : (

                <span>
                  {seller.email}
                </span>

              )}

            </div>



            {/* MOBILE */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                Mobile Number
              </span>

              {isEditing ? (

                <input
                  type="text"
                  value={seller.mobile}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      mobile: e.target.value,
                    })
                  }
                />

              ) : (

                <span>
                  {seller.mobile}
                </span>

              )}

            </div>

          </div>



          {/* BUSINESS INFORMATION */}

          <div className="seller-profile-info-card">

            <div className="seller-profile-section-title">

              <span className="material-symbols-outlined">
                storefront
              </span>

              <h2>
                Business Information
              </h2>

            </div>



            {/* BUSINESS NAME */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                Business Name
              </span>

              {isEditing ? (

                <input
                  type="text"
                  value={seller.businessName}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      businessName: e.target.value,
                    })
                  }
                />

              ) : (

                <span>
                  {seller.businessName}
                </span>

              )}

            </div>



            {/* BUSINESS TYPE */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                Business Type
              </span>

              {isEditing ? (

                <input
                  type="text"
                  value={seller.businessType}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      businessType: e.target.value,
                    })
                  }
                />

              ) : (

                <span>
                  {seller.businessType}
                </span>

              )}

            </div>



            {/* GST NUMBER */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                GST Number
              </span>

              {isEditing ? (

                <input
                  type="text"
                  maxLength="15"
                  value={seller.gstNumber}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      gstNumber:
                        e.target.value.toUpperCase(),
                    })
                  }
                />

              ) : (

                <span>
                  {seller.gstNumber}
                </span>

              )}

            </div>



            {/* ACCOUNT STATUS */}

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

          <div
            className="
              seller-profile-info-card
              seller-address-card
            "
          >

            <div className="seller-profile-section-title">

              <span className="material-symbols-outlined">
                location_on
              </span>

              <h2>
                Business Address
              </h2>

            </div>



            {/* CITY */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                City
              </span>

              {isEditing ? (

                <input
                  type="text"
                  value={seller.city}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      city: e.target.value,
                    })
                  }
                />

              ) : (

                <span>
                  {seller.city}
                </span>

              )}

            </div>



            {/* STATE */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                State
              </span>

              {isEditing ? (

                <input
                  type="text"
                  value={seller.state}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      state: e.target.value,
                    })
                  }
                />

              ) : (

                <span>
                  {seller.state}
                </span>

              )}

            </div>



            {/* PINCODE */}

            <div className="seller-profile-info-row">

              <span className="seller-profile-label">
                Pincode
              </span>

              {isEditing ? (

                <input
                  type="text"
                  maxLength="6"
                  value={seller.pincode}
                  onChange={(e) =>
                    setSeller({
                      ...seller,
                      pincode:
                        e.target.value.replace(
                          /\D/g,
                          ""
                        ),
                    })
                  }
                />

              ) : (

                <span>
                  {seller.pincode}
                </span>

              )}

            </div>

          </div>

        </div>

      </main>

    </div>

  );
};

export default SellerProfile;