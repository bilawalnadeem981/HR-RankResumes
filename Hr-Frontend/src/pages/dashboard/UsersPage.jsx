import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { usersData } from "../../data";
import UsersStats from "../../components/dashboard/users/UsersStats";
import UsersFilters from "../../components/dashboard/users/UsersFilters";
import UsersTable from "../../components/dashboard/users/UsersTable";
import { Shield, UserPlus, Sparkles, Lock } from "lucide-react";

const UsersPage = () => {
  const { role } = useOutletContext();
  const isAdmin = role === "admin";
  const [users, setUsers] = useState(usersData?.users || []);
  const header = usersData?.header || {};

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 shadow-xl shadow-rose-100 animate-bounce">
          <Lock className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Access Restricted</h2>
          <p className="text-gray-500 font-medium mt-2 max-w-sm mx-auto">
            You don't have the necessary permissions to access the Security Console. Please contact your administrator.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 animate-fade-in">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-indigo-600 fill-indigo-100" />
            <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em]">Security Console</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">{header.title}</h1>
          <p className="text-gray-500 font-medium mt-1">{header.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-2xl shadow-lg shadow-indigo-100 hover:shadow-indigo-300 transition-all duration-300 active:scale-95">
            <UserPlus className="w-5 h-5 transition-transform group-hover:scale-110" />
            {header.actionButton}
          </button>
        </div>
      </div>

      <UsersStats stats={usersData?.stats || []} />

      <div className="space-y-6 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50">
        <div className="flex items-center gap-2 px-2">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest">Global Directory</h2>
        </div>

        <div className="space-y-6">
          <button 
            disabled 
            className="hidden admin-action opacity-50 cursor-not-allowed"
            title="Admin only feature examples"
          >
            Bulk Delete (Admin Only)
          </button>
          <UsersFilters originalData={usersData?.users} setUsers={setUsers} />
          <UsersTable users={users} />
        </div>
      </div>

    </div>
  );
};

export default UsersPage;
