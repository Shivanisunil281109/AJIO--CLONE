import { Routes, Route } from "react-router";

import UserLayout from "./User/Components/UserLayout";
import Home from "./User/Pages/Home";
import Login from "./User/Pages/Login";
import Register from "./User/Pages/Register";


function App() {
    return (
        <Routes>



         <Route element={<UserLayout />}>

        <Route  path="/"  element={<Home />} />
        <Route path="/Login" element={<Login/>}/>
         <Route path="/register" element={<Register />}
            />
            
           
            </Route>




        </Routes>
    );
}

export default App;