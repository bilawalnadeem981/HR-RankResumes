import React from "react";
import { recentActivityData } from "../../data";
import { Clock, CheckCircle, Upload, XCircle, ArrowRight } from "lucide-react";

const RecentActivity = ({ data = recentActivityData, title = "Recent Activity", role = "admin" }) => {
  const getIcon = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("uploaded") || lowerText.includes("received")) return <Upload className="w-4 h-4 text-blue-500" />;
    if (lowerText.includes("shortlisted") || lowerText.includes("success")) return <CheckCircle className="w-4 h-4 text-emerald-500" />;
    if (lowerText.includes("rejected")) return <XCircle className="w-4 h-4 text-rose-500" />;
    return <Clock className="w-4 h-4 text-gray-400" />;
  };

  const getStatus = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("uploaded") || lowerText.includes("received")) return { label: "Pending", color: "bg-blue-50 text-blue-600 border-blue-100" };
    if (lowerText.includes("shortlisted") || lowerText.includes("success")) return { label: "Success", color: "bg-emerald-50 text-emerald-600 border-emerald-100" };
    if (lowerText.includes("rejected")) return { label: "Closed", color: "bg-rose-50 text-rose-600 border-rose-100" };
    return { label: "Info", color: "bg-gray-50 text-gray-600 border-gray-100" };
  };

  return (
    <div className="card-md h-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="card-header !mb-0">
          <Clock className="w-5 h-5 text-indigo-600" />
          {title}
        </h2>
        <button className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-700 transition-colors">
          {role === "admin" ? "View Audit Log" : "View My History"}
        </button>
      </div>

      <div className="relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
        {data.map((activity, index) => {
          const status = getStatus(activity.text);
          const lowerText = activity.text.toLowerCase();
          return (
            <div key={activity.id} className="relative group p-3 rounded-2xl hover:bg-gray-50/80 transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className={`absolute -left-[23px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white ring-4 ring-gray-100 transition-all duration-300 group-hover:scale-125 z-10 
                ${lowerText.includes("shortlisted") || lowerText.includes("success") ? "bg-emerald-500" : 
                  lowerText.includes("rejected") ? "bg-rose-500" : 
                  lowerText.includes("uploaded") || lowerText.includes("received") ? "bg-blue-500" : "bg-indigo-400"}`}
              ></div>
              
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="p-2.5 rounded-xl bg-white shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform border border-gray-50">
                    {getIcon(activity.text)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-gray-900 truncate">
                      {activity.text}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">2 hours ago</span>
                      <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-tight">
                        {role === "admin" ? "Action ID: #4521" : "Activity Log"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                   <span className={`hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border tracking-widest ${status.color}`}>
                    {status.label}
                  </span>
                  <button className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all opacity-0 group-hover:opacity-100">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;