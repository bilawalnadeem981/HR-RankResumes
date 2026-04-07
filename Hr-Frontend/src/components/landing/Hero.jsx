import React from "react";
import { heroStats, heroFeatures } from "../../data";
import heroImg from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center px-4 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 text-center md:text-left">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
            AI-Powered
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Find Top Candidates Faster with <br className="hidden md:block" />
            <span className="text-indigo-600">AI Resume Screening</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mx-0">
            Save time and hire smarter. Our AI ranks resumes instantly so you focus only on the best matches.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all">
              Get Started
            </button>
            <button className="border border-gray-300 hover:border-indigo-600 px-8 py-3 rounded-lg font-medium transition-all">
              Watch Demo
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-8 mt-10 text-sm text-gray-700 border-b border-gray-50 pb-10">
            {heroStats.map((stat) => (
              <div key={stat.id}>
                <span className={`block text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </span>
                {stat.label}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {heroFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
 <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;