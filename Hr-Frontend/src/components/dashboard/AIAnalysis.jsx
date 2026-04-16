import React from "react";
import { aiAnalysisData } from "../../data";

const AIAnalysis = () => {
  return (
    <div className="card">
      <h2 className="card-header">AI Analysis</h2>

      {aiAnalysisData.stats.slice(0, 3).map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex items-center gap-3 mb-3 last:mb-0">
            <div className={`p-2 rounded bg-gray-50 ${item.color}`}>
              {Icon && <Icon className="w-4 h-4" />}
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{item.label}</p>
              <p className="font-bold text-gray-900">{item.value}</p>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default AIAnalysis;