import React from "react";
import { Search, Bell, Settings, ChevronDown, HelpCircle, Shield, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = ({ role }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 px-8 py-3 flex items-center justify-between">
      <div className="flex-1 max-w-xl group">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
          <input
            type="text"
            placeholder="Search candidates, jobs, or analytics..."
            className="w-full bg-gray-50 border border-transparent focus:border-indigo-100 focus:bg-white pl-11 pr-4 py-2.5 rounded-2xl outline-none transition-all font-medium text-sm text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-3 pr-6 border-r border-gray-100">
          <button className="p-2 rounded-xl text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all group relative">
            <HelpCircle className="w-5 h-5" />
          </button>

          <button className="p-2 rounded-xl text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all group relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white ring-2 ring-rose-100"></span>
          </button>

          <button 
            onClick={handleLogout}
            title="Logout"
            className="p-2 rounded-xl text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-all group relative ml-2"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-sm font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
              {user?.fullName || (role === "admin" ? "Admin User" : "Standard User")}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
              {role === "admin" ? "Super Admin" : "Full Access User"}
            </span>
          </div>
          <div className="relative">
            <div className={`w-10 h-10 rounded-2xl ${role === 'admin' ? 'bg-indigo-600' : 'bg-emerald-600'} flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-100 group-hover:scale-105 transition-transform duration-300`}>
              {user?.fullName ? user.fullName.substring(0, 2).toUpperCase() : (role === "admin" ? "AU" : "SU")}
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
        </div>
      </div>
    </header>

  );
};

export default Header;
