import React from "react";
import Sidebar from "../components/layout/Sidebar";
import JobOpenings from "../components/dashboard/JobOpenings";

const JobPage = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="w-full p-6">
        <h1 className="page-title mb-4">Jobs</h1>
        <JobOpenings />
      </div>

    </div>
  );
};

export default JobPage;