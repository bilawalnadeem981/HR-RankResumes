import React from "react";
import { useUserFilters } from "../../../hooks/dashboard/useUserFilters";
import { Search, Shield, Activity } from "lucide-react";

const UsersFilters = ({ originalData, setUsers }) => {
  const {
    filters,
    roles,
    statuses,
    handleSearchChange,
    handleRoleChange,
    handleStatusChange,
  } = useUserFilters(originalData, setUsers);

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm mb-6">
      <div className="relative flex-1 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
        <input
          type="text"
          placeholder="Search by name, email or role..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-transparent focus:border-indigo-100 focus:bg-indigo-50/30 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
          value={filters.search}
          onChange={(event) => handleSearchChange(event.target.value)}
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto px-2">
        <div className="flex items-center gap-2 text-gray-400 min-w-max hidden sm:flex">
          <Shield className="w-4 h-4" />
          <span className="text-xs font-black uppercase tracking-widest">Access</span>
        </div>

        <select
          className="flex-1 md:w-48 px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer hover:bg-gray-100"
          value={filters.role}
          onChange={(event) => handleRoleChange(event.target.value)}
        >
          {roles.map((r, i) => (
            <option key={i} value={r}>
              {r === "All" ? "All Roles" : r}
            </option>
          ))}
        </select>

        <select
          className="flex-1 md:w-40 px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer hover:bg-gray-100"
          value={filters.status}
          onChange={(event) => handleStatusChange(event.target.value)}
        >
          {statuses.map((s, i) => (
            <option key={i} value={s}>
              {s === "All" ? "All Statuses" : s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UsersFilters;
