import React from "react";
import { resumeData } from "../../data";
import { filterDataBySearchTerm, getStatusColor } from "../../utils/common/helper";

const ResumeTable = ({ searchTerm, filterStatus }) => {
  // Filter resumes based on searchTerm and filterStatus
  const searched = filterDataBySearchTerm(resumeData, searchTerm, ["name", "role"]);
  const filteredResumes = searched.filter(r => filterStatus === "All" || r.status === filterStatus);

  return (
    <div className="card mb-6">
      <h2 className="card-header mt-1 mb-4">Resume List</h2>

      <table className="table-custom">
        <thead>
          <tr className="table-head-row">
            <th className="table-cell">Name</th>
            <th className="table-cell">Role</th>
            <th className="table-cell">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredResumes.length > 0 ? (
            filteredResumes.map((r) => (
              <tr key={r.id} className="table-row-hover">
                <td className="table-cell">{r.name}</td>
                <td className="table-cell">{r.role}</td>
                <td className="table-cell">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${getStatusColor(r.status)}`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResumeTable;