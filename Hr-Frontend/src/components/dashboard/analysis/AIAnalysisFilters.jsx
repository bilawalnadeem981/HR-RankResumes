import React from "react";

const AIAnalysisFilters = ({ filters, onSearchChange, onRoleChange, onMatchLevelChange }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search reports..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
      
      <select 
        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
        onChange={(event) => onRoleChange(event.target.value)}
      >
        {filters.roles.map((role, i) => (
          <option key={i} value={role}>{role}</option>
        ))}
      </select>
      
      <select 
        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
        onChange={(event) => onMatchLevelChange(event.target.value)}
      >

        {filters.matchLevels.map((level, i) => (
          <option key={i} value={level}>{level}</option>
        ))}
      </select>
    </div>
  );
};

export default AIAnalysisFilters;
