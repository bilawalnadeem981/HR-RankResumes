import React, { useState } from "react";
import { candidatesData } from "../data";
import CandidateTable from "../components/dashboard/candidates/CandidateTable";
import CandidateFilters from "../components/dashboard/candidates/CandidateFilters";

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState(candidatesData);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Candidates</h1>

      <CandidateFilters
        candidates={candidates}
        setCandidates={setCandidates}
        originalData={candidatesData}
      />

      <CandidateTable candidates={candidates} />
    </div>
  );
};

export default CandidatesPage;