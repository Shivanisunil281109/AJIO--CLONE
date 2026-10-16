// import React from "react";
// import { Outlet } from "react-router";

// import UserNavbar from "./UserNavbar";
// import UserFooter from "./UserFooter";

// const UserLayout = () => {
//     return (
//         <>
//             <UserNavbar />

//             <main>
//                 <Outlet />
//             </main>

//             <UserFooter />
//         </>
//     );
// };

// export default UserLayout;










import React from "react";
// import { Outlet } from "react-router";
import { Outlet, useLocation } from "react-router";

import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

const UserLayout = () => {

const location = useLocation();
const hideLayout = ["/login", "/register"].includes(location.pathname);

    return (
        <>
    {!hideLayout && <UserNavbar />}

    <Outlet />

    {!hideLayout && <UserFooter />}
</>
    );
};

export default UserLayout;