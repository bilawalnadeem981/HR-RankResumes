import React from "react";
import { howItWorksData, gradientMap } from "../../data";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/HowItWorks.jsx";
import { createSlug } from "../../utils/common/helper";

const HowItWorks = ({ preview = false }) => {
  const dataToShow = preview ? howItWorksData.slice(0, 3) : howItWorksData;

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-violet-50 relative overflow-hidden">
      <span className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></span>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Flow</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">How It Works</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Three simple steps to transform your recruitment process</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {dataToShow.map((step) => {
            const Icon = icons[step.icon];

            return (
              <Link
                key={step.id}
                to={`/how-it-works/${createSlug(step.title)}`}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 text-center block"
              >
                <span className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform rotate-12 transition-transform group-hover:rotate-0 bg-gradient-to-br ${gradientMap[step.color]}`}>
                  {step.step}
                </span>
                <div className="flex justify-center mb-6">
                  {Icon && <Icon className="w-12 h-12 text-indigo-500" />}
                </div>
                <h4 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                <div className="mt-6 text-indigo-600 font-semibold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md"
            >
              Learn More About Our Process
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
