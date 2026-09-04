import React, { useState } from "react";
import "../CSS/Profile.css";


const Profile = () => {
    const [firstName, setFirstName] = useState("Shivani");
    const [lastName, setLastName] = useState("Sonawane");
    const [email, setEmail] = useState("shivaniesonawane@gmail.com");
    const [mobile, setMobile] = useState("+91 9168077927");
    const [gender, setGender] = useState("Female");
    const [dob, setDob] = useState("2003-09-18");

    const [message, setMessage] = useState("");

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // SAVE PROFILE
    const handleSaveChanges = (e) => {
        e.preventDefault();

        setMessage("Profile information saved successfully.");
    };

    // UPDATE PASSWORD
    const handleUpdatePassword = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            setMessage("Please fill all password fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("New password and confirm password do not match.");
            return;
        }

        setMessage("Password updated successfully.");

        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    // LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <main>

            {/* ===========================
                    PROFILE SECTION
            =========================== */}

            <section className="profile-container">

                {/* ===========================
                        PROFILE SIDEBAR
                =========================== */}

                <div className="profile-sidebar">

                    <h2>My Account</h2>

                    {/* Orders & Credits */}

                    <div className="sidebar-section">

                        <h3>Orders & Credits</h3>

                        <ul>

                            <li>
                                <a href="/orders">
                                    Orders and Refunds
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    AJIO Wallet
                                    <span className="new-badge">
                                        New
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Invite Friends & Earn
                                    <span className="new-badge">
                                        New
                                    </span>
                                </a>

                                <p className="invite-text">
                                    Earn ₹100 AJIO Cash for every friend you invite
                                </p>
                            </li>

                            <li>
                                <a href="#">
                                    My Rewards
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Customer Care
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* ===========================
                            PROFILE
                    =========================== */}

                    <div className="sidebar-section">

                        <h3>Profile</h3>

                        <ul>

                            <li className="active">
                                <a href="#">
                                    Personal Information
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Address Book
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Payments
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* ===========================
                            AJIO LUXE
                    =========================== */}

                    <div className="luxe-card">

                        <h3>AJIO LUXE</h3>

                        <p>
                            Your access to luxury
                        </p>

                        <a href="#">
                            EXPLORE
                        </a>

                    </div>


                    {/* ===========================
                            LOGOUT
                    =========================== */}

                    <div className="logout-section">

                        <button
                            type="button"
                            onClick={handleLogout}
                        >

                            <span className="material-symbols-outlined">
                                logout
                            </span>

                            Logout

                        </button>

                    </div>

                </div>


                {/* ===========================
                        PROFILE CONTENT
                =========================== */}

                <div className="profile-content">

                    <div className="personal-information">

                        <h2>
                            Personal Information
                        </h2>


                        {/* ===========================
                                PERSONAL INFORMATION FORM
                        =========================== */}

                        <form onSubmit={handleSaveChanges}>

                            {/* Row 1 */}

                            <div className="form-row">

                                <div className="form-group">

                                    <label>
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />

                                </div>


                                <div className="form-group">

                                    <label>
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />

                                </div>

                            </div>


                            {/* Row 2 */}

                            <div className="form-row">

                                <div className="form-group">

                                    <label>
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />

                                </div>


                                <div className="form-group">

                                    <label>
                                        Mobile Number
                                    </label>

                                    <input
                                        type="text"
                                        value={mobile}
                                        onChange={(e) =>
                                            setMobile(e.target.value)
                                        }
                                    />

                                </div>

                            </div>


                            {/* Gender */}

                            <div className="form-group gender-group">

                                <label>
                                    Gender
                                </label>

                                <div className="gender-options">

                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={gender === "Male"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />

                                        Male
                                    </label>


                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={gender === "Female"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />

                                        Female
                                    </label>


                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Other"
                                            checked={gender === "Other"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />

                                        Other
                                    </label>

                                </div>

                            </div>


                            {/* Date of Birth */}

                            <div className="form-group dob-group">

                                <label>
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    value={dob}
                                    onChange={(e) =>
                                        setDob(e.target.value)
                                    }
                                />

                            </div>


                            {/* Save Changes */}

                            <div className="save-btn">

                                <button type="submit">
                                    SAVE CHANGES
                                </button>

                            </div>

                        </form>


                        {/* Profile Message */}

                        {message && (
                            <p className="profile-message">
                                {message}
                            </p>
                        )}


                        <hr className="profile-divider" />


                        {/* ===========================
                                CHANGE PASSWORD
                        =========================== */}

                        <h2 className="password-heading">
                            Change Password
                        </h2>


                        <div className="password-row">

                            {/* Current Password */}

                            <div className="password-group">

                                <label>
                                    Current Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter current password"
                                    value={currentPassword}
                                    onChange={(e) =>
                                        setCurrentPassword(e.target.value)
                                    }
                                />

                            </div>


                            {/* New Password */}

                            <div className="password-group">

                                <label>
                                    New Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />

                            </div>


                            {/* Confirm Password */}

                            <div className="password-group">

                                <label>
                                    Confirm New Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />

                            </div>


                            {/* Update Password */}

                            <button
                                type="button"
                                className="update-btn"
                                onClick={handleUpdatePassword}
                            >
                                UPDATE PASSWORD
                            </button>

                            <div className="clear"></div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Profile;