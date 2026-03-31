import React from "react";
import { candidatesData } from "../../data";
import { getStatusColor } from "../../utils/common/helper";


const CandidatesTable = () => {
  return (
    <div className="card">
      <h2 className="card-header">Candidates</h2>

      <table className="table-custom">
        <thead>
          <tr className="table-head-row">
            <th className="table-cell">Name</th>
            <th className="table-cell">Role</th>
            <th className="table-cell">Status</th>
          </tr>
        </thead>

        <tbody>
          {candidatesData.map((cand) => (
            <tr key={cand.id} className="text-center">
              <td className="table-cell">{cand.name}</td>
              <td className="table-cell">{cand.role}</td>
              <td className="table-cell">
                <span className={`px-2 py-1 rounded-full text-white text-sm ${getStatusColor(cand.status)}`}>
                  {cand.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesTable;