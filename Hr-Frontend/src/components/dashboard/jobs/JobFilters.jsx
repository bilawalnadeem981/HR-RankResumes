import React, { useState, useEffect } from "react";

const JobFilters = ({ originalData, setJobs }) => {
  const [filters, setFilters] = useState({
    search: "",
    department: "All",
    status: "All",
  });

  const departments = ["All", ...new Set(originalData.map(j => j.department))];
  const statuses = ["All", ...new Set(originalData.map(j => j.status))];

  useEffect(() => {
    let filtered = [...originalData];

    if (filters.search) {
      filtered = filtered.filter(j =>
        j.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.department !== "All") {
      filtered = filtered.filter(j => j.department === filters.department);
    }

    if (filters.status !== "All") {
      filtered = filtered.filter(j => j.status === filters.status);
    }

    setJobs(filtered);
  }, [filters, originalData, setJobs]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search jobs..."
        className="border p-2 rounded w-full"
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <select
        className="border p-2 rounded"
        onChange={(e) => setFilters({ ...filters, department: e.target.value })}
      >
        {departments.map((d, i) => <option key={i}>{d}</option>)}
      </select>

      <select
        className="border p-2 rounded"
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        {statuses.map((s, i) => <option key={i}>{s}</option>)}
      </select>
    </div>
  );
};

export default JobFilters;