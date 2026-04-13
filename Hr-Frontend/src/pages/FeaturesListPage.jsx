import React from "react";
import { featuresData } from "../data";
import { Link } from "react-router-dom";
import { icons } from "../assets/icons/Feature.jsx";
import { createSlug } from "../utils/common/helper";

const FeaturesListPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 pt-32">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        All Features
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((f) => {
          const Icon = icons[f.icon];

          return (
            <Link
              key={f.id}
              to={`/feature/${createSlug(f.title)}`}
              className="p-6 border rounded-2xl hover:shadow-xl transition"
            >
              {Icon && <Icon className="w-10 h-10 mb-3 text-indigo-500" />}
              <h2 className="text-xl font-bold mb-2">{f.title}</h2>
              <p className="text-gray-600">{f.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesListPage;