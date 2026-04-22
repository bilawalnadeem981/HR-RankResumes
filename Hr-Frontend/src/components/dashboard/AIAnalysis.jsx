import React from "react";
import { aiAnalysisData } from "../../data";
import { Brain, TrendingUp } from "lucide-react";

const AIAnalysis = () => {
  return (
    <div className="card-md h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="card-header !mb-0">
          <Brain className="w-5 h-5 text-indigo-600" />
          AI Analysis
        </h2>
        <TrendingUp className="w-4 h-4 text-emerald-500" />
      </div>

      <div className="space-y-5 flex-1">
        {aiAnalysisData.stats.slice(0, 3).map((item, index) => {
          const Icon = item.icon;
          const valueNum = parseInt(item.value);
          const isPercentage = item.value.includes('%');

          return (
            <div key={index} className="group cursor-default">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg bg-gray-50 flex-shrink-0 group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-100 ${item.color}`}>
                    {Icon && <Icon className="w-4 h-4" />}
                  </div>
                  <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 transition-colors uppercase tracking-tight">{item.label}</p>
                </div>
                <p className="text-sm font-black text-gray-900">{item.value}</p>
              </div>
              
              {isPercentage && (
                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden ring-1 ring-gray-100 shadow-inner">
                  <div 
                    className={`h-full transition-all duration-1000 ease-out group-hover:opacity-100 opacity-85 ${item.color.replace('text-', 'bg-')}`}
                    style={{ width: item.value }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button className="mt-6 w-full py-2.5 px-4 bg-gray-50 text-gray-600 text-sm font-bold rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-gray-100 hover:border-indigo-100 shadow-sm">
        View Detailed Report
      </button>
    </div>
  );
};

export default AIAnalysis;