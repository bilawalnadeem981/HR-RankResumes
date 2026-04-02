import React from "react";
import { statsData } from "../../data";
import { icons } from "../../assets/icons/StatsCards/icon.jsx";

const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6">
      {statsData.map((item, index) => {
        const Icon = icons[item.icon];

        // ✅ Safety check (kabhi crash nahi hoga)
        if (!Icon) {
          console.log("Missing icon:", item.icon);
          return null;
        }

        return (
          <div
            key={index}
            className="card-md flex items-center gap-3"
          >
            <Icon className={`${item.color} w-6 h-6`} />

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