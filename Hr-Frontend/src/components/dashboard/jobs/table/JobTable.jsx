import React from "react";
import JobRow from "./JobRow";

const JobTable = ({ jobs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Job Title</th>
            <th>Department</th>
            <th>Openings</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map(job => (
            <JobRow key={job.id} job={job} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;