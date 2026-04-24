import React from "react";
import { useParams, Link } from "react-router-dom";
import { resultsData, gradientMap } from "../data";

import { findBySlug } from "../utils/common/helper";


const ResultDetailPage = () => {
  const { id } = useParams();
  const result = findBySlug(resultsData, id);

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Result Not Found</h1>
        <p className="text-gray-600 mb-8">The case study you are looking for doesn't exist.</p>
        <Link to="/" className="text-indigo-600 font-semibold hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const Icon = result.icon;


  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/results" className="text-indigo-600 font-semibold mb-8 inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
          <span>←</span> Back to Overview
        </Link>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-2xl bg-gradient-to-br ${gradientMap[result.color]}`}>
              {Icon && <Icon className="w-12 h-12" />}
            </div>
            <div>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Case Study</span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mt-2">{result.title}</h1>
            </div>
          </div>

          <div className="prose prose-indigo lg:prose-xl text-gray-600">
            <p className="text-2xl leading-relaxed font-medium text-gray-900 mb-10">
              {result.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-16">
              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 text-center">
                <p className="text-4xl font-black text-indigo-600 mb-1">Impact</p>
                <p className="text-gray-600 font-medium">Significant Gain</p>
              </div>
              <div className="bg-violet-50 rounded-2xl p-6 border border-violet-100 text-center">
                <p className="text-4xl font-black text-violet-600 mb-1">Efficiency</p>
                <p className="text-gray-600 font-medium">10x Speed</p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center">
                <p className="text-4xl font-black text-emerald-600 mb-1">Diversity</p>
                <p className="text-gray-600 font-medium">Bias-Free</p>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Overview</h3>
            <p className="mb-10 text-lg leading-relaxed">
              {result.fullDescription}
            </p>

            <div className="bg-gray-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <span className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></span>
              <h4 className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-4">Key Outcome</h4>
              <p className="text-2xl sm:text-3xl font-bold mb-6">
                "{result.impact}"
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">🏆</div>
                <p className="text-sm">Verified Industry Standard result</p>
              </div>
            </div>

            <div className="mt-20 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How it was achieved</h3>
                <p>Through the integration of RankResumes AI, the recruitment workflow was fundamentally redesigned to prioritize data-backed insights over manual screening.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Technological Integration</h4>
                  <p className="text-sm">API-first approach allowed seamless connection with existing HRIS and ATS platforms.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">AI Training</h4>
                  <p className="text-sm">Continuous learning models ensured that the AI adapt to specific industry terminologies and nuances.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDetailPage;
