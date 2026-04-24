import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const PublicLayout = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
};

export default PublicLayout;