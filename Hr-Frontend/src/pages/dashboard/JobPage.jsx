import React, { useState } from "react";
import { jobOpeningsData } from "../../data";
import JobFilters from "../../components/dashboard/jobs/JobFilters";
import JobTable from "../../components/dashboard/jobs/table/JobTable";
import JobStats from "../../components/dashboard/jobs/JobStats";
import { Briefcase, Plus, Search } from "lucide-react";

const JobsPage = () => {
  const [jobs, setJobs] = useState(jobOpeningsData);

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 animate-fade-in p-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-indigo-600 fill-indigo-100" />
            <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em]">Hiring Pipeline</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Job Openings</h1>
          <p className="text-gray-500 font-medium mt-1">Manage and track your active recruitment positions.</p>
        </div>
        <button className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-2xl shadow-lg shadow-indigo-100 hover:shadow-indigo-300 transition-all duration-300 active:scale-95">
          <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
          Create New Job
        </button>
      </div>

      <JobStats jobs={jobs} />

      <div className="space-y-6">
        <JobFilters originalData={jobOpeningsData} setJobs={setJobs} />
        <JobTable jobs={jobs} />
      </div>

    </div>
  );
};

export default JobsPage;