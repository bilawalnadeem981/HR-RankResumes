import React, { useState, useEffect } from "react";

const CandidateFilters = ({ candidates, setCandidates, originalData }) => {
  const [filters, setFilters] = useState({
    search: "",
    role: "All",
    status: "All",
  });

  const roles = ["All", ...new Set(originalData.map((c) => c.role || "Developer"))];
  const statuses = ["All", ...new Set(originalData.map((c) => c.status))];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    let filtered = [...originalData];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(searchLower) ||
          c.email.toLowerCase().includes(searchLower)
      );
    }

    if (filters.role !== "All") {
      filtered = filtered.filter((c) => (c.role || "Developer") === filters.role);
    }

    if (filters.status !== "All") {
      filtered = filtered.filter((c) => c.status === filters.status);
    }

    setCandidates(filtered);
  }, [filters, originalData, setCandidates]);

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