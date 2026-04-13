import React from "react";
import { featuresData } from "../../data";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/Feature.jsx";
import { createSlug } from "../../utils/common/helper";

const Features = ({ preview = true }) => {
  const dataToShow = preview ? featuresData.slice(0, 3) : featuresData;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-6">
          Powerful Features for Modern HR
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataToShow.map((f) => {
            const Icon = icons[f.icon];

            return (
              <Link
                key={f.id}
                to={`/feature/${createSlug(f.title)}`}
                className="group bg-gray-50 p-6 rounded-2xl border hover:shadow-lg hover:-translate-y-1 transition"
              >
                {Icon && <Icon className="w-10 h-10 mb-3 text-indigo-500" />}
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/features"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            View All Features
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Features;