import { useState, useEffect } from "react";
import { filterDataBySearchTerm } from "../../utils/common/helper";

export const useJobFilters = (originalData, setJobs) => {
  const [filters, setFilters] = useState({
    search: "",
    department: "All",
    status: "All",
  });

  const departments = ["All", ...new Set(originalData.map((j) => j.department))];
  const statuses = ["All", ...new Set(originalData.map((j) => j.status))];

  const handleSearchChange = (value) => setFilters((prev) => ({ ...prev, search: value }));
  const handleDepartmentChange = (value) => setFilters((prev) => ({ ...prev, department: value }));
  const handleStatusChange = (value) => setFilters((prev) => ({ ...prev, status: value }));

  useEffect(() => {
    let filtered = filterDataBySearchTerm(originalData, filters.search, ["title", "department"]);

    if (filters.department !== "All") {
      filtered = filtered.filter((j) => j.department === filters.department);
    }

    if (filters.status !== "All") {
      filtered = filtered.filter((j) => j.status === filters.status);
    }

    setJobs(filtered);
  }, [filters, originalData, setJobs]);

  return {
    filters,
    departments,
    statuses,
    handleSearchChange,
    handleDepartmentChange,
    handleStatusChange,
  };
};
