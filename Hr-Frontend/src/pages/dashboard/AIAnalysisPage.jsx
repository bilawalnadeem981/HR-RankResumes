import React, { useState, useEffect } from "react";
import { aiAnalysisData } from "../../data";
import AIAnalysisStats from "../../components/dashboard/analysis/AIAnalysisStats";
import AIAnalysisFilters from "../../components/dashboard/analysis/AIAnalysisFilters";
import AIAnalysisTable from "../../components/dashboard/analysis/AIAnalysisTable";
import { filterDataBySearchTerm } from "../../utils/common/helper";


const AIAnalysisPage = () => {
  const { header, stats, reports: originalReports, filters: dataFilters } = aiAnalysisData;
  
  const [reports, setReports] = useState(originalReports);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedMatchLevel, setSelectedMatchLevel] = useState("All");

  useEffect(() => {
    let filtered = filterDataBySearchTerm(originalReports, searchTerm, ["candidate", "role"]);

    if (selectedRole !== "All") {
      filtered = filtered.filter(report => report.role === selectedRole);
    }

    if (selectedMatchLevel !== "All") {
      filtered = filtered.filter(report => report.skillsMatch === selectedMatchLevel);
    }

    setReports(filtered);
  }, [searchTerm, selectedRole, selectedMatchLevel, originalReports]);

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header Section - Matches JobPage structure */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{header.title}</h1>
          <p className="text-gray-500 mt-1">{header.description}</p>
        </div>
        <button className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-sm self-start md:self-auto">
          {header.actionButton}
        </button>
      </div>

      {/* Stats Section */}
      <AIAnalysisStats stats={stats} />

      {/* Filters Section */}
      <AIAnalysisFilters 
        filters={dataFilters} 
        onSearchChange={setSearchTerm}
        onRoleChange={setSelectedRole}
        onMatchLevelChange={setSelectedMatchLevel}
      />

      {/* Main View Area */}
      {reports.length > 0 ? (
        <AIAnalysisTable reports={reports} />
      ) : (
        <div className="bg-white border border-dashed border-gray-300 rounded-xl p-12 text-center">
          <p className="text-gray-500 text-lg">No analysis reports found matching your criteria.</p>
          <button 
            onClick={() => {
              setSearchTerm("");
              setSelectedRole("All");
              setSelectedMatchLevel("All");
            }}
            className="text-indigo-600 font-bold mt-2"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AIAnalysisPage;