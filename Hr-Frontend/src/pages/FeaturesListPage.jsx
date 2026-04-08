import React from 'react';
import { Link } from 'react-router-dom';
import { featuresData } from '../data';

const FeaturesListPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-10 pt-24">
            <h1 className="text-4xl font-bold mb-4 text-center">All Features</h1>
            <p className="text-gray-600 text-center mb-12 text-lg">
                Discover everything RankResumes can do for you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuresData.map((feature) => {
                    // Create the URL for this specific feature
                    const featureUrl = feature.title
                        .replace(/\s+/g, "-")
                        .toLowerCase();

                    return (
                        <Link
                            key={feature.title}
                            to={`/feature/${featureUrl}`}
                            className="border rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
                        >
                            <h2 className="text-xl font-bold mb-2 text-indigo-600">
                                {feature.title}
                            </h2>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default FeaturesListPage;