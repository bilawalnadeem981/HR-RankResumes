import React from "react";
import { ctaFeatures, ctaStats } from "../../data";
import { CheckIcon } from "../../assets/icons/CTA/icon.jsx";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Start Your Free Trial
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-indigo-100">
            Join thousands of companies who have already revolutionized their
            recruitment with AI-powered resume ranking. No credit card required.
          </p>

          {/* Features */}
          <div className="space-y-4">
            {ctaFeatures.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckIcon />
                </div>
                <p className="text-white font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stats Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl space-y-8">
          <div className="grid grid-cols-2 gap-6">
            {ctaStats.map((stat) => (
              <div key={stat.id} className="bg-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-indigo-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;