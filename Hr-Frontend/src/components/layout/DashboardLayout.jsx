import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
    const { user, loading } = useAuth();

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    const role = user.role || "user";

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar role={role} />

            <div className="flex-1 flex flex-col">
                <Header role={role} />

                <main className="p-6 overflow-auto">
                    <Outlet context={{ role }} />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;