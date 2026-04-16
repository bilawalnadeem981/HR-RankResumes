import React from "react";
import { useParams, Link } from "react-router-dom";
import { howItWorksData, gradientMap, workflowBottomItems } from "../data";

import { findBySlug } from "../utils/common/helper";


const HowItWorksDetailPage = () => {
  const { id } = useParams();
  const step = findBySlug(howItWorksData, id);

  if (!step) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Step Not Found</h1>
        <p className="text-gray-600 mb-8">The workflow step you are looking for doesn't exist.</p>
        <Link to="/" className="text-indigo-600 font-semibold hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const Icon = step.icon;


  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/how-it-works" className="text-indigo-600 font-semibold mb-8 inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
          <span>←</span> Back to Overview
        </Link>

        <div className="mt-12">
           <div className="flex items-center gap-6 mb-8">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br ${gradientMap[step.color]}`}>
                 {Icon && <Icon className="w-10 h-10" />}
              </div>
              <div>
                <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Step {step.step}</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-1">{step.title}</h1>
              </div>
           </div>

           <div className="prose prose-indigo lg:prose-xl text-gray-600">
              <p className="text-2xl leading-relaxed font-medium text-gray-900 mb-8">
                {step.description}
              </p>
              
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 italic text-lg leading-relaxed shadow-inner">
                {step.details || (
                  "Our advanced AI algorithms process your data with precision, ensuring that the manual burden of resume screening is eliminated while maintaining high accuracy in candidate evaluation."
                )}
              </div>
              
              <div className="mt-12 grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why it matters</h3>
                  <p>Streamlining this phase allows your HR team to focus on high-value interactions and cultural fit assessments.</p>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Benefits</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>90% reduction in manual work</li>
                    <li>Context-aware processing</li>
                    <li>Consistent evaluation criteria</li>
                  </ul>
                </div>
              </div>

              {/* Added detailed section matching previous landing content */}
              <div className="mt-20 pt-16 border-t border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Deep Dive: {step.title}</h3>
                <p className="mb-10 lg:text-xl">
                    Beyond simple automation, this stage of the process is where AI truly shines by providing deep analytical insights that were previously impossible to achieve at scale.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-gray-900">Focus on the Right Talent</h4>
                    <p>
                      Our AI-powered platform handles the heavy lifting of resume screening, allowing your team to focus on what matters most - connecting with top talent.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {workflowBottomItems.map((item) => (
                      <li key={item.id} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-green-600 text-xs">
                          ✔
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900 leading-none">{item.title}</p>
                          <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksDetailPage;
