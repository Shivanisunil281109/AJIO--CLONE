import React, { useState } from "react";
// import { useNavigate } from "react-router";
import { useNavigate, useLocation } from "react-router";
import "../CSS/Register.css";

const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();

const mobile = location.state?.mobile || "";

const [gender, setGender] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);


    // Back to Login
    const handleBack = () => {
        navigate("/login");
    };


    // Send OTP
    const handleSendOTP = () => {

        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        if (email.trim() === "") {
            alert("Please enter your email");
            return;
        }

        if (gender === "") {
            alert("Please select your gender");
            return;
        }

        if (!termsAccepted) {
            alert("Please accept Terms and Conditions");
            return;
        }

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Gender :",  gender);
        console.log("Invite Code:", inviteCode);
        console.log("Mobile:", mobile);

       navigate("/otp", {
    state: {
        mobile: mobile
    }
});

    };


    return (
        <div className="overlay">

            <div className="register-box">

                {/* ================= TOP ROW ================= */}

                <div className="top-row">

                    <button
                        className="back-btn"
                        onClick={handleBack}
                    >
                        ← Back
                    </button>

                    <span className="close-btn">
                        ×
                    </span>

                </div>


                {/* ================= HEADING ================= */}

                <h1>
                    Welcome to AJIO
                </h1>

                <p>
                    Please set up your account
                </p>


                {/* ================= MOBILE NUMBER ================= */}

               <div className="mobile-row">

    <span>
        +91 {mobile}
    </span>

    <a href="#">
        Edit
    </a>

</div>



                <small>
                    OTP will be sent to this number for verification
                </small>


                {/* ================= GENDER ================= */}

                <div className="gender">

                    <label>
                        Gender:
                    </label>

                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setGender(e.target.value)}
                    />

                    Female


                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setGender(e.target.value)}
                    />

                    Male

                </div>


                {/* ================= NAME ================= */}

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                {/* ================= EMAIL ================= */}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                {/* ================= INVITE CODE ================= */}

                <input
                    type="text"
                    placeholder="Invite code (optional)"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                />


                {/* ================= TERMS ================= */}

                <div className="checkbox">

                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) =>
                            setTermsAccepted(e.target.checked)
                        }
                    />

                    <span>
                        By Signing Up, I agree to{" "}

                        <a href="#">
                            Terms and Conditions
                        </a>
                    </span>

                </div>


                {/* ================= SEND OTP ================= */}

                <button
                    className="otp-btn"
                    onClick={handleSendOTP}
                >
                    SEND OTP
                </button>

            </div>

        </div>
    );
};

export default Register;