import React from "react";
import Sidebar from "../components/layout/Sidebar";

import StatsCards from "../components/dashboard/StatsCards";
import RecentActivity from "../components/dashboard/RecentActivity";
import AIAnalysis from "../components/dashboard/AIAnalysis";
import UploadButton from "../components/dashboard/UploadButton";

const DashboardPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-full">

        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="page-title">Dashboard</h1>

          {/* Quick Action */}
          <UploadButton />
        </header>

        {/* Content */}
        <main className="p-6 space-y-6">

          {/* 🔥 Stats Section */}
          <StatsCards />

          {/* 🔥 Middle Section */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Activity */}
            <div className="md:col-span-2">
              <RecentActivity />
            </div>

            {/* AI */}
            <AIAnalysis />

          </div>

          {/* 🔥 Extra Section (Future Ready) */}
          <div className="card-md">
            <h2 className="card-header">
              Quick Insights
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Most applicants are from Frontend role</li>
              <li>Average screening time reduced by 30%</li>
              <li>Top skill demand: React.js</li>
            </ul>
          </div>

        </main>

      </div>
    </div>
  );
};

export default DashboardPage;