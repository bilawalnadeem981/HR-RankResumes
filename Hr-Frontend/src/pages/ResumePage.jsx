import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import ResumeTable from "../components/dashboard/ResumeTable";

const ResumePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 w-full p-6 space-y-4">

        <h1 className="page-title">Resumes</h1>

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2"
        />

        <ResumeTable
          searchTerm={searchTerm}
          filterStatus={filterStatus}
        />

      </div>

    </div>
  );
};

export default ResumePage;