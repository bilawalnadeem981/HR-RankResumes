import React from "react";
import JobRow from "./JobRow";

const JobTable = ({ jobs }) => {
  return (
    <div className="table-wrapper">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="table-head">
            <tr>
              <th className="table-th">Job Position</th>
              <th className="table-th text-center">Department</th>
              <th className="table-th text-center">Openings</th>
              <th className="table-th text-center">Status</th>
              <th className="table-th text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {jobs.length > 0 ? (
              jobs.map(job => (
                <JobRow key={job.id} job={job} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-gray-400 font-medium italic">
                  No job openings found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTable;