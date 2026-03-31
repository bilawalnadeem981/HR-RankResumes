import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../data";
import { sidebarIcons } from "../../assets/icons/Sidebar/icon.jsx";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`bg-indigo-600 text-white h-screen p-4 transition-all ${collapsed ? "w-20" : "w-64"}`}>
      <button
        className="mb-6 px-2 py-1 bg-indigo-500 rounded"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "→" : "←"}
      </button>

      <ul className="space-y-4">
        {sidebarMenu.map((item, index) => {
          const Icon = sidebarIcons[item.icon];
          return (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-2 rounded hover:bg-indigo-500 ${isActive ? "bg-indigo-700" : ""}`
                }
              >
                <Icon />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;