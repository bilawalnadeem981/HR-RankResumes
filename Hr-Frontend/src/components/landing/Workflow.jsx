import React from "react";
import { workflowSteps, workflowBottomItems, gradientMap } from "../../data";



const Workflow = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-violet-50 relative overflow-hidden">
      <span className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></span>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">How It Works</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">Streamline Your Hiring Workflow</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Three simple steps to transform your recruitment process</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {workflowSteps.map((step) => (
            <article key={step.id} className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 border border-gray-100 text-center">
              <span className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform rotate-12 bg-gradient-to-br ${gradientMap[step.color]}`}>
                {step.number}
              </span>
              <div className="text-6xl mb-6">{step.icon}</div>
              <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Focus on Great Candidates, Not on Screening</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our AI-powered platform handles the heavy lifting of resume screening, allowing your team to focus on what matters most - connecting with top talent and making great hires.
            </p>
            <ul className="space-y-4">
              {workflowBottomItems.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✔
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;