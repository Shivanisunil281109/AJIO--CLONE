import React, { useState } from "react";
import "../CSS/Admin-profile.css";


const AdminProfile = () => {


    // =========================================
    // DEFAULT PROFILE DATA
    // =========================================

    const defaultProfile = {

        name: "Admin",

        email: "admin@ajio.com",

        mobile: "9876543210",

        role: "Super Admin"

    };


    // =========================================
    // PROFILE DATA
    // LOAD SAVED PROFILE FROM LOCAL STORAGE
    // =========================================

    const [profile, setProfile] = useState(() => {

        const savedProfile =
            JSON.parse(localStorage.getItem("adminProfile"));

        return savedProfile || defaultProfile;

    });


    // =========================================
    // EDIT MODE
    // =========================================

    const [isEditing, setIsEditing] = useState(false);


    // =========================================
    // VALIDATION ERRORS
    // =========================================

    const [errors, setErrors] = useState({

        name: "",

        email: "",

        mobile: "",

        role: ""

    });


    // =========================================
    // EDIT FORM DATA
    // =========================================

    const [editProfile, setEditProfile] = useState({

        name: profile.name,

        email: profile.email,

        mobile: profile.mobile,

        role: profile.role

    });


    // =========================================
    // EDIT PROFILE
    // =========================================

    const handleEditProfile = () => {

        setEditProfile({

            name: profile.name,

            email: profile.email,

            mobile: profile.mobile,

            role: profile.role

        });


        // CLEAR OLD ERRORS

        setErrors({

            name: "",

            email: "",

            mobile: "",

            role: ""

        });


        setIsEditing(true);

    };


    // =========================================
    // INPUT CHANGE
    // =========================================

    const handleInputChange = (e) => {

        const { name, value } = e.target;


        setEditProfile((previousProfile) => ({

            ...previousProfile,

            [name]: value

        }));


        // CLEAR ERROR WHEN USER CHANGES FIELD

        setErrors((previousErrors) => ({

            ...previousErrors,

            [name]: ""

        }));

    };


    // =========================================
    // CANCEL EDIT
    // =========================================

    const handleCancelEdit = () => {

        setEditProfile({

            name: profile.name,

            email: profile.email,

            mobile: profile.mobile,

            role: profile.role

        });


        // CLEAR VALIDATION ERRORS

        setErrors({

            name: "",

            email: "",

            mobile: "",

            role: ""

        });


        setIsEditing(false);

    };


    // =========================================
    // SAVE PROFILE
    // =========================================

    const handleSaveProfile = () => {


        // =========================================
        // CREATE EMPTY ERROR OBJECT
        // =========================================

        const newErrors = {

            name: "",

            email: "",

            mobile: "",

            role: ""

        };


        // =========================================
        // FULL NAME VALIDATION
        // =========================================

        if (!editProfile.name.trim()) {

            newErrors.name =
                "Full name is required.";

        }


        // =========================================
        // EMAIL VALIDATION
        // =========================================

        if (!editProfile.email.trim()) {

            newErrors.email =
                "Email address is required.";

        } else {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    editProfile.email.trim()
                )
            ) {

                newErrors.email =
                    "Please enter a valid email address.";

            }

        }


        // =========================================
        // MOBILE VALIDATION
        // =========================================

        if (!editProfile.mobile.trim()) {

            newErrors.mobile =
                "Mobile number is required.";

        } else if (
            !/^\d{10}$/.test(
                editProfile.mobile.trim()
            )
        ) {

            newErrors.mobile =
                "Mobile number must be exactly 10 digits.";

        }


        // =========================================
        // ROLE VALIDATION
        // =========================================

        if (!editProfile.role) {

            newErrors.role =
                "Please select a role.";

        }


        // =========================================
        // SET VALIDATION ERRORS
        // =========================================

        setErrors(newErrors);


        // =========================================
        // CHECK IF ANY ERROR EXISTS
        // =========================================

        const hasErrors =
            Object.values(newErrors).some(
                (error) => error !== ""
            );


        // DO NOT SAVE IF ERROR EXISTS

        if (hasErrors) {

            return;

        }


        // =========================================
        // CREATE UPDATED PROFILE
        // =========================================

        const updatedProfile = {

            name: editProfile.name.trim(),

            email: editProfile.email.trim(),

            mobile: editProfile.mobile.trim(),

            role: editProfile.role

        };


        // =========================================
        // UPDATE PROFILE ON PAGE
        // =========================================

        setProfile(updatedProfile);


        // =========================================
        // SAVE PROFILE IN LOCAL STORAGE
        // =========================================

        localStorage.setItem(
            "adminProfile",
            JSON.stringify(updatedProfile)
        );


        // =========================================
        // CLEAR ERRORS
        // =========================================

        setErrors({

            name: "",

            email: "",

            mobile: "",

            role: ""

        });


        // =========================================
        // CLOSE EDIT MODE
        // =========================================

        setIsEditing(false);

    };


    return (

        <div className="admin-profile-page">


            {/* ================================
                PAGE HEADING
            ================================= */}

            <div className="admin-profile-page-heading">

                <h1>
                    Admin Profile
                </h1>

                <p>
                    Manage your administrator account and personal information.
                </p>

            </div>


            {/* ================================
                PROFILE HERO CARD
            ================================= */}

            <div className="admin-profile-hero-card">


                <div className="admin-profile-hero-left">


                    <div className="admin-profile-avatar">

                        <span className="material-symbols-outlined">
                            person
                        </span>

                    </div>


                    <div className="admin-profile-hero-info">


                        <div className="admin-profile-name-row">

                            <h2>
                                {profile.name}
                            </h2>

                            <span className="admin-profile-role-badge">
                                {profile.role}
                            </span>

                        </div>


                        <p className="admin-profile-email">
                            {profile.email}
                        </p>


                        <p className="admin-profile-account-text">
                            Administrator Account
                        </p>


                    </div>


                </div>


                {!isEditing && (

                    <button
                        type="button"
                        className="admin-profile-edit-btn"
                        onClick={handleEditProfile}
                    >

                        <span className="material-symbols-outlined">
                            edit
                        </span>

                        Edit Profile

                    </button>

                )}


            </div>


            {/* ================================
                PERSONAL INFORMATION
            ================================= */}

            <div className="admin-profile-section-card">


                <div className="admin-profile-section-heading">

                    <div>

                        <h2>
                            Personal Information
                        </h2>

                        <p>
                            Your administrator account details.
                        </p>

                    </div>

                </div>


                {/* ================================
                    NORMAL PROFILE INFORMATION
                ================================= */}

                {!isEditing && (

                    <div className="admin-profile-info-grid">


                        {/* FULL NAME */}

                        <div className="admin-profile-info-box">

                            <div className="admin-profile-info-icon">

                                <span className="material-symbols-outlined">
                                    person
                                </span>

                            </div>


                            <div>

                                <span className="admin-profile-info-label">
                                    Full Name
                                </span>

                                <strong>
                                    {profile.name}
                                </strong>

                            </div>

                        </div>


                        {/* EMAIL */}

                        <div className="admin-profile-info-box">

                            <div className="admin-profile-info-icon">

                                <span className="material-symbols-outlined">
                                    mail
                                </span>

                            </div>


                            <div>

                                <span className="admin-profile-info-label">
                                    Email Address
                                </span>

                                <strong>
                                    {profile.email}
                                </strong>

                            </div>

                        </div>


                        {/* MOBILE */}

                        <div className="admin-profile-info-box">

                            <div className="admin-profile-info-icon">

                                <span className="material-symbols-outlined">
                                    call
                                </span>

                            </div>


                            <div>

                                <span className="admin-profile-info-label">
                                    Mobile Number
                                </span>

                                <strong>
                                    +91 {profile.mobile}
                                </strong>

                            </div>

                        </div>


                        {/* ROLE */}

                        <div className="admin-profile-info-box">

                            <div className="admin-profile-info-icon">

                                <span className="material-symbols-outlined">
                                    admin_panel_settings
                                </span>

                            </div>


                            <div>

                                <span className="admin-profile-info-label">
                                    Role
                                </span>

                                <strong>
                                    {profile.role}
                                </strong>

                            </div>

                        </div>


                    </div>

                )}


                {/* ================================
                    EDIT PROFILE FORM
                ================================= */}

                {isEditing && (

                    <div className="admin-profile-edit-form">


                        <div className="admin-profile-edit-grid">


                            {/* FULL NAME */}

                            <div className="admin-profile-edit-field">

                                <label>
                                    Full Name
                                </label>


                                <input
                                    type="text"
                                    name="name"
                                    value={editProfile.name}
                                    onChange={handleInputChange}
                                />


                                {errors.name && (

                                    <span className="admin-profile-field-error">
                                        {errors.name}
                                    </span>

                                )}

                            </div>


                            {/* EMAIL */}

                            <div className="admin-profile-edit-field">

                                <label>
                                    Email Address
                                </label>


                                <input
                                    type="email"
                                    name="email"
                                    value={editProfile.email}
                                    onChange={handleInputChange}
                                />


                                {errors.email && (

                                    <span className="admin-profile-field-error">
                                        {errors.email}
                                    </span>

                                )}

                            </div>


                            {/* MOBILE */}

                            <div className="admin-profile-edit-field">

                                <label>
                                    Mobile Number
                                </label>


                                <input
                                    type="text"
                                    name="mobile"
                                    value={editProfile.mobile}
                                    onChange={handleInputChange}
                                />


                                {errors.mobile && (

                                    <span className="admin-profile-field-error">
                                        {errors.mobile}
                                    </span>

                                )}

                            </div>


                            {/* ROLE */}

                            <div className="admin-profile-edit-field">

                                <label>
                                    Role
                                </label>


                                <select
                                    name="role"
                                    value={editProfile.role}
                                    onChange={handleInputChange}
                                >

                                    <option value="Super Admin">
                                        Super Admin
                                    </option>

                                    <option value="Admin">
                                        Admin
                                    </option>

                                </select>


                                {errors.role && (

                                    <span className="admin-profile-field-error">
                                        {errors.role}
                                    </span>

                                )}

                            </div>


                        </div>


                        {/* ================================
                            FORM ACTION BUTTONS
                        ================================= */}

                        <div className="admin-profile-edit-actions">


                            <button
                                type="button"
                                className="admin-profile-cancel-btn"
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>


                            <button
                                type="button"
                                className="admin-profile-save-btn"
                                onClick={handleSaveProfile}
                            >
                                Save Changes
                            </button>


                        </div>


                    </div>

                )}


            </div>


            {/* ================================
                ACCOUNT INFORMATION
            ================================= */}

            <div className="admin-profile-section-card">


                <div className="admin-profile-section-heading">

                    <div>

                        <h2>
                            Account Information
                        </h2>

                        <p>
                            Administrator account status and access.
                        </p>

                    </div>

                </div>


                <div className="admin-profile-account-grid">


                    {/* ACCOUNT STATUS */}

                    <div className="admin-profile-account-item">


                        <div className="admin-profile-account-icon">

                            <span className="material-symbols-outlined">
                                verified_user
                            </span>

                        </div>


                        <div>

                            <span>
                                Account Status
                            </span>


                            <div className="admin-profile-active-status">

                                <span className="admin-profile-status-dot">
                                </span>

                                Active

                            </div>

                        </div>


                    </div>


                    {/* ACCESS LEVEL */}

                    <div className="admin-profile-account-item">


                        <div className="admin-profile-account-icon">

                            <span className="material-symbols-outlined">
                                security
                            </span>

                        </div>


                        <div>

                            <span>
                                Access Level
                            </span>

                            <strong>
                                Full Administrative Access
                            </strong>

                        </div>


                    </div>


                </div>


            </div>


        </div>

    );

};


export default AdminProfile;