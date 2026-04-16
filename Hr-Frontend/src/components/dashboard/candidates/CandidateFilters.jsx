import React from "react";
import { useCandidateFilters } from "../../../hooks/dashboard/useCandidateFilters";

const CandidateFilters = ({ setCandidates, originalData }) => {
  const { filters, roles, statuses, handleFilterChange } = useCandidateFilters(originalData, setCandidates);

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="text"
        name="search"
        placeholder="Search by name or email"
        value={filters.search}
        onChange={handleFilterChange}
        className="form-input flex-1"
      />

      <select
        name="role"
        value={filters.role}
        onChange={handleFilterChange}
        className="form-select"
      >
        {roles.map((role, i) => (
          <option key={i} value={role}>
            {role}
          </option>
        ))}
      </select>

      <select
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
        className="form-select"
      >
        {statuses.map((status, i) => (
          <option key={i} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CandidateFilters;