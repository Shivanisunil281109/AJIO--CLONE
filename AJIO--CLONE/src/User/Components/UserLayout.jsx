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
import { Outlet } from "react-router";

import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

const UserLayout = () => {

    return (
        <>
            <UserNavbar />

            <Outlet />

            <UserFooter />
        </>
    );
};

export default UserLayout;