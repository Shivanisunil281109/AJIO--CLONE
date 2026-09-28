import React from "react";
import { Outlet } from "react-router";

import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";



const AdminLayout = () => {

    return (
        <div className="admin-layout">

            <AdminHeader />

            <main className="admin-main-content">
                <Outlet />
            </main>

            <AdminFooter />

        </div>
    );
};

export default AdminLayout;