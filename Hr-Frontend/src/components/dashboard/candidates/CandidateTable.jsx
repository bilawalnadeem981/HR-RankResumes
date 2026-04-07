import React from "react";
import CandidateRow from "./CandidateRow";

const CandidateTable = ({ candidates }) => {
  return (
    <table className="w-full border rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Experience</th>
          <th>Skills</th>
          <th>Score</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {candidates.map((candidate) => (
          <CandidateRow key={candidate.id} candidate={candidate} />
        ))}
      </tbody>
    </table>
  );
};

export default CandidateTable;