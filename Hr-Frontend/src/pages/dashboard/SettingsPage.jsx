import React from "react";
import { settingsData } from "../../data";
import SettingsStats from "../../components/dashboard/settings/SettingsStats";
import SettingsFilters from "../../components/dashboard/settings/SettingsFilters";
import SettingsTable from "../../components/dashboard/settings/SettingsTable";
import { useSettingsFilters } from "../../hooks/dashboard/useSettingsFilters";

const SettingsPage = () => {
  const { header = {}, stats = [], settings: originalSettings = [], filters: dataFilters = {} } = settingsData || {};

  const {
    settings = [],
    searchTerm,
    selectedCategory,
    selectedType,
    setSearchTerm,
    setSelectedCategory,
    setSelectedType,
    resetFilters,
  } = useSettingsFilters(originalSettings);

  return (
    <div className="p-6 max-w-[1600px] mx-auto">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{header?.title || "Settings"}</h1>
          <p className="text-gray-500 mt-1">{header?.description || "Manage your preferences"}</p>
        </div>

        <button className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-sm">
          {header?.actionButton || "Save"}
        </button>
      </div>

      <SettingsStats stats={stats} />

      <SettingsFilters
        filters={dataFilters}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
        onReset={resetFilters}
      />

      {(settings?.length || 0) > 0 ? (
        <SettingsTable reports={settings} />
      ) : (
        <div className="bg-white border border-dashed border-gray-300 rounded-xl p-12 text-center">
          <p className="text-gray-500 text-lg">
            No settings found matching your criteria.
          </p>

          <button
            onClick={resetFilters}
            className="text-indigo-600 font-bold mt-2"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;