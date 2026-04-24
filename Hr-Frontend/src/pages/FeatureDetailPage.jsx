import React from "react";
import { useParams, Link } from "react-router-dom";
import { featuresData, gradientMap } from "../data";

import { findBySlug } from "../utils/common/helper";


const FeatureDetailPage = () => {
  const { id } = useParams();
  const feature = findBySlug(featuresData, id);

  if (!feature) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Feature Not Found</h1>
        <Link to="/features" className="text-indigo-600">
          Back
        </Link>
      </div>
    );
  }

  const Icon = feature.icon;


  return (
    <div className="max-w-4xl mx-auto pt-32 p-6">
      
      <Link to="/features" className="text-indigo-600">
        ← Back
      </Link>

      <div className="flex items-center gap-4 mt-6">
        {Icon && <Icon className="w-12 h-12 text-indigo-500" />}
        <h1 className="text-4xl font-bold">{feature.title}</h1>
      </div>

      <p className="mt-6 text-gray-700 text-lg">
        {feature.fullDescription}
      </p>

      <div className="mt-6 grid gap-3">
        {feature.points?.map((p, i) => (
          <div key={i} className="p-3 border rounded">
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDetailPage;