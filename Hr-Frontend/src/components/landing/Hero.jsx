import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-16">
      
      {/* Content */}
      <div className="max-w-3xl text-center md:text-left space-y-6">
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
          🚀 AI-Powered
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Find Top Candidates Faster with AI Resume Screening
        </h1>

        <p className="text-gray-600 text-base">
          Save time and hire smarter. Our AI ranks resumes instantly so you focus only on the best matches.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-4">
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded font-semibold shadow"
          >
            Get Started
          </Link>

          <button className="border border-gray-300 hover:border-indigo-600 px-6 py-2.5 rounded font-medium">
            Watch Demo
          </button>
        </div>

        {/* Key Stats */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mt-6 text-sm text-gray-700">
          <span className="block text-lg font-bold text-indigo-600">5,000+</span> HR Professionals
          <span className="block text-lg font-bold text-violet-600">250+</span> Resumes Screened
          <span className="block text-lg font-bold text-emerald-600">15s</span> Avg Match Time
        </div>
      </div>

    </section>
  );
};

export default Hero;