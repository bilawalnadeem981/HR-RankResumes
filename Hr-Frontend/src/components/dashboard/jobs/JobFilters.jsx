import React from "react";
import { useJobFilters } from "../../../hooks/dashboard/useJobFilters";

const JobFilters = ({ originalData, setJobs }) => {
  const {
    filters,
    departments,
    statuses,
    handleSearchChange,
    handleDepartmentChange,
    handleStatusChange,
  } = useJobFilters(originalData, setJobs);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search jobs..."
        className="form-input w-full"
        value={filters.search}
        onChange={(event) => handleSearchChange(event.target.value)}
      />

      <select
        className="form-select min-w-[150px]"
        value={filters.department}
        onChange={(event) => handleDepartmentChange(event.target.value)}
      >
        {departments.map((d, i) => (
          <option key={i} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        className="form-select min-w-[150px]"
        value={filters.status}
        onChange={(event) => handleStatusChange(event.target.value)}
      >

        {statuses.map((s, i) => (
          <option key={i} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default JobFilters;