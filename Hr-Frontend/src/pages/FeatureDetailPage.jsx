import React from "react";
import { useParams } from "react-router-dom";
import { featuresData } from "../data";
import { icons } from "../assets/icons/Feature.jsx";

const FeatureDetailPage = () => {
    const { featureId } = useParams();

    const feature = featuresData.find(
        f => f.title.replace(/\s+/g, "-").toLowerCase() === featureId
    );

    if (!feature) return <div className="p-10 text-center text-red-500">Feature not found</div>;

    return (
        <div className="max-w-4xl mx-auto p-10 pt-24">
            <h1 className="text-3xl font-bold mb-4">{feature.title}</h1>
            <p className="text-gray-700 text-lg">{feature.description}</p>
        </div>
    );
};

export default FeatureDetailPage;