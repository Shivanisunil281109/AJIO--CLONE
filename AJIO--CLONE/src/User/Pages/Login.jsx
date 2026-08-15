// import React, { useState } from "react";
// import "../CSS/Login.css";

// const Login = () => {

//     const [mobile, setMobile] = useState("");

//     const handleContinue = () => {

//         if (mobile.trim() === "") {
//             alert("Please enter your mobile number");
//             return;
//         }

//         console.log("Mobile Number:", mobile);

//         // Later we will add OTP / Register routing here
//     };

//     return (
//         <div className="overlay">

//             <div className="login-box">

//                 {/* CLOSE BUTTON */}
//                 <div className="close-btn">
//                     ×
//                 </div>


//                 {/* TITLE */}
//                 <h1>
//                     Welcome to AJIO
//                 </h1>


//                 {/* MOBILE NUMBER */}
//                 <label>
//                     Enter Mobile Number *
//                 </label>

//                 <input
//                     type="text"
//                     placeholder="+91 Mobile Number"
//                     value={mobile}
//                     onChange={(e) => setMobile(e.target.value)}
//                 />


//                 {/* CONTINUE BUTTON */}
//                 <button
//                     className="continue-btn"
//                     onClick={handleContinue}
//                 >
//                     CONTINUE
//                 </button>


//                 {/* TERMS */}
//                 <p className="terms">

//                     By Signing In, I agree to{" "}

//                     <a href="#">
//                         Terms & Conditions
//                     </a>

//                     {" "}and{" "}

//                     <a href="#">
//                         Privacy Policy
//                     </a>

//                 </p>


//                 {/* BOTTOM INFORMATION */}
//                 <div className="bottom-info">

//                     Email based login is no longer available.

//                     Please{" "}

//                     <a href="#">
//                         click here
//                     </a>

//                     {" "}to restore your mobile number.

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Login;













// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import "../CSS/login.css";

// const Login = () => {

//     const [mobile, setMobile] = useState("");

//     const handleContinue = () => {

//         console.log("Button clicked");

//         console.log("Mobile Number:", mobile);

//     };

//     return (
//         <div className="overlay">

//             <div className="login-box">

//                 <div className="close-btn">
//                     ×
//                 </div>

//                 <h1>Welcome to AJIO</h1>

//                 <label>
//                     Enter Mobile Number *
//                 </label>

//                 <input
//                     type="text"
//                     placeholder="+91 Mobile Number"
//                     value={mobile}
//                     onChange={(e) => setMobile(e.target.value)}
//                 />

//                 <button
//                     type="button"
//                     className="continue-btn"
//                     onClick={handleContinue}
//                 >
//                     CONTINUE
//                 </button>

//                 <p className="terms">
//                     By Signing In, I agree to{" "}
//                     <a href="#">Terms & Conditions</a>
//                     {" "}and{" "}
//                     <a href="#">Privacy Policy</a>
//                 </p>

//                 <div className="bottom-info">
//                     Email based login is no longer available.
//                     Please{" "}
//                     <a href="#">click here</a>
//                     {" "}to restore your mobile number.
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Login;







import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../CSS/Login.css";

const Login = () => {

    const [mobile, setMobile] = useState("");

    const navigate = useNavigate();


    const handleContinue = () => {

        if (mobile.trim() === "") {
            alert("Please enter your mobile number");
            return;
        }

        console.log("Button clicked");

        console.log("Mobile Number:", mobile);

        navigate("/register");
    };


    return (
        <div className="overlay">

            <div className="login-box">

                <div className="close-btn">
                    ×
                </div>

                <h1>
                    Welcome to AJIO
                </h1>

                <label>
                    Enter Mobile Number *
                </label>

                <input
                    type="text"
                    placeholder="+91 Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <button
                    type="button"
                    className="continue-btn"
                    onClick={handleContinue}
                >
                    CONTINUE
                </button>

                <p className="terms">
                    By Signing In, I agree to{" "}

                    <a href="#">
                        Terms & Conditions
                    </a>

                    {" "}and{" "}

                    <a href="#">
                        Privacy Policy
                    </a>
                </p>

                <div className="bottom-info">

                    Email based login is no longer available.

                    Please{" "}

                    <a href="#">
                        click here
                    </a>

                    {" "}to restore your mobile number.

                </div>

            </div>

        </div>
    );
};

export default Login;