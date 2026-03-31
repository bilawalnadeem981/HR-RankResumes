import React from "react";
import Sidebar from "../components/layout/Sidebar";
import UploadButton from "../components/dashboard/UploadButton";

const UploadPage = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 w-full p-6">
        <h1 className="page-title mb-4">Upload Resume</h1>
        <UploadButton />
      </div>

    </div>
  );
};

export default UploadPage;