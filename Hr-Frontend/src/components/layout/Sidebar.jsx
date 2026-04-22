import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../data";

const Sidebar = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);

  const filteredMenu = sidebarMenu.filter(item => !item.adminOnly || role === "admin");

  return (
    <div
      className={`bg-indigo-600 text-white h-screen p-4 transition-all duration-300 ${collapsed ? "w-20" : "w-64"
        }`}
    >
      <button
        className="mb-6 px-2 py-1 bg-indigo-500 rounded w-full"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "→" : "←"}
      </button>

      <ul className="space-y-4">
        {filteredMenu.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center ${collapsed ? "justify-center" : "gap-4"
                  } p-2 rounded hover:bg-indigo-500 transition ${isActive ? "bg-indigo-700" : ""
                  }`
                }
              >
                <Icon size={20} />

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