import React from "react";
import { Outlet } from "react-router";

import AdminHeader from "./AdminHeader";
import "../CSS/Admin-layout.css";

const AdminLayout = () => {

    return (
        <div className="admin-layout">

            <AdminHeader />

            <main className="admin-main-content">
                <Outlet />
            </main>

        </div>
    );
};

export default AdminLayout;