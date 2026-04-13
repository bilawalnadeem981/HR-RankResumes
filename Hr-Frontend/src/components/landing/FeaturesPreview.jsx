import React from "react";
import { featuresData } from "../../data";
import { Link } from "react-router-dom";
import { createSlug } from "../../utils/common/helper";

const FeaturesPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.slice(0, 3).map((f) => (
            <Link
              key={f.id}
              to={`/feature/${createSlug(f.title)}`}
              className="group bg-gray-50 p-6 rounded-2xl border hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/features" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            View All Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;