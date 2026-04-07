import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const PublicLayout = () => {
    const location = useLocation();

    const hideFooter = location.pathname === "/login" || location.pathname === "/signup";

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            {!hideFooter && <Footer />}
        </div>
    );
};

export default PublicLayout;