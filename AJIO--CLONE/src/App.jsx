import { Routes, Route } from "react-router";


// User Pages
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
import SellerProducts from "./Seller/Pages/SellerProducts";
import SellerProductDetails from "./Seller/Pages/SellerProductDetails";
import SellerProfile from "./Seller/Pages/SellerProfile";
import SellerOrders from "./Seller/Pages/SellerOrders";
import SellerProfit from "./Seller/Pages/SellerProfit";






// Admin Pages
import AdminLayout from "./Admin/Components/AdminLayout";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import ProductReview from "./Admin/Pages/ProductReview";
import AdminProducts from "./Admin/Pages/AdminProducts";
import AdminProductDetails from "./Admin/Pages/AdminProductDetails";
import AdminSellers from "./Admin/Pages/AdminSellers";
import AdminSellerDetails from "./Admin/Pages/AdminSellerDetails";











function App() {

    return (
        <Routes>

            <Route element={<UserLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/otp" element={<OTP />} />

                <Route path="/MenProducts" element={<MenProducts />} />

                <Route  path="/single-product/:productId" element={<SingleProduct />}  />

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

            <Route path="/seller/products" element={<SellerProducts />} />

            <Route  path="/seller/products/:productId" element={<SellerProductDetails />} />

            <Route path="/seller/products/:productId/edit"   element={<SellerProductDetails />} />

            <Route path="/seller/orders" element={<SellerOrders />}  />
           
        <Route path="/seller/profit"  element={<SellerProfit />}  />

        <Route path="/seller/profile" element={<SellerProfile />} />


</Route>











{/* ==========================
    ADMIN ROUTES
=========================== */}


<Route element={<AdminLayout />}>


<Route path="/admin/dashboard" element={<AdminDashboard />} />

<Route  path="/admin/product-review"  element={<ProductReview />} />

<Route path="/admin/products" element={<AdminProducts />} />

<Route path="/admin/products/:productId" element={<AdminProductDetails />}/>

<Route  path="/admin/products/:productId/edit" element={<AdminProductDetails />} />

<Route path="/admin/sellers"element={<AdminSellers />} />

<Route path="/admin/sellers/:sellerId" element={<AdminSellerDetails />}/>

<Route path="/admin/sellers/:sellerId/edit" element={<AdminSellerDetails />} />


</Route>











        </Routes>
    );
}

export default App;