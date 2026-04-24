import React from "react";

const SettingsFilters = ({
  filters,
  onSearchChange,
  onCategoryChange,
  onTypeChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">

      <div className="flex-1">
        <input
          type="text"
          placeholder="Search settings..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <select
        className="px-4 py-2 border border-gray-200 rounded-lg bg-white"
        onChange={(e) => onRoleChange(e.target.value)}
      >
        {(filters?.roles || []).map((role, i) => (
          <option key={i} value={role}>
            {role}
          </option>
        ))}
      </select>

      <select
        className="px-4 py-2 border border-gray-200 rounded-lg bg-white"
        onChange={(e) => onMatchLevelChange(e.target.value)}
      >
        {(filters?.matchLevels || []).map((level, i) => (
          <option key={i} value={level}>
            {level}
          </option>
        ))}
      </select>

    </div>
  );
};

export default SettingsFilters;