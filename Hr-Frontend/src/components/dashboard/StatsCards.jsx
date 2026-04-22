import React from "react";
import { statsData } from "../../data";

const StatsCards = ({ data = statsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {data.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className="card flex items-center gap-4 card-hover overflow-hidden relative group">
            <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-current opacity-[0.03] rounded-full transition-transform duration-500 group-hover:scale-125 ${item.color.replace('text-', 'bg-')}`}></div>
            
            <div className={`p-4 rounded-2xl bg-gray-50 transition-colors duration-300 group-hover:bg-white shadow-sm ring-1 ring-gray-100 ${item.color}`}>
              {Icon && <Icon className="w-7 h-7" />}
            </div>

            <div className="z-10">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{item.title}</p>
              <h2 className="text-3xl font-black text-gray-900 mt-0.5">{item.value}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;