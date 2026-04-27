import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const [role, setRole] = React.useState(user.role || "user");

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar role={role} />

            <div className="flex-1 flex flex-col">
                <Header role={role} setRole={setRole} />

                <main className="p-6 overflow-auto">
                    <Outlet context={{ role }} />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;