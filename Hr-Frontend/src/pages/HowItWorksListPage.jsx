import React from "react";
import { howItWorksData } from "../data";
import { Link } from "react-router-dom";
import { createSlug } from "../utils/common/helper";


const HowItWorksListPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 pt-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How It Works</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Deep dive into our AI-driven recruitment process and see how we help you find the best talent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {howItWorksData.map((step) => {
          const Icon = step.icon;


          return (
            <Link
              key={step.id}
              to={`/how-it-works/${createSlug(step.title)}`}
              className="group border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all bg-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-bold text-4xl text-gray-50 group-hover:text-indigo-50 transition-colors">
                {step.step}
              </div>
              <div className="relative z-10">
                {Icon && <Icon className="mb-6 w-12 h-12 text-indigo-500" />}
                <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">{step.title}</h2>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                <div className="mt-8 text-indigo-600 font-semibold flex items-center gap-2">
                  View full details <span>→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorksListPage;
