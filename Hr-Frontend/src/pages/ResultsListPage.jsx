import React from "react";
import { resultsData } from "../data";
import { Link } from "react-router-dom";

import { createSlug } from "../utils/common/helper";


const ResultsListPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 pt-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Proven Results & Impact</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our detailed case studies and see how AI-powered recruitment is delivering tangible value to organizations worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resultsData.map((result) => {
          const Icon = result.icon;

          
          return (
            <Link
              key={result.id}
              to={`/results/${createSlug(result.title)}`}
              className="group bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className="relative z-10">
                {Icon && <Icon className="mb-6 w-12 h-12 text-indigo-500" />}
                <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">
                  {result.title}
                </h2>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {result.description}
                </p>
                <div className="mt-8 text-indigo-600 font-semibold flex items-center gap-2">
                   Explore Case Study <span>→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsListPage;
