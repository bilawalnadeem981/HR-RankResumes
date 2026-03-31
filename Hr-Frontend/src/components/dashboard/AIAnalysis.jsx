import React from "react";
import { aiAnalysisData } from "../../data";

const AIAnalysis = () => {
  return (
    <div className="card">
      <h2 className="card-header">AI Analysis</h2>

      {aiAnalysisData.map((item) => (
        <p key={item.id} className="mb-2">
          {item.label}: <b>{item.value}</b>
        </p>
      ))}
    </div>
  );
};

export default AIAnalysis;