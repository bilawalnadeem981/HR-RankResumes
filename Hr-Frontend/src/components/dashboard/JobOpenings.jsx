import React, { useState } from "react";
import { EditIcon, ViewIcon } from "../../assets/icons/JobOpenings/icon.jsx";
import { jobOpeningsData } from "../../data";
import { filterDataBySearchTerm, getStatusColor } from "../../utils/common/helper";

const JobOpenings = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const filteredJobs = filterDataBySearchTerm(jobOpeningsData, searchTerm, ["title", "department"]);

  return (
    <div className="card-xl mt-6">
      <h3 className="text-xl font-bold mb-4">Job Openings</h3>

      <input
        type="text"
        placeholder="Search by job title or department..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Openings</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <tr key={job.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{job.title}</td>
                  <td className="px-4 py-2">{job.department}</td>
                  <td className="px-4 py-2">{job.openings}</td>

                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${getStatusColor(job.status)}`}
                    >
                      {job.status}
                    </span>
                  </td>

                  <td className="px-4 py-2 flex gap-2">
                    <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      <ViewIcon />
                    </button>

                    <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobOpenings;