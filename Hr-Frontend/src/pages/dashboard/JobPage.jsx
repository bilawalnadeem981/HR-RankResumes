import React, { useState } from "react";
import { jobOpeningsData } from "../../data";
import JobFilters from "../../components/dashboard/jobs/JobFilters";
import JobTable from "../../components/dashboard/jobs/table/JobTable";
import JobStats from "../../components/dashboard/jobs/JobStats";


const JobsPage = () => {
  const [jobs, setJobs] = useState(jobOpeningsData);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Job Openings</h1>
          <p className="text-gray-500">Manage all your job listings</p>
        </div>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          + Add Job
        </button>
      </div>

      <JobStats jobs={jobs} />

      <JobFilters originalData={jobOpeningsData} setJobs={setJobs} />

      <JobTable jobs={jobs} />
    </div>
  );
};

export default JobsPage;