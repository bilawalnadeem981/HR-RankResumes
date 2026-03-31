import React from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-32">
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;