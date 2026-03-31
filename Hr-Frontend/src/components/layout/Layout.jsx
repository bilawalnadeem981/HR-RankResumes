import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Content */}
            <main className="flex-1 bg-gray-100 overflow-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;