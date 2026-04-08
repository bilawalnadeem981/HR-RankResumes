import React from "react";
import { featuresData } from "../../data";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/Feature.jsx"; // Lucide icons ya Heroicons

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Powerful Features for Modern HR
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Everything you need to streamline hiring and find the best talent faster
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Link
                to={`/feature/${f.title.replace(/\s+/g, "-").toLowerCase()}`}
                key={i}
                className="group bg-gray-50 p-6 rounded-2xl border transition-all hover:shadow-lg cursor-pointer"
              >
                {Icon && <Icon className="mb-4 w-10 h-10 text-indigo-500" />}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;