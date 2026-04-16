import { useState, useEffect } from "react";
import { filterDataBySearchTerm } from "../../utils/common/helper";

export const useCandidateFilters = (originalData, setCandidates) => {
  const [filters, setFilters] = useState({
    search: "",
    role: "All",
    status: "All",
  });

  const roles = ["All", ...new Set(originalData.map((c) => c.role || "Developer"))];
  const statuses = ["All", ...new Set(originalData.map((c) => c.status))];

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    // Business logic extracted to helper and hook
    let filtered = filterDataBySearchTerm(originalData, filters.search, ["name", "email"]);

    if (filters.role !== "All") {
      filtered = filtered.filter((c) => (c.role || "Developer") === filters.role);
    }

    if (filters.status !== "All") {
      filtered = filtered.filter((c) => c.status === filters.status);
    }

    setCandidates(filtered);
  }, [filters, originalData, setCandidates]);

  return {
    filters,
    roles,
    statuses,
    handleFilterChange,
  };
};
