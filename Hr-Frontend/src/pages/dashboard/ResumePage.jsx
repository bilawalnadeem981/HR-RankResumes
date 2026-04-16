import React, { useState } from "react";
import ResumeTable from "../../components/dashboard/ResumeTable";


const ResumePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  return (
    <div className="w-full space-y-4">

      <h1 className="page-title">Resumes</h1>

      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchTerm(event.target.value)}

        className="border p-2"
      />

      <ResumeTable
        searchTerm={searchTerm}
        filterStatus={filterStatus}
      />

    </div>
  );
};

export default ResumePage;