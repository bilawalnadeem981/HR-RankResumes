import React from "react";
import { statsData } from "../../data";

const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6">
      {statsData.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className="card-md flex items-center gap-3">
            {Icon && <Icon className={`w-6 h-6 ${item.color}`} />}

            <div>
              <p className="text-gray-500">{item.title}</p>
              <h2 className="page-title">{item.value}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;