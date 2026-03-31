import React from "react";
import { featuresData } from "../../data";
import { icons } from "../../assets/icons/Features/icon.jsx";

const Features = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Powerful Features for Modern HR</h2>
        <p className="text-xl text-gray-600 mt-4">Everything you need to streamline hiring and find the best talent faster</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <div key={i} className="group bg-gray-50 p-8 rounded-2xl border hover:shadow-lg transition">
              <Icon className="mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 mb-4">{f.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Features;