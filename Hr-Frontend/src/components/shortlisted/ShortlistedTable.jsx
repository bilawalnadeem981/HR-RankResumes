import React from "react";
import { shortlistedData } from "../../data";

const ShortlistedTable = () => {
  return (
    <div className="card">
      <h2 className="card-header mt-1 mb-4">Shortlisted Candidates</h2>
      <table className="table-custom">
        <thead>
          <tr className="table-head-row">
            <th className="table-cell">Name</th>
            <th className="table-cell">Role</th>
            <th className="table-cell">Score</th>
          </tr>
        </thead>
        <tbody>
          {shortlistedData.map((cand, index) => (
            <tr key={index} className="text-center">
              <td className="table-cell">{cand.name}</td>
              <td className="table-cell">{cand.role}</td>
              <td className="table-cell">{cand.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShortlistedTable;