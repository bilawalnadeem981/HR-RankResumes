import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { candidatesData } from "../../data";
import CandidateTable from "../../components/dashboard/candidates/CandidateTable";
import CandidateFilters from "../../components/dashboard/candidates/CandidateFilters";
import { Users, UserPlus } from "lucide-react";

const CandidatesPage = () => {
  const { role } = useOutletContext();
  const isAdmin = role === "admin";
  const [candidates, setCandidates] = useState(candidatesData);

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 animate-fade-in">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-indigo-600 fill-indigo-100" />
            <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em]">Talent Pool</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Candidates</h1>
          <p className="text-gray-500 font-medium mt-1">
            {isAdmin 
              ? "Review and manage all candidate applications across your pipeline." 
              : "View available candidates and their AI-verified skill scores."}
          </p>
        </div>
        
        {isAdmin && (
          <button className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-2xl shadow-lg shadow-indigo-100 hover:shadow-indigo-300 transition-all duration-300 active:scale-95">
            <UserPlus className="w-5 h-5 transition-transform group-hover:scale-110" />
            Add Candidate
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 space-y-6">
          <CandidateFilters
            candidates={candidates}
            setCandidates={setCandidates}
            originalData={candidatesData}
          />

          <CandidateTable candidates={candidates} />
        </div>
      </div>

    </div>
  );
};

export default CandidatesPage;