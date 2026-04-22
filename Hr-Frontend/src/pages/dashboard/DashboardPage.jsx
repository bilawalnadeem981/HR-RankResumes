import React from "react";
import { useOutletContext } from "react-router-dom";
import StatsCards from "../../components/dashboard/StatsCards";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AIAnalysis from "../../components/dashboard/AIAnalysis";
import UploadButton from "../../components/ui/UploadButton";
import { Sparkles, ArrowRight, User, Briefcase, History } from "lucide-react";
import { statsData, userStatsData, recentActivityData, userActivityData } from "../../data";

const DashboardPage = () => {
  const { role } = useOutletContext();
  const isAdmin = role === "admin";

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 animate-fade-in">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-indigo-600 fill-indigo-100" />
            <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em]">
              {isAdmin ? "Recruitment Hub" : "Personal Workspace"}
            </span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            {isAdmin ? "Overview" : "My Dashboard"}
          </h1>
          <p className="text-gray-500 font-medium mt-1">
            {isAdmin 
              ? "Review your latest hiring metrics and candidate insights." 
              : "Track your application status and career progress."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <UploadButton />
        </div>
      </div>

      {/* Stats Section */}
      <StatsCards data={isAdmin ? statsData : userStatsData} />

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Activity Section */}
        <div className={`${isAdmin ? "lg:col-span-8" : "lg:col-span-12"} space-y-6`}>
          <RecentActivity 
            data={isAdmin ? recentActivityData : userActivityData} 
            title={isAdmin ? "Recent Activity" : "My Recent Activity"}
            role={role}
          />
          
          <div className="card-md bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-0 shadow-indigo-100 relative overflow-hidden group p-8">
            <div className="absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 bg-white/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md">
                <h2 className="text-2xl font-black mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-200" />
                  {isAdmin ? "Quick Insights" : "Career Growth"}
                </h2>
                <p className="text-indigo-100 font-medium leading-relaxed">
                  {isAdmin 
                    ? "Our AI detected a 30% increase in candidate quality for Engineering roles this week. Review your pipeline to capitalize on this trend."
                    : "You've improved your profile score by 15% this month! Keep adding your latest projects to increase your visibility to recruiters."}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                  <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em] mb-1">
                    {isAdmin ? "Success Rate" : "Profile Score"}
                  </p>
                  <p className="text-xl font-black text-emerald-400">
                    {isAdmin ? "92%" : "88%"}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                  <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em] mb-1">
                    {isAdmin ? "Time Saved" : "Rank"}
                  </p>
                  <p className="text-xl font-black text-white">
                    {isAdmin ? "45h" : "Top 5%"}
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 flex items-center gap-2 text-xs font-black text-white hover:text-indigo-200 transition-colors group/btn uppercase tracking-widest">
              {isAdmin ? "Explore Full Analytics" : "View Detailed Report"} <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Sidebar Analytics - Only for Admin */}
        {isAdmin && (
          <div className="lg:col-span-4 space-y-6">
            <AIAnalysis />
            
            <div className="card bg-gray-900 text-white border-0 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 -mb-8 -mr-8 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">Pro Optimization Tip</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">Configure "Auto-Shortlist" thresholds in your settings to automatically move top-tier talent through the pipeline while you sleep.</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-black text-gray-400 italic">
                  <span className="w-4 h-[1px] bg-gray-700"></span>
                  CORE RECRUITMENT ENGINE
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default DashboardPage;