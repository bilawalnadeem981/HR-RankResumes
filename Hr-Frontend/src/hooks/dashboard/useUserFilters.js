import { useState, useEffect } from "react";
import { filterDataBySearchTerm } from "../../utils/common/helper";

export const useUserFilters = (originalUsers, setUsers) => {
  const [filters, setFilters] = useState({
    search: "",
    role: "All",
    status: "All",
  });

  const roles = ["All", ...new Set(originalUsers?.map((u) => u.role) || [])];
  const statuses = ["All", ...new Set(originalUsers?.map((u) => u.status) || [])];

  useEffect(() => {
    let filtered = originalUsers || [];

    if (filters.search) {
      filtered = filterDataBySearchTerm(filtered, filters.search);
    }

    if (filters.role !== "All") {
      filtered = filtered.filter((u) => u.role === filters.role);
    }

    if (filters.status !== "All") {
      filtered = filtered.filter((u) => u.status === filters.status);
    }

    setUsers(filtered);
  }, [filters, originalUsers, setUsers]);

  const handleSearchChange = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const handleRoleChange = (role) => {
    setFilters((prev) => ({ ...prev, role }));
  };

  const handleStatusChange = (status) => {
    setFilters((prev) => ({ ...prev, status }));
  };

  return {
    filters,
    roles,
    statuses,
    handleSearchChange,
    handleRoleChange,
    handleStatusChange,
  };
};
