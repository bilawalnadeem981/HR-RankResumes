import StatsCards from "../components/dashboard/StatsCards";
import RecentActivity from "../components/dashboard/RecentActivity";
import AIAnalysis from "../components/dashboard/AIAnalysis";
import UploadButton from "../components/dashboard/UploadButton";

const DashboardPage = () => {
  return (
    <div className="space-y-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="page-title">Dashboard</h1>
          <UploadButton />
        </div>

        <StatsCards />

        <div className="grid md:grid-cols-3 gap-6">

          <div className="md:col-span-2">
            <RecentActivity />
          </div>

          <AIAnalysis />

        </div>

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

    </div>
  );
};

export default DashboardPage;