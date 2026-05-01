import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sidebarMenu } from "../../data";
import { LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const filteredMenu = sidebarMenu.filter(item => !item.adminOnly || role === "admin");

  return (
    <div
      className={`bg-indigo-600 text-white h-screen p-4 flex flex-col transition-all duration-300 ${collapsed ? "w-20" : "w-64"
        }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-8 flex items-center justify-center p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 group"
      >
        {collapsed ? (
          <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        ) : (
          <div className="flex items-center gap-2 px-2">
            <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-wider">Collapse</span>
          </div>
        )}
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

      {/* Logout Button */}
      <div className="mt-auto pt-4 border-t border-indigo-500/30">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center ${collapsed ? "justify-center" : "gap-4"} p-3 rounded-xl hover:bg-rose-500/20 text-indigo-100 hover:text-white transition-all group`}
        >
          <LogOut size={20} className="group-hover:scale-110 transition-transform" />
          {!collapsed && <span className="font-semibold">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;