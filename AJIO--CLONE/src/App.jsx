import { Routes, Route } from "react-router";

import UserLayout from "./User/Components/UserLayout";
import Home from "./User/Pages/Home";
import Login from "./User/Pages/Login";
import Register from "./User/Pages/Register";
import OTP from "./User/Pages/OTP";
import MenProducts from "./User/Pages/MenProducts";
import SingleProduct from "./User/Pages/SingleProduct";
import Wishlist from "./User/Pages/Wishlist";
import Cart from "./User/Pages/Cart";
import Payment from "./User/Pages/Payment";
import Orders from "./User/Pages/Orders";
import Profile from "./User/Pages/Profile";






// Seller Pages
import SellerLayout from "./Seller/Components/SellerLayout";
import SellerDashboard from "./Seller/Pages/SellerDashboard";
import CreateProduct from "./Seller/Pages/CreateProduct";














function App() {

    return (
        <Routes>

            <Route element={<UserLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/otp" element={<OTP />} />

                <Route path="/MenProducts" element={<MenProducts />} />

                <Route
                    path="/single-product/:productId"
                    element={<SingleProduct />}
                />


                <Route path="/wishlist" element={<Wishlist />} />

               
              <Route path="/cart" element={<Cart />} />


         <Route path="/payment" element={<Payment />} />

           
        <Route path="/orders"  element={<Orders />}  />


      <Route path="/profile"  element={<Profile />} />


            </Route>






{/* ==========================
                SELLER ROUTES
            =========================== */}
<Route element={<SellerLayout />}>

    <Route  path="/seller/dashboard"  element={<SellerDashboard />}  />

<Route path="/seller/create-product" element={<CreateProduct />} />




</Route>








        </Routes>
    );
}

export default App;