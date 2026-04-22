import React from "react";
import CandidateRow from "./CandidateRow";

const CandidateTable = ({ candidates }) => {
  return (
    <div className="table-wrapper">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="table-head">
            <tr>
              <th className="table-th">Candidate Info</th>
              <th className="table-th">Role Details</th>
              <th className="table-th text-center">Experience</th>
              <th className="table-th">Core Skills</th>
              <th className="table-th text-center">AI Score</th>
              <th className="table-th text-center">Status</th>
              <th className="table-th text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {candidates.length > 0 ? (
              candidates.map((candidate) => (
                <CandidateRow key={candidate.id} candidate={candidate} />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-12 text-center text-gray-400 font-medium italic">
                  No candidates found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateTable;