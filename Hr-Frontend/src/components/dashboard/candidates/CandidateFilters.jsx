import React from "react";
import { useCandidateFilters } from "../../../hooks/dashboard/useCandidateFilters";
import { Search, Filter, Briefcase } from "lucide-react";

const CandidateFilters = ({ setCandidates, originalData }) => {
  const { filters, roles, statuses, handleFilterChange } = useCandidateFilters(originalData, setCandidates);

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
      <div className="relative flex-1 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
        <input
          type="text"
          name="search"
          placeholder="Search by candidate name or contact email..."
          value={filters.search}
          onChange={handleFilterChange}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-transparent focus:border-indigo-100 focus:bg-indigo-50/30 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto px-2">
        <div className="flex items-center gap-2 text-gray-400 min-w-max hidden sm:flex">
          <Briefcase className="w-4 h-4" />
          <span className="text-xs font-black uppercase tracking-widest">Filter By</span>
        </div>

        <select
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          className="flex-1 md:w-48 px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer hover:bg-gray-100"
        >
          {roles.map((role, i) => (
            <option key={i} value={role}>
              {role === "All" ? "All Roles" : role}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="flex-1 md:w-48 px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer hover:bg-gray-100"
        >
          {statuses.map((status, i) => (
            <option key={i} value={status}>
              {status === "All" ? "All Statuses" : status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CandidateFilters;