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


            </Route>

        </Routes>
    );
}

export default App;