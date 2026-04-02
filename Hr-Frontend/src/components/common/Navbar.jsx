import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            R
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Rank<span className="text-indigo-600">Resumes</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">
            How it Works
          </a>
          <a href="#results" className="hover:text-indigo-600 transition-colors">
            Results
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Login Button */}
          <Link
            to="/login"
            className="hidden sm:block text-gray-700 font-semibold hover:text-indigo-600 transition-colors"
          >
            Login
          </Link>

          {/* Get Started Button */}
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            Get Started
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;