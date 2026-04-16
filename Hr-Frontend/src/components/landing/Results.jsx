import React from "react";
import { resultsData, gradientMap } from "../../data";
import { Link } from "react-router-dom";

import { createSlug } from "../../utils/common/helper";


const Results = ({ preview = false }) => {
  // Pattern match: filter data if preview is true
  const dataToShow = preview ? resultsData.slice(0, 3) : resultsData;

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Impact</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">Proven Results</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how RankResumes AI is transforming the recruitment landscape for modern companies.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {dataToShow.map((result) => {
            const Icon = result.icon;

            
            return (
              <Link
                key={result.id}
                to={`/results/${createSlug(result.title)}`}
                className="group bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 block text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${gradientMap[result.color]}`}>
                  {Icon && <Icon className="w-10 h-10" />}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {result.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {result.description}
                </p>
                <div className="mt-8 text-indigo-600 font-semibold flex items-center justify-center gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Link
              to="/results"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md"
            >
              View More Results
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
