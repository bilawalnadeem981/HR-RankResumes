import React from "react";
import CandidatesTable from "../components/candidates/CandidatesTable";

const CandidatesPage = () => {
  return (
    <div className="w-full">
      <h1 className="page-title mb-6">Candidates</h1>
      <CandidatesTable />
    </div>
  );
};

export default CandidatesPage;
