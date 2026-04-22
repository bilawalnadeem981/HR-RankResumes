import React from "react";
import { Briefcase, CheckCircle, XCircle } from "lucide-react";

const JobStats = ({ jobs }) => {
  const total = jobs.length;
  const open = jobs.filter(j => j.status === "Open").length;
  const closed = jobs.filter(j => j.status === "Closed").length;

  const stats = [
    { label: "Total Openings", value: total, icon: Briefcase, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Active Jobs", value: open, icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Closed Posts", value: closed, icon: XCircle, color: "text-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="card flex items-center gap-4 card-hover relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 ${stat.bg} opacity-[0.2] rounded-full transition-transform duration-500 group-hover:scale-125`}></div>
            
            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} transition-all duration-300 group-hover:scale-110 shadow-sm ring-1 ring-white/50`}>
              <stat.icon className="w-6 h-6" />
            </div>

            <div className="z-10">
              <p className="text-xs font-black text-gray-400 uppercase tracking-[0.1em]">{stat.label}</p>
              <h2 className="text-3xl font-black text-gray-900 mt-1">{stat.value}</h2>
            </div>
        </div>
      ))}
    </div>
  );
};

export default JobStats;